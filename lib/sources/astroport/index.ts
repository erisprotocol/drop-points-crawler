import { SourceInterface } from '../../../types/source';
import { Logger } from 'pino';
import { Tendermint34Client } from '@cosmjs/tendermint-rpc';
import { CbOnUserBalances } from '../../../types/cbOnUserBalances';
import { queryContractOnHeight } from '../../query';
import {
  QuerySupplyOfRequest,
  QuerySupplyOfResponse,
} from 'cosmjs-types/cosmos/bank/v1beta1/query';
import pLimit from 'p-limit';

export default class AstroportSource implements SourceInterface {
  rpc: string;
  concurrencyLimit: number;
  paginationLimit: number;
  logger: Logger<never>;
  assets: Record<string, { denom: string; pair_contract: string }> = {};
  sourceName: string;
  client: Tendermint34Client | undefined;

  getClient = async () => {
    if (!this.client) {
      this.client = await Tendermint34Client.connect(this.rpc);
    }
    return this.client;
  };

  constructor(rpc: string, logger: Logger<never>, params: any) {
    this.logger = logger;

    if (!params.source) {
      throw new Error('No source name configured in params');
    }
    this.sourceName = params.source;

    if (!params.assets) {
      throw new Error('No assets configured in params');
    }
    this.assets = params.assets;

    this.rpc = rpc;
    this.concurrencyLimit = parseInt(params.concurrency_limit || '3', 10);
    this.paginationLimit = parseInt(params.paginationLimit || '30', 10);
  }

  getUserBalance = async (
    account: string,
    lpContract: string,
    height: number,
    assetId: string,
  ) => {
    const client = await this.getClient();
    const balance = (
      await queryContractOnHeight<{ balance: string }>(
        client,
        lpContract,
        height,
        {
          balance_at: {
            address: account,
            block: height,
          },
        },
      )
    ).balance;
    return {
      address: account,
      balance,
      asset: assetId,
    };
  };

  getLpContract = async (
    height: number,
    pairContract: string,
  ): Promise<string> => {
    const client = await this.getClient();
    const data: any = await queryContractOnHeight(
      client,
      pairContract,
      height,
      {
        pair: {},
      },
    );

    return data.liquidity_token;
  };

  getLpExchangeRate = async (
    height: number,
    denom: string,
    lpContract: string,
  ): Promise<number> => {
    const client = await this.getClient();
    const lpTotalSupply = await queryContractOnHeight<string>(
      client,
      lpContract,
      height,
      {
        total_supply_at: {
          block: height,
        },
      },
    );

    const path = '/cosmos.bank.v1beta1.Query/SupplyOf';
    const request = {
      denom,
    };
    const data = QuerySupplyOfRequest.encode(request).finish();
    const response = await client.abciQuery({ path, data, height });
    this.logger.trace('Got response %o', response);
    if (response.code !== 0) {
      throw new Error(
        `Tendermint query error: ${response.log} Code: ${response.code}`,
      );
    }
    const assetTotalSupply = QuerySupplyOfResponse.decode(response.value).amount
      .amount;

    return Number(assetTotalSupply) / Number(lpTotalSupply);
  };

  getUsersBalances = async (
    height: number,
    multipliers: Record<string, number>,
    cb: CbOnUserBalances,
  ): Promise<void> => {
    for (const [assetId, asset] of Object.entries(this.assets)) {
      const lpContract = await this.getLpContract(height, asset.pair_contract);
      const exchangeRate = await this.getLpExchangeRate(
        height,
        asset.denom,
        lpContract,
      );
      const multiplier = multipliers[assetId] * exchangeRate;
      // TODO: logs

      const client = await this.getClient();
      let startAfter = undefined;
      while (true) {
        this.logger.info(`Fetching accounts at key ${startAfter}`);
        const accountsData: { accounts: string[] } =
          await queryContractOnHeight(client, lpContract, height, {
            all_accounts: {
              limit: this.paginationLimit,
              start_after: startAfter,
            },
          });
        const accounts = accountsData.accounts;
        if (accounts.length == 0) {
          break;
        }
        startAfter = accounts[accounts.length - 1];

        const withConcurrencyLimit = pLimit(this.concurrencyLimit);
        let balances = (
          await Promise.allSettled(
            accounts.map((account) =>
              withConcurrencyLimit(
                async () =>
                  await this.getUserBalance(
                    account,
                    lpContract,
                    height,
                    assetId,
                  ),
              ),
            ),
          )
        ).reduce(
          (
            filteredResult: {
              address: string;
              balance: string;
              asset: string;
            }[],
            settledResult,
          ) => {
            if (settledResult.status === 'fulfilled' && settledResult.value) {
              filteredResult.push(settledResult.value);
            }
            return filteredResult;
          },
          [],
        );
        balances = balances.filter((balance) => balance.balance != '0');
        if (balances.length == 0) {
          continue;
        }

        balances = balances.map((balance) => {
          balance.balance = String(
            Math.round(Number(balance.balance) * multiplier),
          );
          return balance;
        });
        cb(balances);
      }
    }
  };

  getLastBlockHeight = async (): Promise<number> => {
    const client = await this.getClient();
    const status = await client.status();
    return status.syncInfo.latestBlockHeight;
  };
}
