import { Option, OptionAmino, OptionSDKType, Syntax, syntaxFromJSON, syntaxToJSON } from "./type";
import { SourceContext, SourceContextAmino, SourceContextSDKType } from "./source_context";
import { isSet } from "../../helpers";
import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
/**
 * Api is a light-weight descriptor for an API Interface.
 * 
 * Interfaces are also described as "protocol buffer services" in some contexts,
 * such as by the "service" keyword in a .proto file, but they are different
 * from API Services, which represent a concrete implementation of an interface
 * as opposed to simply a description of methods and bindings. They are also
 * sometimes simply referred to as "APIs" in other contexts, such as the name of
 * this message itself. See https://cloud.google.com/apis/design/glossary for
 * detailed terminology.
 */
export interface Api {
  /**
   * The fully qualified name of this interface, including package name
   * followed by the interface's simple name.
   */
  name: string;
  /** The methods of this interface, in unspecified order. */
  methods: Method[];
  /** Any metadata attached to the interface. */
  options: Option[];
  /**
   * A version string for this interface. If specified, must have the form
   * `major-version.minor-version`, as in `1.10`. If the minor version is
   * omitted, it defaults to zero. If the entire version field is empty, the
   * major version is derived from the package name, as outlined below. If the
   * field is not empty, the version in the package name will be verified to be
   * consistent with what is provided here.
   * 
   * The versioning schema uses [semantic
   * versioning](http://semver.org) where the major version number
   * indicates a breaking change and the minor version an additive,
   * non-breaking change. Both version numbers are signals to users
   * what to expect from different versions, and should be carefully
   * chosen based on the product plan.
   * 
   * The major version is also reflected in the package name of the
   * interface, which must end in `v<major-version>`, as in
   * `google.feature.v1`. For major versions 0 and 1, the suffix can
   * be omitted. Zero major versions must only be used for
   * experimental, non-GA interfaces.
   */
  version: string;
  /**
   * Source context for the protocol buffer service represented by this
   * message.
   */
  sourceContext?: SourceContext;
  /** Included interfaces. See [Mixin][]. */
  mixins: Mixin[];
  /** The source syntax of the service. */
  syntax: Syntax;
}
export interface ApiProtoMsg {
  typeUrl: "/google.protobuf.Api";
  value: Uint8Array;
}
/**
 * Api is a light-weight descriptor for an API Interface.
 * 
 * Interfaces are also described as "protocol buffer services" in some contexts,
 * such as by the "service" keyword in a .proto file, but they are different
 * from API Services, which represent a concrete implementation of an interface
 * as opposed to simply a description of methods and bindings. They are also
 * sometimes simply referred to as "APIs" in other contexts, such as the name of
 * this message itself. See https://cloud.google.com/apis/design/glossary for
 * detailed terminology.
 */
export interface ApiAmino {
  /**
   * The fully qualified name of this interface, including package name
   * followed by the interface's simple name.
   */
  name?: string;
  /** The methods of this interface, in unspecified order. */
  methods?: MethodAmino[];
  /** Any metadata attached to the interface. */
  options?: OptionAmino[];
  /**
   * A version string for this interface. If specified, must have the form
   * `major-version.minor-version`, as in `1.10`. If the minor version is
   * omitted, it defaults to zero. If the entire version field is empty, the
   * major version is derived from the package name, as outlined below. If the
   * field is not empty, the version in the package name will be verified to be
   * consistent with what is provided here.
   * 
   * The versioning schema uses [semantic
   * versioning](http://semver.org) where the major version number
   * indicates a breaking change and the minor version an additive,
   * non-breaking change. Both version numbers are signals to users
   * what to expect from different versions, and should be carefully
   * chosen based on the product plan.
   * 
   * The major version is also reflected in the package name of the
   * interface, which must end in `v<major-version>`, as in
   * `google.feature.v1`. For major versions 0 and 1, the suffix can
   * be omitted. Zero major versions must only be used for
   * experimental, non-GA interfaces.
   */
  version?: string;
  /**
   * Source context for the protocol buffer service represented by this
   * message.
   */
  source_context?: SourceContextAmino;
  /** Included interfaces. See [Mixin][]. */
  mixins?: MixinAmino[];
  /** The source syntax of the service. */
  syntax?: Syntax;
}
export interface ApiAminoMsg {
  type: "/google.protobuf.Api";
  value: ApiAmino;
}
/**
 * Api is a light-weight descriptor for an API Interface.
 * 
 * Interfaces are also described as "protocol buffer services" in some contexts,
 * such as by the "service" keyword in a .proto file, but they are different
 * from API Services, which represent a concrete implementation of an interface
 * as opposed to simply a description of methods and bindings. They are also
 * sometimes simply referred to as "APIs" in other contexts, such as the name of
 * this message itself. See https://cloud.google.com/apis/design/glossary for
 * detailed terminology.
 */
export interface ApiSDKType {
  name: string;
  methods: MethodSDKType[];
  options: OptionSDKType[];
  version: string;
  source_context?: SourceContextSDKType;
  mixins: MixinSDKType[];
  syntax: Syntax;
}
/** Method represents a method of an API interface. */
export interface Method {
  /** The simple name of this method. */
  name: string;
  /** A URL of the input message type. */
  requestTypeUrl: string;
  /** If true, the request is streamed. */
  requestStreaming: boolean;
  /** The URL of the output message type. */
  responseTypeUrl: string;
  /** If true, the response is streamed. */
  responseStreaming: boolean;
  /** Any metadata attached to the method. */
  options: Option[];
  /** The source syntax of this method. */
  syntax: Syntax;
}
export interface MethodProtoMsg {
  typeUrl: "/google.protobuf.Method";
  value: Uint8Array;
}
/** Method represents a method of an API interface. */
export interface MethodAmino {
  /** The simple name of this method. */
  name?: string;
  /** A URL of the input message type. */
  request_type_url?: string;
  /** If true, the request is streamed. */
  request_streaming?: boolean;
  /** The URL of the output message type. */
  response_type_url?: string;
  /** If true, the response is streamed. */
  response_streaming?: boolean;
  /** Any metadata attached to the method. */
  options?: OptionAmino[];
  /** The source syntax of this method. */
  syntax?: Syntax;
}
export interface MethodAminoMsg {
  type: "/google.protobuf.Method";
  value: MethodAmino;
}
/** Method represents a method of an API interface. */
export interface MethodSDKType {
  name: string;
  request_type_url: string;
  request_streaming: boolean;
  response_type_url: string;
  response_streaming: boolean;
  options: OptionSDKType[];
  syntax: Syntax;
}
/**
 * Declares an API Interface to be included in this interface. The including
 * interface must redeclare all the methods from the included interface, but
 * documentation and options are inherited as follows:
 * 
 * - If after comment and whitespace stripping, the documentation
 *   string of the redeclared method is empty, it will be inherited
 *   from the original method.
 * 
 * - Each annotation belonging to the service config (http,
 *   visibility) which is not set in the redeclared method will be
 *   inherited.
 * 
 * - If an http annotation is inherited, the path pattern will be
 *   modified as follows. Any version prefix will be replaced by the
 *   version of the including interface plus the [root][] path if
 *   specified.
 * 
 * Example of a simple mixin:
 * 
 *     package google.acl.v1;
 *     service AccessControl {
 *       // Get the underlying ACL object.
 *       rpc GetAcl(GetAclRequest) returns (Acl) {
 *         option (google.api.http).get = "/v1/{resource=**}:getAcl";
 *       }
 *     }
 * 
 *     package google.storage.v2;
 *     service Storage {
 *       rpc GetAcl(GetAclRequest) returns (Acl);
 * 
 *       // Get a data record.
 *       rpc GetData(GetDataRequest) returns (Data) {
 *         option (google.api.http).get = "/v2/{resource=**}";
 *       }
 *     }
 * 
 * Example of a mixin configuration:
 * 
 *     apis:
 *     - name: google.storage.v2.Storage
 *       mixins:
 *       - name: google.acl.v1.AccessControl
 * 
 * The mixin construct implies that all methods in `AccessControl` are
 * also declared with same name and request/response types in
 * `Storage`. A documentation generator or annotation processor will
 * see the effective `Storage.GetAcl` method after inherting
 * documentation and annotations as follows:
 * 
 *     service Storage {
 *       // Get the underlying ACL object.
 *       rpc GetAcl(GetAclRequest) returns (Acl) {
 *         option (google.api.http).get = "/v2/{resource=**}:getAcl";
 *       }
 *       ...
 *     }
 * 
 * Note how the version in the path pattern changed from `v1` to `v2`.
 * 
 * If the `root` field in the mixin is specified, it should be a
 * relative path under which inherited HTTP paths are placed. Example:
 * 
 *     apis:
 *     - name: google.storage.v2.Storage
 *       mixins:
 *       - name: google.acl.v1.AccessControl
 *         root: acls
 * 
 * This implies the following inherited HTTP annotation:
 * 
 *     service Storage {
 *       // Get the underlying ACL object.
 *       rpc GetAcl(GetAclRequest) returns (Acl) {
 *         option (google.api.http).get = "/v2/acls/{resource=**}:getAcl";
 *       }
 *       ...
 *     }
 */
export interface Mixin {
  /** The fully qualified name of the interface which is included. */
  name: string;
  /**
   * If non-empty specifies a path under which inherited HTTP paths
   * are rooted.
   */
  root: string;
}
export interface MixinProtoMsg {
  typeUrl: "/google.protobuf.Mixin";
  value: Uint8Array;
}
/**
 * Declares an API Interface to be included in this interface. The including
 * interface must redeclare all the methods from the included interface, but
 * documentation and options are inherited as follows:
 * 
 * - If after comment and whitespace stripping, the documentation
 *   string of the redeclared method is empty, it will be inherited
 *   from the original method.
 * 
 * - Each annotation belonging to the service config (http,
 *   visibility) which is not set in the redeclared method will be
 *   inherited.
 * 
 * - If an http annotation is inherited, the path pattern will be
 *   modified as follows. Any version prefix will be replaced by the
 *   version of the including interface plus the [root][] path if
 *   specified.
 * 
 * Example of a simple mixin:
 * 
 *     package google.acl.v1;
 *     service AccessControl {
 *       // Get the underlying ACL object.
 *       rpc GetAcl(GetAclRequest) returns (Acl) {
 *         option (google.api.http).get = "/v1/{resource=**}:getAcl";
 *       }
 *     }
 * 
 *     package google.storage.v2;
 *     service Storage {
 *       rpc GetAcl(GetAclRequest) returns (Acl);
 * 
 *       // Get a data record.
 *       rpc GetData(GetDataRequest) returns (Data) {
 *         option (google.api.http).get = "/v2/{resource=**}";
 *       }
 *     }
 * 
 * Example of a mixin configuration:
 * 
 *     apis:
 *     - name: google.storage.v2.Storage
 *       mixins:
 *       - name: google.acl.v1.AccessControl
 * 
 * The mixin construct implies that all methods in `AccessControl` are
 * also declared with same name and request/response types in
 * `Storage`. A documentation generator or annotation processor will
 * see the effective `Storage.GetAcl` method after inherting
 * documentation and annotations as follows:
 * 
 *     service Storage {
 *       // Get the underlying ACL object.
 *       rpc GetAcl(GetAclRequest) returns (Acl) {
 *         option (google.api.http).get = "/v2/{resource=**}:getAcl";
 *       }
 *       ...
 *     }
 * 
 * Note how the version in the path pattern changed from `v1` to `v2`.
 * 
 * If the `root` field in the mixin is specified, it should be a
 * relative path under which inherited HTTP paths are placed. Example:
 * 
 *     apis:
 *     - name: google.storage.v2.Storage
 *       mixins:
 *       - name: google.acl.v1.AccessControl
 *         root: acls
 * 
 * This implies the following inherited HTTP annotation:
 * 
 *     service Storage {
 *       // Get the underlying ACL object.
 *       rpc GetAcl(GetAclRequest) returns (Acl) {
 *         option (google.api.http).get = "/v2/acls/{resource=**}:getAcl";
 *       }
 *       ...
 *     }
 */
export interface MixinAmino {
  /** The fully qualified name of the interface which is included. */
  name?: string;
  /**
   * If non-empty specifies a path under which inherited HTTP paths
   * are rooted.
   */
  root?: string;
}
export interface MixinAminoMsg {
  type: "/google.protobuf.Mixin";
  value: MixinAmino;
}
/**
 * Declares an API Interface to be included in this interface. The including
 * interface must redeclare all the methods from the included interface, but
 * documentation and options are inherited as follows:
 * 
 * - If after comment and whitespace stripping, the documentation
 *   string of the redeclared method is empty, it will be inherited
 *   from the original method.
 * 
 * - Each annotation belonging to the service config (http,
 *   visibility) which is not set in the redeclared method will be
 *   inherited.
 * 
 * - If an http annotation is inherited, the path pattern will be
 *   modified as follows. Any version prefix will be replaced by the
 *   version of the including interface plus the [root][] path if
 *   specified.
 * 
 * Example of a simple mixin:
 * 
 *     package google.acl.v1;
 *     service AccessControl {
 *       // Get the underlying ACL object.
 *       rpc GetAcl(GetAclRequest) returns (Acl) {
 *         option (google.api.http).get = "/v1/{resource=**}:getAcl";
 *       }
 *     }
 * 
 *     package google.storage.v2;
 *     service Storage {
 *       rpc GetAcl(GetAclRequest) returns (Acl);
 * 
 *       // Get a data record.
 *       rpc GetData(GetDataRequest) returns (Data) {
 *         option (google.api.http).get = "/v2/{resource=**}";
 *       }
 *     }
 * 
 * Example of a mixin configuration:
 * 
 *     apis:
 *     - name: google.storage.v2.Storage
 *       mixins:
 *       - name: google.acl.v1.AccessControl
 * 
 * The mixin construct implies that all methods in `AccessControl` are
 * also declared with same name and request/response types in
 * `Storage`. A documentation generator or annotation processor will
 * see the effective `Storage.GetAcl` method after inherting
 * documentation and annotations as follows:
 * 
 *     service Storage {
 *       // Get the underlying ACL object.
 *       rpc GetAcl(GetAclRequest) returns (Acl) {
 *         option (google.api.http).get = "/v2/{resource=**}:getAcl";
 *       }
 *       ...
 *     }
 * 
 * Note how the version in the path pattern changed from `v1` to `v2`.
 * 
 * If the `root` field in the mixin is specified, it should be a
 * relative path under which inherited HTTP paths are placed. Example:
 * 
 *     apis:
 *     - name: google.storage.v2.Storage
 *       mixins:
 *       - name: google.acl.v1.AccessControl
 *         root: acls
 * 
 * This implies the following inherited HTTP annotation:
 * 
 *     service Storage {
 *       // Get the underlying ACL object.
 *       rpc GetAcl(GetAclRequest) returns (Acl) {
 *         option (google.api.http).get = "/v2/acls/{resource=**}:getAcl";
 *       }
 *       ...
 *     }
 */
export interface MixinSDKType {
  name: string;
  root: string;
}
function createBaseApi(): Api {
  return {
    name: "",
    methods: [],
    options: [],
    version: "",
    sourceContext: undefined,
    mixins: [],
    syntax: 0
  };
}
export const Api = {
  typeUrl: "/google.protobuf.Api",
  is(o: any): o is Api {
    return o && (o.$typeUrl === Api.typeUrl || typeof o.name === "string" && Array.isArray(o.methods) && (!o.methods.length || Method.is(o.methods[0])) && Array.isArray(o.options) && (!o.options.length || Option.is(o.options[0])) && typeof o.version === "string" && Array.isArray(o.mixins) && (!o.mixins.length || Mixin.is(o.mixins[0])) && isSet(o.syntax));
  },
  isSDK(o: any): o is ApiSDKType {
    return o && (o.$typeUrl === Api.typeUrl || typeof o.name === "string" && Array.isArray(o.methods) && (!o.methods.length || Method.isSDK(o.methods[0])) && Array.isArray(o.options) && (!o.options.length || Option.isSDK(o.options[0])) && typeof o.version === "string" && Array.isArray(o.mixins) && (!o.mixins.length || Mixin.isSDK(o.mixins[0])) && isSet(o.syntax));
  },
  isAmino(o: any): o is ApiAmino {
    return o && (o.$typeUrl === Api.typeUrl || typeof o.name === "string" && Array.isArray(o.methods) && (!o.methods.length || Method.isAmino(o.methods[0])) && Array.isArray(o.options) && (!o.options.length || Option.isAmino(o.options[0])) && typeof o.version === "string" && Array.isArray(o.mixins) && (!o.mixins.length || Mixin.isAmino(o.mixins[0])) && isSet(o.syntax));
  },
  encode(message: Api, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.methods) {
      Method.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.options) {
      Option.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.version !== "") {
      writer.uint32(34).string(message.version);
    }
    if (message.sourceContext !== undefined) {
      SourceContext.encode(message.sourceContext, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.mixins) {
      Mixin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.syntax !== 0) {
      writer.uint32(56).int32(message.syntax);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Api {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseApi();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.methods.push(Method.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 3:
          message.options.push(Option.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 4:
          message.version = reader.string();
          break;
        case 5:
          message.sourceContext = SourceContext.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 6:
          message.mixins.push(Mixin.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 7:
          message.syntax = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Api {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      methods: Array.isArray(object?.methods) ? object.methods.map((e: any) => Method.fromJSON(e)) : [],
      options: Array.isArray(object?.options) ? object.options.map((e: any) => Option.fromJSON(e)) : [],
      version: isSet(object.version) ? String(object.version) : "",
      sourceContext: isSet(object.sourceContext) ? SourceContext.fromJSON(object.sourceContext) : undefined,
      mixins: Array.isArray(object?.mixins) ? object.mixins.map((e: any) => Mixin.fromJSON(e)) : [],
      syntax: isSet(object.syntax) ? syntaxFromJSON(object.syntax) : -1
    };
  },
  toJSON(message: Api): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    if (message.methods) {
      obj.methods = message.methods.map(e => e ? Method.toJSON(e) : undefined);
    } else {
      obj.methods = [];
    }
    if (message.options) {
      obj.options = message.options.map(e => e ? Option.toJSON(e) : undefined);
    } else {
      obj.options = [];
    }
    message.version !== undefined && (obj.version = message.version);
    message.sourceContext !== undefined && (obj.sourceContext = message.sourceContext ? SourceContext.toJSON(message.sourceContext) : undefined);
    if (message.mixins) {
      obj.mixins = message.mixins.map(e => e ? Mixin.toJSON(e) : undefined);
    } else {
      obj.mixins = [];
    }
    message.syntax !== undefined && (obj.syntax = syntaxToJSON(message.syntax));
    return obj;
  },
  fromPartial(object: Partial<Api>): Api {
    const message = createBaseApi();
    message.name = object.name ?? "";
    message.methods = object.methods?.map(e => Method.fromPartial(e)) || [];
    message.options = object.options?.map(e => Option.fromPartial(e)) || [];
    message.version = object.version ?? "";
    message.sourceContext = object.sourceContext !== undefined && object.sourceContext !== null ? SourceContext.fromPartial(object.sourceContext) : undefined;
    message.mixins = object.mixins?.map(e => Mixin.fromPartial(e)) || [];
    message.syntax = object.syntax ?? 0;
    return message;
  },
  fromAmino(object: ApiAmino): Api {
    const message = createBaseApi();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    message.methods = object.methods?.map(e => Method.fromAmino(e)) || [];
    message.options = object.options?.map(e => Option.fromAmino(e)) || [];
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    }
    if (object.source_context !== undefined && object.source_context !== null) {
      message.sourceContext = SourceContext.fromAmino(object.source_context);
    }
    message.mixins = object.mixins?.map(e => Mixin.fromAmino(e)) || [];
    if (object.syntax !== undefined && object.syntax !== null) {
      message.syntax = object.syntax;
    }
    return message;
  },
  toAmino(message: Api, useInterfaces: boolean = true): ApiAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    if (message.methods) {
      obj.methods = message.methods.map(e => e ? Method.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.methods = message.methods;
    }
    if (message.options) {
      obj.options = message.options.map(e => e ? Option.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.options = message.options;
    }
    obj.version = message.version === "" ? undefined : message.version;
    obj.source_context = message.sourceContext ? SourceContext.toAmino(message.sourceContext, useInterfaces) : undefined;
    if (message.mixins) {
      obj.mixins = message.mixins.map(e => e ? Mixin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.mixins = message.mixins;
    }
    obj.syntax = message.syntax === 0 ? undefined : message.syntax;
    return obj;
  },
  fromAminoMsg(object: ApiAminoMsg): Api {
    return Api.fromAmino(object.value);
  },
  fromProtoMsg(message: ApiProtoMsg, useInterfaces: boolean = true): Api {
    return Api.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Api): Uint8Array {
    return Api.encode(message).finish();
  },
  toProtoMsg(message: Api): ApiProtoMsg {
    return {
      typeUrl: "/google.protobuf.Api",
      value: Api.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Api.typeUrl, Api);
function createBaseMethod(): Method {
  return {
    name: "",
    requestTypeUrl: "",
    requestStreaming: false,
    responseTypeUrl: "",
    responseStreaming: false,
    options: [],
    syntax: 0
  };
}
export const Method = {
  typeUrl: "/google.protobuf.Method",
  is(o: any): o is Method {
    return o && (o.$typeUrl === Method.typeUrl || typeof o.name === "string" && typeof o.requestTypeUrl === "string" && typeof o.requestStreaming === "boolean" && typeof o.responseTypeUrl === "string" && typeof o.responseStreaming === "boolean" && Array.isArray(o.options) && (!o.options.length || Option.is(o.options[0])) && isSet(o.syntax));
  },
  isSDK(o: any): o is MethodSDKType {
    return o && (o.$typeUrl === Method.typeUrl || typeof o.name === "string" && typeof o.request_type_url === "string" && typeof o.request_streaming === "boolean" && typeof o.response_type_url === "string" && typeof o.response_streaming === "boolean" && Array.isArray(o.options) && (!o.options.length || Option.isSDK(o.options[0])) && isSet(o.syntax));
  },
  isAmino(o: any): o is MethodAmino {
    return o && (o.$typeUrl === Method.typeUrl || typeof o.name === "string" && typeof o.request_type_url === "string" && typeof o.request_streaming === "boolean" && typeof o.response_type_url === "string" && typeof o.response_streaming === "boolean" && Array.isArray(o.options) && (!o.options.length || Option.isAmino(o.options[0])) && isSet(o.syntax));
  },
  encode(message: Method, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.requestTypeUrl !== "") {
      writer.uint32(18).string(message.requestTypeUrl);
    }
    if (message.requestStreaming === true) {
      writer.uint32(24).bool(message.requestStreaming);
    }
    if (message.responseTypeUrl !== "") {
      writer.uint32(34).string(message.responseTypeUrl);
    }
    if (message.responseStreaming === true) {
      writer.uint32(40).bool(message.responseStreaming);
    }
    for (const v of message.options) {
      Option.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.syntax !== 0) {
      writer.uint32(56).int32(message.syntax);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Method {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMethod();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.requestTypeUrl = reader.string();
          break;
        case 3:
          message.requestStreaming = reader.bool();
          break;
        case 4:
          message.responseTypeUrl = reader.string();
          break;
        case 5:
          message.responseStreaming = reader.bool();
          break;
        case 6:
          message.options.push(Option.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 7:
          message.syntax = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Method {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      requestTypeUrl: isSet(object.requestTypeUrl) ? String(object.requestTypeUrl) : "",
      requestStreaming: isSet(object.requestStreaming) ? Boolean(object.requestStreaming) : false,
      responseTypeUrl: isSet(object.responseTypeUrl) ? String(object.responseTypeUrl) : "",
      responseStreaming: isSet(object.responseStreaming) ? Boolean(object.responseStreaming) : false,
      options: Array.isArray(object?.options) ? object.options.map((e: any) => Option.fromJSON(e)) : [],
      syntax: isSet(object.syntax) ? syntaxFromJSON(object.syntax) : -1
    };
  },
  toJSON(message: Method): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.requestTypeUrl !== undefined && (obj.requestTypeUrl = message.requestTypeUrl);
    message.requestStreaming !== undefined && (obj.requestStreaming = message.requestStreaming);
    message.responseTypeUrl !== undefined && (obj.responseTypeUrl = message.responseTypeUrl);
    message.responseStreaming !== undefined && (obj.responseStreaming = message.responseStreaming);
    if (message.options) {
      obj.options = message.options.map(e => e ? Option.toJSON(e) : undefined);
    } else {
      obj.options = [];
    }
    message.syntax !== undefined && (obj.syntax = syntaxToJSON(message.syntax));
    return obj;
  },
  fromPartial(object: Partial<Method>): Method {
    const message = createBaseMethod();
    message.name = object.name ?? "";
    message.requestTypeUrl = object.requestTypeUrl ?? "";
    message.requestStreaming = object.requestStreaming ?? false;
    message.responseTypeUrl = object.responseTypeUrl ?? "";
    message.responseStreaming = object.responseStreaming ?? false;
    message.options = object.options?.map(e => Option.fromPartial(e)) || [];
    message.syntax = object.syntax ?? 0;
    return message;
  },
  fromAmino(object: MethodAmino): Method {
    const message = createBaseMethod();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.request_type_url !== undefined && object.request_type_url !== null) {
      message.requestTypeUrl = object.request_type_url;
    }
    if (object.request_streaming !== undefined && object.request_streaming !== null) {
      message.requestStreaming = object.request_streaming;
    }
    if (object.response_type_url !== undefined && object.response_type_url !== null) {
      message.responseTypeUrl = object.response_type_url;
    }
    if (object.response_streaming !== undefined && object.response_streaming !== null) {
      message.responseStreaming = object.response_streaming;
    }
    message.options = object.options?.map(e => Option.fromAmino(e)) || [];
    if (object.syntax !== undefined && object.syntax !== null) {
      message.syntax = object.syntax;
    }
    return message;
  },
  toAmino(message: Method, useInterfaces: boolean = true): MethodAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.request_type_url = message.requestTypeUrl === "" ? undefined : message.requestTypeUrl;
    obj.request_streaming = message.requestStreaming === false ? undefined : message.requestStreaming;
    obj.response_type_url = message.responseTypeUrl === "" ? undefined : message.responseTypeUrl;
    obj.response_streaming = message.responseStreaming === false ? undefined : message.responseStreaming;
    if (message.options) {
      obj.options = message.options.map(e => e ? Option.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.options = message.options;
    }
    obj.syntax = message.syntax === 0 ? undefined : message.syntax;
    return obj;
  },
  fromAminoMsg(object: MethodAminoMsg): Method {
    return Method.fromAmino(object.value);
  },
  fromProtoMsg(message: MethodProtoMsg, useInterfaces: boolean = true): Method {
    return Method.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Method): Uint8Array {
    return Method.encode(message).finish();
  },
  toProtoMsg(message: Method): MethodProtoMsg {
    return {
      typeUrl: "/google.protobuf.Method",
      value: Method.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Method.typeUrl, Method);
function createBaseMixin(): Mixin {
  return {
    name: "",
    root: ""
  };
}
export const Mixin = {
  typeUrl: "/google.protobuf.Mixin",
  is(o: any): o is Mixin {
    return o && (o.$typeUrl === Mixin.typeUrl || typeof o.name === "string" && typeof o.root === "string");
  },
  isSDK(o: any): o is MixinSDKType {
    return o && (o.$typeUrl === Mixin.typeUrl || typeof o.name === "string" && typeof o.root === "string");
  },
  isAmino(o: any): o is MixinAmino {
    return o && (o.$typeUrl === Mixin.typeUrl || typeof o.name === "string" && typeof o.root === "string");
  },
  encode(message: Mixin, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.root !== "") {
      writer.uint32(18).string(message.root);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Mixin {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMixin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.root = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Mixin {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      root: isSet(object.root) ? String(object.root) : ""
    };
  },
  toJSON(message: Mixin): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.root !== undefined && (obj.root = message.root);
    return obj;
  },
  fromPartial(object: Partial<Mixin>): Mixin {
    const message = createBaseMixin();
    message.name = object.name ?? "";
    message.root = object.root ?? "";
    return message;
  },
  fromAmino(object: MixinAmino): Mixin {
    const message = createBaseMixin();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.root !== undefined && object.root !== null) {
      message.root = object.root;
    }
    return message;
  },
  toAmino(message: Mixin, useInterfaces: boolean = true): MixinAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.root = message.root === "" ? undefined : message.root;
    return obj;
  },
  fromAminoMsg(object: MixinAminoMsg): Mixin {
    return Mixin.fromAmino(object.value);
  },
  fromProtoMsg(message: MixinProtoMsg, useInterfaces: boolean = true): Mixin {
    return Mixin.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Mixin): Uint8Array {
    return Mixin.encode(message).finish();
  },
  toProtoMsg(message: Mixin): MixinProtoMsg {
    return {
      typeUrl: "/google.protobuf.Mixin",
      value: Mixin.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Mixin.typeUrl, Mixin);