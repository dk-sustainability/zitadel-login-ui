/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal";
import { Struct } from "#/proto/google/protobuf/struct";
import { Details, ListDetails, Organisation } from "../../object/v2/object";
import {
  PasskeyAuthenticator,
  passkeyAuthenticatorFromJSON,
  passkeyAuthenticatorToJSON,
  PasskeyRegistrationCode,
  ReturnPasskeyRegistrationCode,
  SendPasskeyRegistrationLink,
} from "./auth";
import { ReturnEmailVerificationCode, SendEmailVerificationCode, SetHumanEmail } from "./email";
import { IDPInformation, IDPIntent, IDPLink, LDAPCredentials, RedirectURLs } from "./idp";
import { HashedPassword, Password, ReturnPasswordResetCode, SendPasswordResetLink } from "./password";
import { ReturnPhoneVerificationCode, SendPhoneVerificationCode, SetHumanPhone } from "./phone";
import { SetHumanProfile, SetMetadataEntry } from "./user";

export const protobufPackage = "zitadel.user.v2";

export enum AuthenticationMethodType {
  AUTHENTICATION_METHOD_TYPE_UNSPECIFIED = 0,
  AUTHENTICATION_METHOD_TYPE_PASSWORD = 1,
  AUTHENTICATION_METHOD_TYPE_PASSKEY = 2,
  AUTHENTICATION_METHOD_TYPE_IDP = 3,
  AUTHENTICATION_METHOD_TYPE_TOTP = 4,
  AUTHENTICATION_METHOD_TYPE_U2F = 5,
  AUTHENTICATION_METHOD_TYPE_OTP_SMS = 6,
  AUTHENTICATION_METHOD_TYPE_OTP_EMAIL = 7,
  UNRECOGNIZED = -1,
}

export function authenticationMethodTypeFromJSON(object: any): AuthenticationMethodType {
  switch (object) {
    case 0:
    case "AUTHENTICATION_METHOD_TYPE_UNSPECIFIED":
      return AuthenticationMethodType.AUTHENTICATION_METHOD_TYPE_UNSPECIFIED;
    case 1:
    case "AUTHENTICATION_METHOD_TYPE_PASSWORD":
      return AuthenticationMethodType.AUTHENTICATION_METHOD_TYPE_PASSWORD;
    case 2:
    case "AUTHENTICATION_METHOD_TYPE_PASSKEY":
      return AuthenticationMethodType.AUTHENTICATION_METHOD_TYPE_PASSKEY;
    case 3:
    case "AUTHENTICATION_METHOD_TYPE_IDP":
      return AuthenticationMethodType.AUTHENTICATION_METHOD_TYPE_IDP;
    case 4:
    case "AUTHENTICATION_METHOD_TYPE_TOTP":
      return AuthenticationMethodType.AUTHENTICATION_METHOD_TYPE_TOTP;
    case 5:
    case "AUTHENTICATION_METHOD_TYPE_U2F":
      return AuthenticationMethodType.AUTHENTICATION_METHOD_TYPE_U2F;
    case 6:
    case "AUTHENTICATION_METHOD_TYPE_OTP_SMS":
      return AuthenticationMethodType.AUTHENTICATION_METHOD_TYPE_OTP_SMS;
    case 7:
    case "AUTHENTICATION_METHOD_TYPE_OTP_EMAIL":
      return AuthenticationMethodType.AUTHENTICATION_METHOD_TYPE_OTP_EMAIL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AuthenticationMethodType.UNRECOGNIZED;
  }
}

export function authenticationMethodTypeToJSON(object: AuthenticationMethodType): string {
  switch (object) {
    case AuthenticationMethodType.AUTHENTICATION_METHOD_TYPE_UNSPECIFIED:
      return "AUTHENTICATION_METHOD_TYPE_UNSPECIFIED";
    case AuthenticationMethodType.AUTHENTICATION_METHOD_TYPE_PASSWORD:
      return "AUTHENTICATION_METHOD_TYPE_PASSWORD";
    case AuthenticationMethodType.AUTHENTICATION_METHOD_TYPE_PASSKEY:
      return "AUTHENTICATION_METHOD_TYPE_PASSKEY";
    case AuthenticationMethodType.AUTHENTICATION_METHOD_TYPE_IDP:
      return "AUTHENTICATION_METHOD_TYPE_IDP";
    case AuthenticationMethodType.AUTHENTICATION_METHOD_TYPE_TOTP:
      return "AUTHENTICATION_METHOD_TYPE_TOTP";
    case AuthenticationMethodType.AUTHENTICATION_METHOD_TYPE_U2F:
      return "AUTHENTICATION_METHOD_TYPE_U2F";
    case AuthenticationMethodType.AUTHENTICATION_METHOD_TYPE_OTP_SMS:
      return "AUTHENTICATION_METHOD_TYPE_OTP_SMS";
    case AuthenticationMethodType.AUTHENTICATION_METHOD_TYPE_OTP_EMAIL:
      return "AUTHENTICATION_METHOD_TYPE_OTP_EMAIL";
    case AuthenticationMethodType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface AddHumanUserRequest {
  /** optionally set your own id unique for the user */
  userId?:
    | string
    | undefined;
  /** optionally set a unique username, if none is provided the email will be used */
  username?: string | undefined;
  organisation: Organisation | undefined;
  profile: SetHumanProfile | undefined;
  email: SetHumanEmail | undefined;
  phone: SetHumanPhone | undefined;
  metadata: SetMetadataEntry[];
  password?: Password | undefined;
  hashedPassword?: HashedPassword | undefined;
  idpLinks: IDPLink[];
}

export interface AddHumanUserResponse {
  userId: string;
  details: Details | undefined;
  emailCode?: string | undefined;
  phoneCode?: string | undefined;
}

export interface SetEmailRequest {
  userId: string;
  email: string;
  sendCode?: SendEmailVerificationCode | undefined;
  returnCode?: ReturnEmailVerificationCode | undefined;
  isVerified?: boolean | undefined;
}

export interface SetEmailResponse {
  details:
    | Details
    | undefined;
  /** in case the verification was set to return_code, the code will be returned */
  verificationCode?: string | undefined;
}

export interface VerifyEmailRequest {
  userId: string;
  verificationCode: string;
}

export interface VerifyEmailResponse {
  details: Details | undefined;
}

export interface SetPhoneRequest {
  userId: string;
  phone: string;
  sendCode?: SendPhoneVerificationCode | undefined;
  returnCode?: ReturnPhoneVerificationCode | undefined;
  isVerified?: boolean | undefined;
}

export interface SetPhoneResponse {
  details:
    | Details
    | undefined;
  /** in case the verification was set to return_code, the code will be returned */
  verificationCode?: string | undefined;
}

export interface VerifyPhoneRequest {
  userId: string;
  verificationCode: string;
}

export interface VerifyPhoneResponse {
  details: Details | undefined;
}

export interface RegisterPasskeyRequest {
  userId: string;
  code?: PasskeyRegistrationCode | undefined;
  authenticator: PasskeyAuthenticator;
  domain: string;
}

export interface RegisterPasskeyResponse {
  details: Details | undefined;
  passkeyId: string;
  publicKeyCredentialCreationOptions: { [key: string]: any } | undefined;
}

export interface VerifyPasskeyRegistrationRequest {
  userId: string;
  passkeyId: string;
  publicKeyCredential: { [key: string]: any } | undefined;
  passkeyName: string;
}

export interface VerifyPasskeyRegistrationResponse {
  details: Details | undefined;
}

export interface RegisterU2FRequest {
  userId: string;
  domain: string;
}

export interface RegisterU2FResponse {
  details: Details | undefined;
  u2fId: string;
  publicKeyCredentialCreationOptions: { [key: string]: any } | undefined;
}

export interface VerifyU2FRegistrationRequest {
  userId: string;
  u2fId: string;
  publicKeyCredential: { [key: string]: any } | undefined;
  tokenName: string;
}

export interface VerifyU2FRegistrationResponse {
  details: Details | undefined;
}

export interface RegisterTOTPRequest {
  userId: string;
}

export interface RegisterTOTPResponse {
  details: Details | undefined;
  uri: string;
  secret: string;
}

export interface VerifyTOTPRegistrationRequest {
  userId: string;
  code: string;
}

export interface VerifyTOTPRegistrationResponse {
  details: Details | undefined;
}

export interface AddOTPSMSRequest {
  userId: string;
}

export interface AddOTPSMSResponse {
  details: Details | undefined;
}

export interface RemoveOTPSMSRequest {
  userId: string;
}

export interface RemoveOTPSMSResponse {
  details: Details | undefined;
}

export interface AddOTPEmailRequest {
  userId: string;
}

export interface AddOTPEmailResponse {
  details: Details | undefined;
}

export interface RemoveOTPEmailRequest {
  userId: string;
}

export interface RemoveOTPEmailResponse {
  details: Details | undefined;
}

export interface CreatePasskeyRegistrationLinkRequest {
  userId: string;
  sendLink?: SendPasskeyRegistrationLink | undefined;
  returnCode?: ReturnPasskeyRegistrationCode | undefined;
}

export interface CreatePasskeyRegistrationLinkResponse {
  details:
    | Details
    | undefined;
  /** in case the medium was set to return_code, the code will be returned */
  code?: PasskeyRegistrationCode | undefined;
}

export interface StartIdentityProviderIntentRequest {
  idpId: string;
  urls?: RedirectURLs | undefined;
  ldap?: LDAPCredentials | undefined;
}

export interface StartIdentityProviderIntentResponse {
  details: Details | undefined;
  authUrl?: string | undefined;
  idpIntent?: IDPIntent | undefined;
}

export interface RetrieveIdentityProviderIntentRequest {
  idpIntentId: string;
  idpIntentToken: string;
}

export interface RetrieveIdentityProviderIntentResponse {
  details: Details | undefined;
  idpInformation: IDPInformation | undefined;
}

export interface AddIDPLinkRequest {
  userId: string;
  idpLink: IDPLink | undefined;
}

export interface AddIDPLinkResponse {
  details: Details | undefined;
}

export interface PasswordResetRequest {
  userId: string;
  sendLink?: SendPasswordResetLink | undefined;
  returnCode?: ReturnPasswordResetCode | undefined;
}

export interface PasswordResetResponse {
  details:
    | Details
    | undefined;
  /** in case the medium was set to return_code, the code will be returned */
  verificationCode?: string | undefined;
}

export interface SetPasswordRequest {
  userId: string;
  newPassword: Password | undefined;
  currentPassword?: string | undefined;
  verificationCode?: string | undefined;
}

export interface SetPasswordResponse {
  details: Details | undefined;
}

export interface ListAuthenticationMethodTypesRequest {
  userId: string;
}

export interface ListAuthenticationMethodTypesResponse {
  details: ListDetails | undefined;
  authMethodTypes: AuthenticationMethodType[];
}

function createBaseAddHumanUserRequest(): AddHumanUserRequest {
  return {
    userId: undefined,
    username: undefined,
    organisation: undefined,
    profile: undefined,
    email: undefined,
    phone: undefined,
    metadata: [],
    password: undefined,
    hashedPassword: undefined,
    idpLinks: [],
  };
}

export const AddHumanUserRequest = {
  encode(message: AddHumanUserRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== undefined) {
      writer.uint32(10).string(message.userId);
    }
    if (message.username !== undefined) {
      writer.uint32(18).string(message.username);
    }
    if (message.organisation !== undefined) {
      Organisation.encode(message.organisation, writer.uint32(26).fork()).ldelim();
    }
    if (message.profile !== undefined) {
      SetHumanProfile.encode(message.profile, writer.uint32(34).fork()).ldelim();
    }
    if (message.email !== undefined) {
      SetHumanEmail.encode(message.email, writer.uint32(42).fork()).ldelim();
    }
    if (message.phone !== undefined) {
      SetHumanPhone.encode(message.phone, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.metadata) {
      SetMetadataEntry.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.password !== undefined) {
      Password.encode(message.password, writer.uint32(58).fork()).ldelim();
    }
    if (message.hashedPassword !== undefined) {
      HashedPassword.encode(message.hashedPassword, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.idpLinks) {
      IDPLink.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddHumanUserRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddHumanUserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.username = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.organisation = Organisation.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.profile = SetHumanProfile.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.email = SetHumanEmail.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.phone = SetHumanPhone.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.metadata.push(SetMetadataEntry.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.password = Password.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.hashedPassword = HashedPassword.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.idpLinks.push(IDPLink.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddHumanUserRequest {
    return {
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      username: isSet(object.username) ? String(object.username) : undefined,
      organisation: isSet(object.organisation) ? Organisation.fromJSON(object.organisation) : undefined,
      profile: isSet(object.profile) ? SetHumanProfile.fromJSON(object.profile) : undefined,
      email: isSet(object.email) ? SetHumanEmail.fromJSON(object.email) : undefined,
      phone: isSet(object.phone) ? SetHumanPhone.fromJSON(object.phone) : undefined,
      metadata: Array.isArray(object?.metadata) ? object.metadata.map((e: any) => SetMetadataEntry.fromJSON(e)) : [],
      password: isSet(object.password) ? Password.fromJSON(object.password) : undefined,
      hashedPassword: isSet(object.hashedPassword) ? HashedPassword.fromJSON(object.hashedPassword) : undefined,
      idpLinks: Array.isArray(object?.idpLinks) ? object.idpLinks.map((e: any) => IDPLink.fromJSON(e)) : [],
    };
  },

  toJSON(message: AddHumanUserRequest): unknown {
    const obj: any = {};
    if (message.userId !== undefined) {
      obj.userId = message.userId;
    }
    if (message.username !== undefined) {
      obj.username = message.username;
    }
    if (message.organisation !== undefined) {
      obj.organisation = Organisation.toJSON(message.organisation);
    }
    if (message.profile !== undefined) {
      obj.profile = SetHumanProfile.toJSON(message.profile);
    }
    if (message.email !== undefined) {
      obj.email = SetHumanEmail.toJSON(message.email);
    }
    if (message.phone !== undefined) {
      obj.phone = SetHumanPhone.toJSON(message.phone);
    }
    if (message.metadata?.length) {
      obj.metadata = message.metadata.map((e) => SetMetadataEntry.toJSON(e));
    }
    if (message.password !== undefined) {
      obj.password = Password.toJSON(message.password);
    }
    if (message.hashedPassword !== undefined) {
      obj.hashedPassword = HashedPassword.toJSON(message.hashedPassword);
    }
    if (message.idpLinks?.length) {
      obj.idpLinks = message.idpLinks.map((e) => IDPLink.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<AddHumanUserRequest>): AddHumanUserRequest {
    return AddHumanUserRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AddHumanUserRequest>): AddHumanUserRequest {
    const message = createBaseAddHumanUserRequest();
    message.userId = object.userId ?? undefined;
    message.username = object.username ?? undefined;
    message.organisation = (object.organisation !== undefined && object.organisation !== null)
      ? Organisation.fromPartial(object.organisation)
      : undefined;
    message.profile = (object.profile !== undefined && object.profile !== null)
      ? SetHumanProfile.fromPartial(object.profile)
      : undefined;
    message.email = (object.email !== undefined && object.email !== null)
      ? SetHumanEmail.fromPartial(object.email)
      : undefined;
    message.phone = (object.phone !== undefined && object.phone !== null)
      ? SetHumanPhone.fromPartial(object.phone)
      : undefined;
    message.metadata = object.metadata?.map((e) => SetMetadataEntry.fromPartial(e)) || [];
    message.password = (object.password !== undefined && object.password !== null)
      ? Password.fromPartial(object.password)
      : undefined;
    message.hashedPassword = (object.hashedPassword !== undefined && object.hashedPassword !== null)
      ? HashedPassword.fromPartial(object.hashedPassword)
      : undefined;
    message.idpLinks = object.idpLinks?.map((e) => IDPLink.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAddHumanUserResponse(): AddHumanUserResponse {
  return { userId: "", details: undefined, emailCode: undefined, phoneCode: undefined };
}

export const AddHumanUserResponse = {
  encode(message: AddHumanUserResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.details !== undefined) {
      Details.encode(message.details, writer.uint32(18).fork()).ldelim();
    }
    if (message.emailCode !== undefined) {
      writer.uint32(26).string(message.emailCode);
    }
    if (message.phoneCode !== undefined) {
      writer.uint32(34).string(message.phoneCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddHumanUserResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddHumanUserResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.details = Details.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.emailCode = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.phoneCode = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddHumanUserResponse {
    return {
      userId: isSet(object.userId) ? String(object.userId) : "",
      details: isSet(object.details) ? Details.fromJSON(object.details) : undefined,
      emailCode: isSet(object.emailCode) ? String(object.emailCode) : undefined,
      phoneCode: isSet(object.phoneCode) ? String(object.phoneCode) : undefined,
    };
  },

  toJSON(message: AddHumanUserResponse): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.details !== undefined) {
      obj.details = Details.toJSON(message.details);
    }
    if (message.emailCode !== undefined) {
      obj.emailCode = message.emailCode;
    }
    if (message.phoneCode !== undefined) {
      obj.phoneCode = message.phoneCode;
    }
    return obj;
  },

  create(base?: DeepPartial<AddHumanUserResponse>): AddHumanUserResponse {
    return AddHumanUserResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AddHumanUserResponse>): AddHumanUserResponse {
    const message = createBaseAddHumanUserResponse();
    message.userId = object.userId ?? "";
    message.details = (object.details !== undefined && object.details !== null)
      ? Details.fromPartial(object.details)
      : undefined;
    message.emailCode = object.emailCode ?? undefined;
    message.phoneCode = object.phoneCode ?? undefined;
    return message;
  },
};

function createBaseSetEmailRequest(): SetEmailRequest {
  return { userId: "", email: "", sendCode: undefined, returnCode: undefined, isVerified: undefined };
}

export const SetEmailRequest = {
  encode(message: SetEmailRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.email !== "") {
      writer.uint32(18).string(message.email);
    }
    if (message.sendCode !== undefined) {
      SendEmailVerificationCode.encode(message.sendCode, writer.uint32(26).fork()).ldelim();
    }
    if (message.returnCode !== undefined) {
      ReturnEmailVerificationCode.encode(message.returnCode, writer.uint32(34).fork()).ldelim();
    }
    if (message.isVerified !== undefined) {
      writer.uint32(40).bool(message.isVerified);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetEmailRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetEmailRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.email = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.sendCode = SendEmailVerificationCode.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.returnCode = ReturnEmailVerificationCode.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.isVerified = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SetEmailRequest {
    return {
      userId: isSet(object.userId) ? String(object.userId) : "",
      email: isSet(object.email) ? String(object.email) : "",
      sendCode: isSet(object.sendCode) ? SendEmailVerificationCode.fromJSON(object.sendCode) : undefined,
      returnCode: isSet(object.returnCode) ? ReturnEmailVerificationCode.fromJSON(object.returnCode) : undefined,
      isVerified: isSet(object.isVerified) ? Boolean(object.isVerified) : undefined,
    };
  },

  toJSON(message: SetEmailRequest): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.email !== "") {
      obj.email = message.email;
    }
    if (message.sendCode !== undefined) {
      obj.sendCode = SendEmailVerificationCode.toJSON(message.sendCode);
    }
    if (message.returnCode !== undefined) {
      obj.returnCode = ReturnEmailVerificationCode.toJSON(message.returnCode);
    }
    if (message.isVerified !== undefined) {
      obj.isVerified = message.isVerified;
    }
    return obj;
  },

  create(base?: DeepPartial<SetEmailRequest>): SetEmailRequest {
    return SetEmailRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SetEmailRequest>): SetEmailRequest {
    const message = createBaseSetEmailRequest();
    message.userId = object.userId ?? "";
    message.email = object.email ?? "";
    message.sendCode = (object.sendCode !== undefined && object.sendCode !== null)
      ? SendEmailVerificationCode.fromPartial(object.sendCode)
      : undefined;
    message.returnCode = (object.returnCode !== undefined && object.returnCode !== null)
      ? ReturnEmailVerificationCode.fromPartial(object.returnCode)
      : undefined;
    message.isVerified = object.isVerified ?? undefined;
    return message;
  },
};

function createBaseSetEmailResponse(): SetEmailResponse {
  return { details: undefined, verificationCode: undefined };
}

export const SetEmailResponse = {
  encode(message: SetEmailResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.details !== undefined) {
      Details.encode(message.details, writer.uint32(10).fork()).ldelim();
    }
    if (message.verificationCode !== undefined) {
      writer.uint32(18).string(message.verificationCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetEmailResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetEmailResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.details = Details.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.verificationCode = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SetEmailResponse {
    return {
      details: isSet(object.details) ? Details.fromJSON(object.details) : undefined,
      verificationCode: isSet(object.verificationCode) ? String(object.verificationCode) : undefined,
    };
  },

  toJSON(message: SetEmailResponse): unknown {
    const obj: any = {};
    if (message.details !== undefined) {
      obj.details = Details.toJSON(message.details);
    }
    if (message.verificationCode !== undefined) {
      obj.verificationCode = message.verificationCode;
    }
    return obj;
  },

  create(base?: DeepPartial<SetEmailResponse>): SetEmailResponse {
    return SetEmailResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SetEmailResponse>): SetEmailResponse {
    const message = createBaseSetEmailResponse();
    message.details = (object.details !== undefined && object.details !== null)
      ? Details.fromPartial(object.details)
      : undefined;
    message.verificationCode = object.verificationCode ?? undefined;
    return message;
  },
};

function createBaseVerifyEmailRequest(): VerifyEmailRequest {
  return { userId: "", verificationCode: "" };
}

export const VerifyEmailRequest = {
  encode(message: VerifyEmailRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.verificationCode !== "") {
      writer.uint32(18).string(message.verificationCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VerifyEmailRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVerifyEmailRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.verificationCode = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VerifyEmailRequest {
    return {
      userId: isSet(object.userId) ? String(object.userId) : "",
      verificationCode: isSet(object.verificationCode) ? String(object.verificationCode) : "",
    };
  },

  toJSON(message: VerifyEmailRequest): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.verificationCode !== "") {
      obj.verificationCode = message.verificationCode;
    }
    return obj;
  },

  create(base?: DeepPartial<VerifyEmailRequest>): VerifyEmailRequest {
    return VerifyEmailRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<VerifyEmailRequest>): VerifyEmailRequest {
    const message = createBaseVerifyEmailRequest();
    message.userId = object.userId ?? "";
    message.verificationCode = object.verificationCode ?? "";
    return message;
  },
};

function createBaseVerifyEmailResponse(): VerifyEmailResponse {
  return { details: undefined };
}

export const VerifyEmailResponse = {
  encode(message: VerifyEmailResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.details !== undefined) {
      Details.encode(message.details, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VerifyEmailResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVerifyEmailResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.details = Details.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VerifyEmailResponse {
    return { details: isSet(object.details) ? Details.fromJSON(object.details) : undefined };
  },

  toJSON(message: VerifyEmailResponse): unknown {
    const obj: any = {};
    if (message.details !== undefined) {
      obj.details = Details.toJSON(message.details);
    }
    return obj;
  },

  create(base?: DeepPartial<VerifyEmailResponse>): VerifyEmailResponse {
    return VerifyEmailResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<VerifyEmailResponse>): VerifyEmailResponse {
    const message = createBaseVerifyEmailResponse();
    message.details = (object.details !== undefined && object.details !== null)
      ? Details.fromPartial(object.details)
      : undefined;
    return message;
  },
};

function createBaseSetPhoneRequest(): SetPhoneRequest {
  return { userId: "", phone: "", sendCode: undefined, returnCode: undefined, isVerified: undefined };
}

export const SetPhoneRequest = {
  encode(message: SetPhoneRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.phone !== "") {
      writer.uint32(18).string(message.phone);
    }
    if (message.sendCode !== undefined) {
      SendPhoneVerificationCode.encode(message.sendCode, writer.uint32(26).fork()).ldelim();
    }
    if (message.returnCode !== undefined) {
      ReturnPhoneVerificationCode.encode(message.returnCode, writer.uint32(34).fork()).ldelim();
    }
    if (message.isVerified !== undefined) {
      writer.uint32(40).bool(message.isVerified);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetPhoneRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetPhoneRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.phone = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.sendCode = SendPhoneVerificationCode.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.returnCode = ReturnPhoneVerificationCode.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.isVerified = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SetPhoneRequest {
    return {
      userId: isSet(object.userId) ? String(object.userId) : "",
      phone: isSet(object.phone) ? String(object.phone) : "",
      sendCode: isSet(object.sendCode) ? SendPhoneVerificationCode.fromJSON(object.sendCode) : undefined,
      returnCode: isSet(object.returnCode) ? ReturnPhoneVerificationCode.fromJSON(object.returnCode) : undefined,
      isVerified: isSet(object.isVerified) ? Boolean(object.isVerified) : undefined,
    };
  },

  toJSON(message: SetPhoneRequest): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.phone !== "") {
      obj.phone = message.phone;
    }
    if (message.sendCode !== undefined) {
      obj.sendCode = SendPhoneVerificationCode.toJSON(message.sendCode);
    }
    if (message.returnCode !== undefined) {
      obj.returnCode = ReturnPhoneVerificationCode.toJSON(message.returnCode);
    }
    if (message.isVerified !== undefined) {
      obj.isVerified = message.isVerified;
    }
    return obj;
  },

  create(base?: DeepPartial<SetPhoneRequest>): SetPhoneRequest {
    return SetPhoneRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SetPhoneRequest>): SetPhoneRequest {
    const message = createBaseSetPhoneRequest();
    message.userId = object.userId ?? "";
    message.phone = object.phone ?? "";
    message.sendCode = (object.sendCode !== undefined && object.sendCode !== null)
      ? SendPhoneVerificationCode.fromPartial(object.sendCode)
      : undefined;
    message.returnCode = (object.returnCode !== undefined && object.returnCode !== null)
      ? ReturnPhoneVerificationCode.fromPartial(object.returnCode)
      : undefined;
    message.isVerified = object.isVerified ?? undefined;
    return message;
  },
};

function createBaseSetPhoneResponse(): SetPhoneResponse {
  return { details: undefined, verificationCode: undefined };
}

export const SetPhoneResponse = {
  encode(message: SetPhoneResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.details !== undefined) {
      Details.encode(message.details, writer.uint32(10).fork()).ldelim();
    }
    if (message.verificationCode !== undefined) {
      writer.uint32(18).string(message.verificationCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetPhoneResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetPhoneResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.details = Details.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.verificationCode = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SetPhoneResponse {
    return {
      details: isSet(object.details) ? Details.fromJSON(object.details) : undefined,
      verificationCode: isSet(object.verificationCode) ? String(object.verificationCode) : undefined,
    };
  },

  toJSON(message: SetPhoneResponse): unknown {
    const obj: any = {};
    if (message.details !== undefined) {
      obj.details = Details.toJSON(message.details);
    }
    if (message.verificationCode !== undefined) {
      obj.verificationCode = message.verificationCode;
    }
    return obj;
  },

  create(base?: DeepPartial<SetPhoneResponse>): SetPhoneResponse {
    return SetPhoneResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SetPhoneResponse>): SetPhoneResponse {
    const message = createBaseSetPhoneResponse();
    message.details = (object.details !== undefined && object.details !== null)
      ? Details.fromPartial(object.details)
      : undefined;
    message.verificationCode = object.verificationCode ?? undefined;
    return message;
  },
};

function createBaseVerifyPhoneRequest(): VerifyPhoneRequest {
  return { userId: "", verificationCode: "" };
}

export const VerifyPhoneRequest = {
  encode(message: VerifyPhoneRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.verificationCode !== "") {
      writer.uint32(18).string(message.verificationCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VerifyPhoneRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVerifyPhoneRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.verificationCode = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VerifyPhoneRequest {
    return {
      userId: isSet(object.userId) ? String(object.userId) : "",
      verificationCode: isSet(object.verificationCode) ? String(object.verificationCode) : "",
    };
  },

  toJSON(message: VerifyPhoneRequest): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.verificationCode !== "") {
      obj.verificationCode = message.verificationCode;
    }
    return obj;
  },

  create(base?: DeepPartial<VerifyPhoneRequest>): VerifyPhoneRequest {
    return VerifyPhoneRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<VerifyPhoneRequest>): VerifyPhoneRequest {
    const message = createBaseVerifyPhoneRequest();
    message.userId = object.userId ?? "";
    message.verificationCode = object.verificationCode ?? "";
    return message;
  },
};

function createBaseVerifyPhoneResponse(): VerifyPhoneResponse {
  return { details: undefined };
}

export const VerifyPhoneResponse = {
  encode(message: VerifyPhoneResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.details !== undefined) {
      Details.encode(message.details, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VerifyPhoneResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVerifyPhoneResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.details = Details.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VerifyPhoneResponse {
    return { details: isSet(object.details) ? Details.fromJSON(object.details) : undefined };
  },

  toJSON(message: VerifyPhoneResponse): unknown {
    const obj: any = {};
    if (message.details !== undefined) {
      obj.details = Details.toJSON(message.details);
    }
    return obj;
  },

  create(base?: DeepPartial<VerifyPhoneResponse>): VerifyPhoneResponse {
    return VerifyPhoneResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<VerifyPhoneResponse>): VerifyPhoneResponse {
    const message = createBaseVerifyPhoneResponse();
    message.details = (object.details !== undefined && object.details !== null)
      ? Details.fromPartial(object.details)
      : undefined;
    return message;
  },
};

function createBaseRegisterPasskeyRequest(): RegisterPasskeyRequest {
  return { userId: "", code: undefined, authenticator: 0, domain: "" };
}

export const RegisterPasskeyRequest = {
  encode(message: RegisterPasskeyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.code !== undefined) {
      PasskeyRegistrationCode.encode(message.code, writer.uint32(18).fork()).ldelim();
    }
    if (message.authenticator !== 0) {
      writer.uint32(24).int32(message.authenticator);
    }
    if (message.domain !== "") {
      writer.uint32(34).string(message.domain);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterPasskeyRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterPasskeyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.code = PasskeyRegistrationCode.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.authenticator = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.domain = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RegisterPasskeyRequest {
    return {
      userId: isSet(object.userId) ? String(object.userId) : "",
      code: isSet(object.code) ? PasskeyRegistrationCode.fromJSON(object.code) : undefined,
      authenticator: isSet(object.authenticator) ? passkeyAuthenticatorFromJSON(object.authenticator) : 0,
      domain: isSet(object.domain) ? String(object.domain) : "",
    };
  },

  toJSON(message: RegisterPasskeyRequest): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.code !== undefined) {
      obj.code = PasskeyRegistrationCode.toJSON(message.code);
    }
    if (message.authenticator !== 0) {
      obj.authenticator = passkeyAuthenticatorToJSON(message.authenticator);
    }
    if (message.domain !== "") {
      obj.domain = message.domain;
    }
    return obj;
  },

  create(base?: DeepPartial<RegisterPasskeyRequest>): RegisterPasskeyRequest {
    return RegisterPasskeyRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RegisterPasskeyRequest>): RegisterPasskeyRequest {
    const message = createBaseRegisterPasskeyRequest();
    message.userId = object.userId ?? "";
    message.code = (object.code !== undefined && object.code !== null)
      ? PasskeyRegistrationCode.fromPartial(object.code)
      : undefined;
    message.authenticator = object.authenticator ?? 0;
    message.domain = object.domain ?? "";
    return message;
  },
};

function createBaseRegisterPasskeyResponse(): RegisterPasskeyResponse {
  return { details: undefined, passkeyId: "", publicKeyCredentialCreationOptions: undefined };
}

export const RegisterPasskeyResponse = {
  encode(message: RegisterPasskeyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.details !== undefined) {
      Details.encode(message.details, writer.uint32(10).fork()).ldelim();
    }
    if (message.passkeyId !== "") {
      writer.uint32(18).string(message.passkeyId);
    }
    if (message.publicKeyCredentialCreationOptions !== undefined) {
      Struct.encode(Struct.wrap(message.publicKeyCredentialCreationOptions), writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterPasskeyResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterPasskeyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.details = Details.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.passkeyId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.publicKeyCredentialCreationOptions = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RegisterPasskeyResponse {
    return {
      details: isSet(object.details) ? Details.fromJSON(object.details) : undefined,
      passkeyId: isSet(object.passkeyId) ? String(object.passkeyId) : "",
      publicKeyCredentialCreationOptions: isObject(object.publicKeyCredentialCreationOptions)
        ? object.publicKeyCredentialCreationOptions
        : undefined,
    };
  },

  toJSON(message: RegisterPasskeyResponse): unknown {
    const obj: any = {};
    if (message.details !== undefined) {
      obj.details = Details.toJSON(message.details);
    }
    if (message.passkeyId !== "") {
      obj.passkeyId = message.passkeyId;
    }
    if (message.publicKeyCredentialCreationOptions !== undefined) {
      obj.publicKeyCredentialCreationOptions = message.publicKeyCredentialCreationOptions;
    }
    return obj;
  },

  create(base?: DeepPartial<RegisterPasskeyResponse>): RegisterPasskeyResponse {
    return RegisterPasskeyResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RegisterPasskeyResponse>): RegisterPasskeyResponse {
    const message = createBaseRegisterPasskeyResponse();
    message.details = (object.details !== undefined && object.details !== null)
      ? Details.fromPartial(object.details)
      : undefined;
    message.passkeyId = object.passkeyId ?? "";
    message.publicKeyCredentialCreationOptions = object.publicKeyCredentialCreationOptions ?? undefined;
    return message;
  },
};

function createBaseVerifyPasskeyRegistrationRequest(): VerifyPasskeyRegistrationRequest {
  return { userId: "", passkeyId: "", publicKeyCredential: undefined, passkeyName: "" };
}

export const VerifyPasskeyRegistrationRequest = {
  encode(message: VerifyPasskeyRegistrationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.passkeyId !== "") {
      writer.uint32(18).string(message.passkeyId);
    }
    if (message.publicKeyCredential !== undefined) {
      Struct.encode(Struct.wrap(message.publicKeyCredential), writer.uint32(26).fork()).ldelim();
    }
    if (message.passkeyName !== "") {
      writer.uint32(34).string(message.passkeyName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VerifyPasskeyRegistrationRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVerifyPasskeyRegistrationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.passkeyId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.publicKeyCredential = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.passkeyName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VerifyPasskeyRegistrationRequest {
    return {
      userId: isSet(object.userId) ? String(object.userId) : "",
      passkeyId: isSet(object.passkeyId) ? String(object.passkeyId) : "",
      publicKeyCredential: isObject(object.publicKeyCredential) ? object.publicKeyCredential : undefined,
      passkeyName: isSet(object.passkeyName) ? String(object.passkeyName) : "",
    };
  },

  toJSON(message: VerifyPasskeyRegistrationRequest): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.passkeyId !== "") {
      obj.passkeyId = message.passkeyId;
    }
    if (message.publicKeyCredential !== undefined) {
      obj.publicKeyCredential = message.publicKeyCredential;
    }
    if (message.passkeyName !== "") {
      obj.passkeyName = message.passkeyName;
    }
    return obj;
  },

  create(base?: DeepPartial<VerifyPasskeyRegistrationRequest>): VerifyPasskeyRegistrationRequest {
    return VerifyPasskeyRegistrationRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<VerifyPasskeyRegistrationRequest>): VerifyPasskeyRegistrationRequest {
    const message = createBaseVerifyPasskeyRegistrationRequest();
    message.userId = object.userId ?? "";
    message.passkeyId = object.passkeyId ?? "";
    message.publicKeyCredential = object.publicKeyCredential ?? undefined;
    message.passkeyName = object.passkeyName ?? "";
    return message;
  },
};

function createBaseVerifyPasskeyRegistrationResponse(): VerifyPasskeyRegistrationResponse {
  return { details: undefined };
}

export const VerifyPasskeyRegistrationResponse = {
  encode(message: VerifyPasskeyRegistrationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.details !== undefined) {
      Details.encode(message.details, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VerifyPasskeyRegistrationResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVerifyPasskeyRegistrationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.details = Details.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VerifyPasskeyRegistrationResponse {
    return { details: isSet(object.details) ? Details.fromJSON(object.details) : undefined };
  },

  toJSON(message: VerifyPasskeyRegistrationResponse): unknown {
    const obj: any = {};
    if (message.details !== undefined) {
      obj.details = Details.toJSON(message.details);
    }
    return obj;
  },

  create(base?: DeepPartial<VerifyPasskeyRegistrationResponse>): VerifyPasskeyRegistrationResponse {
    return VerifyPasskeyRegistrationResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<VerifyPasskeyRegistrationResponse>): VerifyPasskeyRegistrationResponse {
    const message = createBaseVerifyPasskeyRegistrationResponse();
    message.details = (object.details !== undefined && object.details !== null)
      ? Details.fromPartial(object.details)
      : undefined;
    return message;
  },
};

function createBaseRegisterU2FRequest(): RegisterU2FRequest {
  return { userId: "", domain: "" };
}

export const RegisterU2FRequest = {
  encode(message: RegisterU2FRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.domain !== "") {
      writer.uint32(18).string(message.domain);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterU2FRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterU2FRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.domain = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RegisterU2FRequest {
    return {
      userId: isSet(object.userId) ? String(object.userId) : "",
      domain: isSet(object.domain) ? String(object.domain) : "",
    };
  },

  toJSON(message: RegisterU2FRequest): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.domain !== "") {
      obj.domain = message.domain;
    }
    return obj;
  },

  create(base?: DeepPartial<RegisterU2FRequest>): RegisterU2FRequest {
    return RegisterU2FRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RegisterU2FRequest>): RegisterU2FRequest {
    const message = createBaseRegisterU2FRequest();
    message.userId = object.userId ?? "";
    message.domain = object.domain ?? "";
    return message;
  },
};

function createBaseRegisterU2FResponse(): RegisterU2FResponse {
  return { details: undefined, u2fId: "", publicKeyCredentialCreationOptions: undefined };
}

export const RegisterU2FResponse = {
  encode(message: RegisterU2FResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.details !== undefined) {
      Details.encode(message.details, writer.uint32(10).fork()).ldelim();
    }
    if (message.u2fId !== "") {
      writer.uint32(18).string(message.u2fId);
    }
    if (message.publicKeyCredentialCreationOptions !== undefined) {
      Struct.encode(Struct.wrap(message.publicKeyCredentialCreationOptions), writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterU2FResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterU2FResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.details = Details.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.u2fId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.publicKeyCredentialCreationOptions = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RegisterU2FResponse {
    return {
      details: isSet(object.details) ? Details.fromJSON(object.details) : undefined,
      u2fId: isSet(object.u2fId) ? String(object.u2fId) : "",
      publicKeyCredentialCreationOptions: isObject(object.publicKeyCredentialCreationOptions)
        ? object.publicKeyCredentialCreationOptions
        : undefined,
    };
  },

  toJSON(message: RegisterU2FResponse): unknown {
    const obj: any = {};
    if (message.details !== undefined) {
      obj.details = Details.toJSON(message.details);
    }
    if (message.u2fId !== "") {
      obj.u2fId = message.u2fId;
    }
    if (message.publicKeyCredentialCreationOptions !== undefined) {
      obj.publicKeyCredentialCreationOptions = message.publicKeyCredentialCreationOptions;
    }
    return obj;
  },

  create(base?: DeepPartial<RegisterU2FResponse>): RegisterU2FResponse {
    return RegisterU2FResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RegisterU2FResponse>): RegisterU2FResponse {
    const message = createBaseRegisterU2FResponse();
    message.details = (object.details !== undefined && object.details !== null)
      ? Details.fromPartial(object.details)
      : undefined;
    message.u2fId = object.u2fId ?? "";
    message.publicKeyCredentialCreationOptions = object.publicKeyCredentialCreationOptions ?? undefined;
    return message;
  },
};

function createBaseVerifyU2FRegistrationRequest(): VerifyU2FRegistrationRequest {
  return { userId: "", u2fId: "", publicKeyCredential: undefined, tokenName: "" };
}

export const VerifyU2FRegistrationRequest = {
  encode(message: VerifyU2FRegistrationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.u2fId !== "") {
      writer.uint32(18).string(message.u2fId);
    }
    if (message.publicKeyCredential !== undefined) {
      Struct.encode(Struct.wrap(message.publicKeyCredential), writer.uint32(26).fork()).ldelim();
    }
    if (message.tokenName !== "") {
      writer.uint32(34).string(message.tokenName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VerifyU2FRegistrationRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVerifyU2FRegistrationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.u2fId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.publicKeyCredential = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.tokenName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VerifyU2FRegistrationRequest {
    return {
      userId: isSet(object.userId) ? String(object.userId) : "",
      u2fId: isSet(object.u2fId) ? String(object.u2fId) : "",
      publicKeyCredential: isObject(object.publicKeyCredential) ? object.publicKeyCredential : undefined,
      tokenName: isSet(object.tokenName) ? String(object.tokenName) : "",
    };
  },

  toJSON(message: VerifyU2FRegistrationRequest): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.u2fId !== "") {
      obj.u2fId = message.u2fId;
    }
    if (message.publicKeyCredential !== undefined) {
      obj.publicKeyCredential = message.publicKeyCredential;
    }
    if (message.tokenName !== "") {
      obj.tokenName = message.tokenName;
    }
    return obj;
  },

  create(base?: DeepPartial<VerifyU2FRegistrationRequest>): VerifyU2FRegistrationRequest {
    return VerifyU2FRegistrationRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<VerifyU2FRegistrationRequest>): VerifyU2FRegistrationRequest {
    const message = createBaseVerifyU2FRegistrationRequest();
    message.userId = object.userId ?? "";
    message.u2fId = object.u2fId ?? "";
    message.publicKeyCredential = object.publicKeyCredential ?? undefined;
    message.tokenName = object.tokenName ?? "";
    return message;
  },
};

function createBaseVerifyU2FRegistrationResponse(): VerifyU2FRegistrationResponse {
  return { details: undefined };
}

export const VerifyU2FRegistrationResponse = {
  encode(message: VerifyU2FRegistrationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.details !== undefined) {
      Details.encode(message.details, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VerifyU2FRegistrationResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVerifyU2FRegistrationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.details = Details.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VerifyU2FRegistrationResponse {
    return { details: isSet(object.details) ? Details.fromJSON(object.details) : undefined };
  },

  toJSON(message: VerifyU2FRegistrationResponse): unknown {
    const obj: any = {};
    if (message.details !== undefined) {
      obj.details = Details.toJSON(message.details);
    }
    return obj;
  },

  create(base?: DeepPartial<VerifyU2FRegistrationResponse>): VerifyU2FRegistrationResponse {
    return VerifyU2FRegistrationResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<VerifyU2FRegistrationResponse>): VerifyU2FRegistrationResponse {
    const message = createBaseVerifyU2FRegistrationResponse();
    message.details = (object.details !== undefined && object.details !== null)
      ? Details.fromPartial(object.details)
      : undefined;
    return message;
  },
};

function createBaseRegisterTOTPRequest(): RegisterTOTPRequest {
  return { userId: "" };
}

export const RegisterTOTPRequest = {
  encode(message: RegisterTOTPRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterTOTPRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterTOTPRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.userId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RegisterTOTPRequest {
    return { userId: isSet(object.userId) ? String(object.userId) : "" };
  },

  toJSON(message: RegisterTOTPRequest): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    return obj;
  },

  create(base?: DeepPartial<RegisterTOTPRequest>): RegisterTOTPRequest {
    return RegisterTOTPRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RegisterTOTPRequest>): RegisterTOTPRequest {
    const message = createBaseRegisterTOTPRequest();
    message.userId = object.userId ?? "";
    return message;
  },
};

function createBaseRegisterTOTPResponse(): RegisterTOTPResponse {
  return { details: undefined, uri: "", secret: "" };
}

export const RegisterTOTPResponse = {
  encode(message: RegisterTOTPResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.details !== undefined) {
      Details.encode(message.details, writer.uint32(10).fork()).ldelim();
    }
    if (message.uri !== "") {
      writer.uint32(18).string(message.uri);
    }
    if (message.secret !== "") {
      writer.uint32(26).string(message.secret);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterTOTPResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterTOTPResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.details = Details.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.uri = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.secret = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RegisterTOTPResponse {
    return {
      details: isSet(object.details) ? Details.fromJSON(object.details) : undefined,
      uri: isSet(object.uri) ? String(object.uri) : "",
      secret: isSet(object.secret) ? String(object.secret) : "",
    };
  },

  toJSON(message: RegisterTOTPResponse): unknown {
    const obj: any = {};
    if (message.details !== undefined) {
      obj.details = Details.toJSON(message.details);
    }
    if (message.uri !== "") {
      obj.uri = message.uri;
    }
    if (message.secret !== "") {
      obj.secret = message.secret;
    }
    return obj;
  },

  create(base?: DeepPartial<RegisterTOTPResponse>): RegisterTOTPResponse {
    return RegisterTOTPResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RegisterTOTPResponse>): RegisterTOTPResponse {
    const message = createBaseRegisterTOTPResponse();
    message.details = (object.details !== undefined && object.details !== null)
      ? Details.fromPartial(object.details)
      : undefined;
    message.uri = object.uri ?? "";
    message.secret = object.secret ?? "";
    return message;
  },
};

function createBaseVerifyTOTPRegistrationRequest(): VerifyTOTPRegistrationRequest {
  return { userId: "", code: "" };
}

export const VerifyTOTPRegistrationRequest = {
  encode(message: VerifyTOTPRegistrationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.code !== "") {
      writer.uint32(18).string(message.code);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VerifyTOTPRegistrationRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVerifyTOTPRegistrationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.code = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VerifyTOTPRegistrationRequest {
    return {
      userId: isSet(object.userId) ? String(object.userId) : "",
      code: isSet(object.code) ? String(object.code) : "",
    };
  },

  toJSON(message: VerifyTOTPRegistrationRequest): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.code !== "") {
      obj.code = message.code;
    }
    return obj;
  },

  create(base?: DeepPartial<VerifyTOTPRegistrationRequest>): VerifyTOTPRegistrationRequest {
    return VerifyTOTPRegistrationRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<VerifyTOTPRegistrationRequest>): VerifyTOTPRegistrationRequest {
    const message = createBaseVerifyTOTPRegistrationRequest();
    message.userId = object.userId ?? "";
    message.code = object.code ?? "";
    return message;
  },
};

function createBaseVerifyTOTPRegistrationResponse(): VerifyTOTPRegistrationResponse {
  return { details: undefined };
}

export const VerifyTOTPRegistrationResponse = {
  encode(message: VerifyTOTPRegistrationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.details !== undefined) {
      Details.encode(message.details, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VerifyTOTPRegistrationResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVerifyTOTPRegistrationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.details = Details.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VerifyTOTPRegistrationResponse {
    return { details: isSet(object.details) ? Details.fromJSON(object.details) : undefined };
  },

  toJSON(message: VerifyTOTPRegistrationResponse): unknown {
    const obj: any = {};
    if (message.details !== undefined) {
      obj.details = Details.toJSON(message.details);
    }
    return obj;
  },

  create(base?: DeepPartial<VerifyTOTPRegistrationResponse>): VerifyTOTPRegistrationResponse {
    return VerifyTOTPRegistrationResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<VerifyTOTPRegistrationResponse>): VerifyTOTPRegistrationResponse {
    const message = createBaseVerifyTOTPRegistrationResponse();
    message.details = (object.details !== undefined && object.details !== null)
      ? Details.fromPartial(object.details)
      : undefined;
    return message;
  },
};

function createBaseAddOTPSMSRequest(): AddOTPSMSRequest {
  return { userId: "" };
}

export const AddOTPSMSRequest = {
  encode(message: AddOTPSMSRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddOTPSMSRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddOTPSMSRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.userId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddOTPSMSRequest {
    return { userId: isSet(object.userId) ? String(object.userId) : "" };
  },

  toJSON(message: AddOTPSMSRequest): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    return obj;
  },

  create(base?: DeepPartial<AddOTPSMSRequest>): AddOTPSMSRequest {
    return AddOTPSMSRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AddOTPSMSRequest>): AddOTPSMSRequest {
    const message = createBaseAddOTPSMSRequest();
    message.userId = object.userId ?? "";
    return message;
  },
};

function createBaseAddOTPSMSResponse(): AddOTPSMSResponse {
  return { details: undefined };
}

export const AddOTPSMSResponse = {
  encode(message: AddOTPSMSResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.details !== undefined) {
      Details.encode(message.details, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddOTPSMSResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddOTPSMSResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.details = Details.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddOTPSMSResponse {
    return { details: isSet(object.details) ? Details.fromJSON(object.details) : undefined };
  },

  toJSON(message: AddOTPSMSResponse): unknown {
    const obj: any = {};
    if (message.details !== undefined) {
      obj.details = Details.toJSON(message.details);
    }
    return obj;
  },

  create(base?: DeepPartial<AddOTPSMSResponse>): AddOTPSMSResponse {
    return AddOTPSMSResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AddOTPSMSResponse>): AddOTPSMSResponse {
    const message = createBaseAddOTPSMSResponse();
    message.details = (object.details !== undefined && object.details !== null)
      ? Details.fromPartial(object.details)
      : undefined;
    return message;
  },
};

function createBaseRemoveOTPSMSRequest(): RemoveOTPSMSRequest {
  return { userId: "" };
}

export const RemoveOTPSMSRequest = {
  encode(message: RemoveOTPSMSRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveOTPSMSRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveOTPSMSRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.userId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RemoveOTPSMSRequest {
    return { userId: isSet(object.userId) ? String(object.userId) : "" };
  },

  toJSON(message: RemoveOTPSMSRequest): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    return obj;
  },

  create(base?: DeepPartial<RemoveOTPSMSRequest>): RemoveOTPSMSRequest {
    return RemoveOTPSMSRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RemoveOTPSMSRequest>): RemoveOTPSMSRequest {
    const message = createBaseRemoveOTPSMSRequest();
    message.userId = object.userId ?? "";
    return message;
  },
};

function createBaseRemoveOTPSMSResponse(): RemoveOTPSMSResponse {
  return { details: undefined };
}

export const RemoveOTPSMSResponse = {
  encode(message: RemoveOTPSMSResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.details !== undefined) {
      Details.encode(message.details, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveOTPSMSResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveOTPSMSResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.details = Details.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RemoveOTPSMSResponse {
    return { details: isSet(object.details) ? Details.fromJSON(object.details) : undefined };
  },

  toJSON(message: RemoveOTPSMSResponse): unknown {
    const obj: any = {};
    if (message.details !== undefined) {
      obj.details = Details.toJSON(message.details);
    }
    return obj;
  },

  create(base?: DeepPartial<RemoveOTPSMSResponse>): RemoveOTPSMSResponse {
    return RemoveOTPSMSResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RemoveOTPSMSResponse>): RemoveOTPSMSResponse {
    const message = createBaseRemoveOTPSMSResponse();
    message.details = (object.details !== undefined && object.details !== null)
      ? Details.fromPartial(object.details)
      : undefined;
    return message;
  },
};

function createBaseAddOTPEmailRequest(): AddOTPEmailRequest {
  return { userId: "" };
}

export const AddOTPEmailRequest = {
  encode(message: AddOTPEmailRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddOTPEmailRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddOTPEmailRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.userId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddOTPEmailRequest {
    return { userId: isSet(object.userId) ? String(object.userId) : "" };
  },

  toJSON(message: AddOTPEmailRequest): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    return obj;
  },

  create(base?: DeepPartial<AddOTPEmailRequest>): AddOTPEmailRequest {
    return AddOTPEmailRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AddOTPEmailRequest>): AddOTPEmailRequest {
    const message = createBaseAddOTPEmailRequest();
    message.userId = object.userId ?? "";
    return message;
  },
};

function createBaseAddOTPEmailResponse(): AddOTPEmailResponse {
  return { details: undefined };
}

export const AddOTPEmailResponse = {
  encode(message: AddOTPEmailResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.details !== undefined) {
      Details.encode(message.details, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddOTPEmailResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddOTPEmailResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.details = Details.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddOTPEmailResponse {
    return { details: isSet(object.details) ? Details.fromJSON(object.details) : undefined };
  },

  toJSON(message: AddOTPEmailResponse): unknown {
    const obj: any = {};
    if (message.details !== undefined) {
      obj.details = Details.toJSON(message.details);
    }
    return obj;
  },

  create(base?: DeepPartial<AddOTPEmailResponse>): AddOTPEmailResponse {
    return AddOTPEmailResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AddOTPEmailResponse>): AddOTPEmailResponse {
    const message = createBaseAddOTPEmailResponse();
    message.details = (object.details !== undefined && object.details !== null)
      ? Details.fromPartial(object.details)
      : undefined;
    return message;
  },
};

function createBaseRemoveOTPEmailRequest(): RemoveOTPEmailRequest {
  return { userId: "" };
}

export const RemoveOTPEmailRequest = {
  encode(message: RemoveOTPEmailRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveOTPEmailRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveOTPEmailRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.userId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RemoveOTPEmailRequest {
    return { userId: isSet(object.userId) ? String(object.userId) : "" };
  },

  toJSON(message: RemoveOTPEmailRequest): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    return obj;
  },

  create(base?: DeepPartial<RemoveOTPEmailRequest>): RemoveOTPEmailRequest {
    return RemoveOTPEmailRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RemoveOTPEmailRequest>): RemoveOTPEmailRequest {
    const message = createBaseRemoveOTPEmailRequest();
    message.userId = object.userId ?? "";
    return message;
  },
};

function createBaseRemoveOTPEmailResponse(): RemoveOTPEmailResponse {
  return { details: undefined };
}

export const RemoveOTPEmailResponse = {
  encode(message: RemoveOTPEmailResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.details !== undefined) {
      Details.encode(message.details, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveOTPEmailResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveOTPEmailResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.details = Details.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RemoveOTPEmailResponse {
    return { details: isSet(object.details) ? Details.fromJSON(object.details) : undefined };
  },

  toJSON(message: RemoveOTPEmailResponse): unknown {
    const obj: any = {};
    if (message.details !== undefined) {
      obj.details = Details.toJSON(message.details);
    }
    return obj;
  },

  create(base?: DeepPartial<RemoveOTPEmailResponse>): RemoveOTPEmailResponse {
    return RemoveOTPEmailResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RemoveOTPEmailResponse>): RemoveOTPEmailResponse {
    const message = createBaseRemoveOTPEmailResponse();
    message.details = (object.details !== undefined && object.details !== null)
      ? Details.fromPartial(object.details)
      : undefined;
    return message;
  },
};

function createBaseCreatePasskeyRegistrationLinkRequest(): CreatePasskeyRegistrationLinkRequest {
  return { userId: "", sendLink: undefined, returnCode: undefined };
}

export const CreatePasskeyRegistrationLinkRequest = {
  encode(message: CreatePasskeyRegistrationLinkRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.sendLink !== undefined) {
      SendPasskeyRegistrationLink.encode(message.sendLink, writer.uint32(18).fork()).ldelim();
    }
    if (message.returnCode !== undefined) {
      ReturnPasskeyRegistrationCode.encode(message.returnCode, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreatePasskeyRegistrationLinkRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreatePasskeyRegistrationLinkRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.sendLink = SendPasskeyRegistrationLink.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.returnCode = ReturnPasskeyRegistrationCode.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreatePasskeyRegistrationLinkRequest {
    return {
      userId: isSet(object.userId) ? String(object.userId) : "",
      sendLink: isSet(object.sendLink) ? SendPasskeyRegistrationLink.fromJSON(object.sendLink) : undefined,
      returnCode: isSet(object.returnCode) ? ReturnPasskeyRegistrationCode.fromJSON(object.returnCode) : undefined,
    };
  },

  toJSON(message: CreatePasskeyRegistrationLinkRequest): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.sendLink !== undefined) {
      obj.sendLink = SendPasskeyRegistrationLink.toJSON(message.sendLink);
    }
    if (message.returnCode !== undefined) {
      obj.returnCode = ReturnPasskeyRegistrationCode.toJSON(message.returnCode);
    }
    return obj;
  },

  create(base?: DeepPartial<CreatePasskeyRegistrationLinkRequest>): CreatePasskeyRegistrationLinkRequest {
    return CreatePasskeyRegistrationLinkRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreatePasskeyRegistrationLinkRequest>): CreatePasskeyRegistrationLinkRequest {
    const message = createBaseCreatePasskeyRegistrationLinkRequest();
    message.userId = object.userId ?? "";
    message.sendLink = (object.sendLink !== undefined && object.sendLink !== null)
      ? SendPasskeyRegistrationLink.fromPartial(object.sendLink)
      : undefined;
    message.returnCode = (object.returnCode !== undefined && object.returnCode !== null)
      ? ReturnPasskeyRegistrationCode.fromPartial(object.returnCode)
      : undefined;
    return message;
  },
};

function createBaseCreatePasskeyRegistrationLinkResponse(): CreatePasskeyRegistrationLinkResponse {
  return { details: undefined, code: undefined };
}

export const CreatePasskeyRegistrationLinkResponse = {
  encode(message: CreatePasskeyRegistrationLinkResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.details !== undefined) {
      Details.encode(message.details, writer.uint32(10).fork()).ldelim();
    }
    if (message.code !== undefined) {
      PasskeyRegistrationCode.encode(message.code, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreatePasskeyRegistrationLinkResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreatePasskeyRegistrationLinkResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.details = Details.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.code = PasskeyRegistrationCode.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreatePasskeyRegistrationLinkResponse {
    return {
      details: isSet(object.details) ? Details.fromJSON(object.details) : undefined,
      code: isSet(object.code) ? PasskeyRegistrationCode.fromJSON(object.code) : undefined,
    };
  },

  toJSON(message: CreatePasskeyRegistrationLinkResponse): unknown {
    const obj: any = {};
    if (message.details !== undefined) {
      obj.details = Details.toJSON(message.details);
    }
    if (message.code !== undefined) {
      obj.code = PasskeyRegistrationCode.toJSON(message.code);
    }
    return obj;
  },

  create(base?: DeepPartial<CreatePasskeyRegistrationLinkResponse>): CreatePasskeyRegistrationLinkResponse {
    return CreatePasskeyRegistrationLinkResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreatePasskeyRegistrationLinkResponse>): CreatePasskeyRegistrationLinkResponse {
    const message = createBaseCreatePasskeyRegistrationLinkResponse();
    message.details = (object.details !== undefined && object.details !== null)
      ? Details.fromPartial(object.details)
      : undefined;
    message.code = (object.code !== undefined && object.code !== null)
      ? PasskeyRegistrationCode.fromPartial(object.code)
      : undefined;
    return message;
  },
};

function createBaseStartIdentityProviderIntentRequest(): StartIdentityProviderIntentRequest {
  return { idpId: "", urls: undefined, ldap: undefined };
}

export const StartIdentityProviderIntentRequest = {
  encode(message: StartIdentityProviderIntentRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.idpId !== "") {
      writer.uint32(10).string(message.idpId);
    }
    if (message.urls !== undefined) {
      RedirectURLs.encode(message.urls, writer.uint32(18).fork()).ldelim();
    }
    if (message.ldap !== undefined) {
      LDAPCredentials.encode(message.ldap, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StartIdentityProviderIntentRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStartIdentityProviderIntentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.idpId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.urls = RedirectURLs.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.ldap = LDAPCredentials.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StartIdentityProviderIntentRequest {
    return {
      idpId: isSet(object.idpId) ? String(object.idpId) : "",
      urls: isSet(object.urls) ? RedirectURLs.fromJSON(object.urls) : undefined,
      ldap: isSet(object.ldap) ? LDAPCredentials.fromJSON(object.ldap) : undefined,
    };
  },

  toJSON(message: StartIdentityProviderIntentRequest): unknown {
    const obj: any = {};
    if (message.idpId !== "") {
      obj.idpId = message.idpId;
    }
    if (message.urls !== undefined) {
      obj.urls = RedirectURLs.toJSON(message.urls);
    }
    if (message.ldap !== undefined) {
      obj.ldap = LDAPCredentials.toJSON(message.ldap);
    }
    return obj;
  },

  create(base?: DeepPartial<StartIdentityProviderIntentRequest>): StartIdentityProviderIntentRequest {
    return StartIdentityProviderIntentRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<StartIdentityProviderIntentRequest>): StartIdentityProviderIntentRequest {
    const message = createBaseStartIdentityProviderIntentRequest();
    message.idpId = object.idpId ?? "";
    message.urls = (object.urls !== undefined && object.urls !== null)
      ? RedirectURLs.fromPartial(object.urls)
      : undefined;
    message.ldap = (object.ldap !== undefined && object.ldap !== null)
      ? LDAPCredentials.fromPartial(object.ldap)
      : undefined;
    return message;
  },
};

function createBaseStartIdentityProviderIntentResponse(): StartIdentityProviderIntentResponse {
  return { details: undefined, authUrl: undefined, idpIntent: undefined };
}

export const StartIdentityProviderIntentResponse = {
  encode(message: StartIdentityProviderIntentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.details !== undefined) {
      Details.encode(message.details, writer.uint32(10).fork()).ldelim();
    }
    if (message.authUrl !== undefined) {
      writer.uint32(18).string(message.authUrl);
    }
    if (message.idpIntent !== undefined) {
      IDPIntent.encode(message.idpIntent, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StartIdentityProviderIntentResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStartIdentityProviderIntentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.details = Details.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.authUrl = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.idpIntent = IDPIntent.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StartIdentityProviderIntentResponse {
    return {
      details: isSet(object.details) ? Details.fromJSON(object.details) : undefined,
      authUrl: isSet(object.authUrl) ? String(object.authUrl) : undefined,
      idpIntent: isSet(object.idpIntent) ? IDPIntent.fromJSON(object.idpIntent) : undefined,
    };
  },

  toJSON(message: StartIdentityProviderIntentResponse): unknown {
    const obj: any = {};
    if (message.details !== undefined) {
      obj.details = Details.toJSON(message.details);
    }
    if (message.authUrl !== undefined) {
      obj.authUrl = message.authUrl;
    }
    if (message.idpIntent !== undefined) {
      obj.idpIntent = IDPIntent.toJSON(message.idpIntent);
    }
    return obj;
  },

  create(base?: DeepPartial<StartIdentityProviderIntentResponse>): StartIdentityProviderIntentResponse {
    return StartIdentityProviderIntentResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<StartIdentityProviderIntentResponse>): StartIdentityProviderIntentResponse {
    const message = createBaseStartIdentityProviderIntentResponse();
    message.details = (object.details !== undefined && object.details !== null)
      ? Details.fromPartial(object.details)
      : undefined;
    message.authUrl = object.authUrl ?? undefined;
    message.idpIntent = (object.idpIntent !== undefined && object.idpIntent !== null)
      ? IDPIntent.fromPartial(object.idpIntent)
      : undefined;
    return message;
  },
};

function createBaseRetrieveIdentityProviderIntentRequest(): RetrieveIdentityProviderIntentRequest {
  return { idpIntentId: "", idpIntentToken: "" };
}

export const RetrieveIdentityProviderIntentRequest = {
  encode(message: RetrieveIdentityProviderIntentRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.idpIntentId !== "") {
      writer.uint32(10).string(message.idpIntentId);
    }
    if (message.idpIntentToken !== "") {
      writer.uint32(18).string(message.idpIntentToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RetrieveIdentityProviderIntentRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRetrieveIdentityProviderIntentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.idpIntentId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.idpIntentToken = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RetrieveIdentityProviderIntentRequest {
    return {
      idpIntentId: isSet(object.idpIntentId) ? String(object.idpIntentId) : "",
      idpIntentToken: isSet(object.idpIntentToken) ? String(object.idpIntentToken) : "",
    };
  },

  toJSON(message: RetrieveIdentityProviderIntentRequest): unknown {
    const obj: any = {};
    if (message.idpIntentId !== "") {
      obj.idpIntentId = message.idpIntentId;
    }
    if (message.idpIntentToken !== "") {
      obj.idpIntentToken = message.idpIntentToken;
    }
    return obj;
  },

  create(base?: DeepPartial<RetrieveIdentityProviderIntentRequest>): RetrieveIdentityProviderIntentRequest {
    return RetrieveIdentityProviderIntentRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RetrieveIdentityProviderIntentRequest>): RetrieveIdentityProviderIntentRequest {
    const message = createBaseRetrieveIdentityProviderIntentRequest();
    message.idpIntentId = object.idpIntentId ?? "";
    message.idpIntentToken = object.idpIntentToken ?? "";
    return message;
  },
};

function createBaseRetrieveIdentityProviderIntentResponse(): RetrieveIdentityProviderIntentResponse {
  return { details: undefined, idpInformation: undefined };
}

export const RetrieveIdentityProviderIntentResponse = {
  encode(message: RetrieveIdentityProviderIntentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.details !== undefined) {
      Details.encode(message.details, writer.uint32(10).fork()).ldelim();
    }
    if (message.idpInformation !== undefined) {
      IDPInformation.encode(message.idpInformation, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RetrieveIdentityProviderIntentResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRetrieveIdentityProviderIntentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.details = Details.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.idpInformation = IDPInformation.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RetrieveIdentityProviderIntentResponse {
    return {
      details: isSet(object.details) ? Details.fromJSON(object.details) : undefined,
      idpInformation: isSet(object.idpInformation) ? IDPInformation.fromJSON(object.idpInformation) : undefined,
    };
  },

  toJSON(message: RetrieveIdentityProviderIntentResponse): unknown {
    const obj: any = {};
    if (message.details !== undefined) {
      obj.details = Details.toJSON(message.details);
    }
    if (message.idpInformation !== undefined) {
      obj.idpInformation = IDPInformation.toJSON(message.idpInformation);
    }
    return obj;
  },

  create(base?: DeepPartial<RetrieveIdentityProviderIntentResponse>): RetrieveIdentityProviderIntentResponse {
    return RetrieveIdentityProviderIntentResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RetrieveIdentityProviderIntentResponse>): RetrieveIdentityProviderIntentResponse {
    const message = createBaseRetrieveIdentityProviderIntentResponse();
    message.details = (object.details !== undefined && object.details !== null)
      ? Details.fromPartial(object.details)
      : undefined;
    message.idpInformation = (object.idpInformation !== undefined && object.idpInformation !== null)
      ? IDPInformation.fromPartial(object.idpInformation)
      : undefined;
    return message;
  },
};

function createBaseAddIDPLinkRequest(): AddIDPLinkRequest {
  return { userId: "", idpLink: undefined };
}

export const AddIDPLinkRequest = {
  encode(message: AddIDPLinkRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.idpLink !== undefined) {
      IDPLink.encode(message.idpLink, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddIDPLinkRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddIDPLinkRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.idpLink = IDPLink.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddIDPLinkRequest {
    return {
      userId: isSet(object.userId) ? String(object.userId) : "",
      idpLink: isSet(object.idpLink) ? IDPLink.fromJSON(object.idpLink) : undefined,
    };
  },

  toJSON(message: AddIDPLinkRequest): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.idpLink !== undefined) {
      obj.idpLink = IDPLink.toJSON(message.idpLink);
    }
    return obj;
  },

  create(base?: DeepPartial<AddIDPLinkRequest>): AddIDPLinkRequest {
    return AddIDPLinkRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AddIDPLinkRequest>): AddIDPLinkRequest {
    const message = createBaseAddIDPLinkRequest();
    message.userId = object.userId ?? "";
    message.idpLink = (object.idpLink !== undefined && object.idpLink !== null)
      ? IDPLink.fromPartial(object.idpLink)
      : undefined;
    return message;
  },
};

function createBaseAddIDPLinkResponse(): AddIDPLinkResponse {
  return { details: undefined };
}

export const AddIDPLinkResponse = {
  encode(message: AddIDPLinkResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.details !== undefined) {
      Details.encode(message.details, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddIDPLinkResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddIDPLinkResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.details = Details.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddIDPLinkResponse {
    return { details: isSet(object.details) ? Details.fromJSON(object.details) : undefined };
  },

  toJSON(message: AddIDPLinkResponse): unknown {
    const obj: any = {};
    if (message.details !== undefined) {
      obj.details = Details.toJSON(message.details);
    }
    return obj;
  },

  create(base?: DeepPartial<AddIDPLinkResponse>): AddIDPLinkResponse {
    return AddIDPLinkResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AddIDPLinkResponse>): AddIDPLinkResponse {
    const message = createBaseAddIDPLinkResponse();
    message.details = (object.details !== undefined && object.details !== null)
      ? Details.fromPartial(object.details)
      : undefined;
    return message;
  },
};

function createBasePasswordResetRequest(): PasswordResetRequest {
  return { userId: "", sendLink: undefined, returnCode: undefined };
}

export const PasswordResetRequest = {
  encode(message: PasswordResetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.sendLink !== undefined) {
      SendPasswordResetLink.encode(message.sendLink, writer.uint32(18).fork()).ldelim();
    }
    if (message.returnCode !== undefined) {
      ReturnPasswordResetCode.encode(message.returnCode, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PasswordResetRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePasswordResetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.sendLink = SendPasswordResetLink.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.returnCode = ReturnPasswordResetCode.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PasswordResetRequest {
    return {
      userId: isSet(object.userId) ? String(object.userId) : "",
      sendLink: isSet(object.sendLink) ? SendPasswordResetLink.fromJSON(object.sendLink) : undefined,
      returnCode: isSet(object.returnCode) ? ReturnPasswordResetCode.fromJSON(object.returnCode) : undefined,
    };
  },

  toJSON(message: PasswordResetRequest): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.sendLink !== undefined) {
      obj.sendLink = SendPasswordResetLink.toJSON(message.sendLink);
    }
    if (message.returnCode !== undefined) {
      obj.returnCode = ReturnPasswordResetCode.toJSON(message.returnCode);
    }
    return obj;
  },

  create(base?: DeepPartial<PasswordResetRequest>): PasswordResetRequest {
    return PasswordResetRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<PasswordResetRequest>): PasswordResetRequest {
    const message = createBasePasswordResetRequest();
    message.userId = object.userId ?? "";
    message.sendLink = (object.sendLink !== undefined && object.sendLink !== null)
      ? SendPasswordResetLink.fromPartial(object.sendLink)
      : undefined;
    message.returnCode = (object.returnCode !== undefined && object.returnCode !== null)
      ? ReturnPasswordResetCode.fromPartial(object.returnCode)
      : undefined;
    return message;
  },
};

function createBasePasswordResetResponse(): PasswordResetResponse {
  return { details: undefined, verificationCode: undefined };
}

export const PasswordResetResponse = {
  encode(message: PasswordResetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.details !== undefined) {
      Details.encode(message.details, writer.uint32(10).fork()).ldelim();
    }
    if (message.verificationCode !== undefined) {
      writer.uint32(18).string(message.verificationCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PasswordResetResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePasswordResetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.details = Details.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.verificationCode = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PasswordResetResponse {
    return {
      details: isSet(object.details) ? Details.fromJSON(object.details) : undefined,
      verificationCode: isSet(object.verificationCode) ? String(object.verificationCode) : undefined,
    };
  },

  toJSON(message: PasswordResetResponse): unknown {
    const obj: any = {};
    if (message.details !== undefined) {
      obj.details = Details.toJSON(message.details);
    }
    if (message.verificationCode !== undefined) {
      obj.verificationCode = message.verificationCode;
    }
    return obj;
  },

  create(base?: DeepPartial<PasswordResetResponse>): PasswordResetResponse {
    return PasswordResetResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<PasswordResetResponse>): PasswordResetResponse {
    const message = createBasePasswordResetResponse();
    message.details = (object.details !== undefined && object.details !== null)
      ? Details.fromPartial(object.details)
      : undefined;
    message.verificationCode = object.verificationCode ?? undefined;
    return message;
  },
};

function createBaseSetPasswordRequest(): SetPasswordRequest {
  return { userId: "", newPassword: undefined, currentPassword: undefined, verificationCode: undefined };
}

export const SetPasswordRequest = {
  encode(message: SetPasswordRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.newPassword !== undefined) {
      Password.encode(message.newPassword, writer.uint32(18).fork()).ldelim();
    }
    if (message.currentPassword !== undefined) {
      writer.uint32(26).string(message.currentPassword);
    }
    if (message.verificationCode !== undefined) {
      writer.uint32(34).string(message.verificationCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetPasswordRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetPasswordRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.newPassword = Password.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.currentPassword = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.verificationCode = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SetPasswordRequest {
    return {
      userId: isSet(object.userId) ? String(object.userId) : "",
      newPassword: isSet(object.newPassword) ? Password.fromJSON(object.newPassword) : undefined,
      currentPassword: isSet(object.currentPassword) ? String(object.currentPassword) : undefined,
      verificationCode: isSet(object.verificationCode) ? String(object.verificationCode) : undefined,
    };
  },

  toJSON(message: SetPasswordRequest): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.newPassword !== undefined) {
      obj.newPassword = Password.toJSON(message.newPassword);
    }
    if (message.currentPassword !== undefined) {
      obj.currentPassword = message.currentPassword;
    }
    if (message.verificationCode !== undefined) {
      obj.verificationCode = message.verificationCode;
    }
    return obj;
  },

  create(base?: DeepPartial<SetPasswordRequest>): SetPasswordRequest {
    return SetPasswordRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SetPasswordRequest>): SetPasswordRequest {
    const message = createBaseSetPasswordRequest();
    message.userId = object.userId ?? "";
    message.newPassword = (object.newPassword !== undefined && object.newPassword !== null)
      ? Password.fromPartial(object.newPassword)
      : undefined;
    message.currentPassword = object.currentPassword ?? undefined;
    message.verificationCode = object.verificationCode ?? undefined;
    return message;
  },
};

function createBaseSetPasswordResponse(): SetPasswordResponse {
  return { details: undefined };
}

export const SetPasswordResponse = {
  encode(message: SetPasswordResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.details !== undefined) {
      Details.encode(message.details, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetPasswordResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetPasswordResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.details = Details.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SetPasswordResponse {
    return { details: isSet(object.details) ? Details.fromJSON(object.details) : undefined };
  },

  toJSON(message: SetPasswordResponse): unknown {
    const obj: any = {};
    if (message.details !== undefined) {
      obj.details = Details.toJSON(message.details);
    }
    return obj;
  },

  create(base?: DeepPartial<SetPasswordResponse>): SetPasswordResponse {
    return SetPasswordResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SetPasswordResponse>): SetPasswordResponse {
    const message = createBaseSetPasswordResponse();
    message.details = (object.details !== undefined && object.details !== null)
      ? Details.fromPartial(object.details)
      : undefined;
    return message;
  },
};

function createBaseListAuthenticationMethodTypesRequest(): ListAuthenticationMethodTypesRequest {
  return { userId: "" };
}

export const ListAuthenticationMethodTypesRequest = {
  encode(message: ListAuthenticationMethodTypesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListAuthenticationMethodTypesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListAuthenticationMethodTypesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.userId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListAuthenticationMethodTypesRequest {
    return { userId: isSet(object.userId) ? String(object.userId) : "" };
  },

  toJSON(message: ListAuthenticationMethodTypesRequest): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    return obj;
  },

  create(base?: DeepPartial<ListAuthenticationMethodTypesRequest>): ListAuthenticationMethodTypesRequest {
    return ListAuthenticationMethodTypesRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListAuthenticationMethodTypesRequest>): ListAuthenticationMethodTypesRequest {
    const message = createBaseListAuthenticationMethodTypesRequest();
    message.userId = object.userId ?? "";
    return message;
  },
};

function createBaseListAuthenticationMethodTypesResponse(): ListAuthenticationMethodTypesResponse {
  return { details: undefined, authMethodTypes: [] };
}

export const ListAuthenticationMethodTypesResponse = {
  encode(message: ListAuthenticationMethodTypesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.details !== undefined) {
      ListDetails.encode(message.details, writer.uint32(10).fork()).ldelim();
    }
    writer.uint32(18).fork();
    for (const v of message.authMethodTypes) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListAuthenticationMethodTypesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListAuthenticationMethodTypesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.details = ListDetails.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag === 16) {
            message.authMethodTypes.push(reader.int32() as any);

            continue;
          }

          if (tag === 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.authMethodTypes.push(reader.int32() as any);
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListAuthenticationMethodTypesResponse {
    return {
      details: isSet(object.details) ? ListDetails.fromJSON(object.details) : undefined,
      authMethodTypes: Array.isArray(object?.authMethodTypes)
        ? object.authMethodTypes.map((e: any) => authenticationMethodTypeFromJSON(e))
        : [],
    };
  },

  toJSON(message: ListAuthenticationMethodTypesResponse): unknown {
    const obj: any = {};
    if (message.details !== undefined) {
      obj.details = ListDetails.toJSON(message.details);
    }
    if (message.authMethodTypes?.length) {
      obj.authMethodTypes = message.authMethodTypes.map((e) => authenticationMethodTypeToJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<ListAuthenticationMethodTypesResponse>): ListAuthenticationMethodTypesResponse {
    return ListAuthenticationMethodTypesResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListAuthenticationMethodTypesResponse>): ListAuthenticationMethodTypesResponse {
    const message = createBaseListAuthenticationMethodTypesResponse();
    message.details = (object.details !== undefined && object.details !== null)
      ? ListDetails.fromPartial(object.details)
      : undefined;
    message.authMethodTypes = object.authMethodTypes?.map((e) => e) || [];
    return message;
  },
};

export type UserServiceDefinition = typeof UserServiceDefinition;
export const UserServiceDefinition = {
  name: "UserService",
  fullName: "zitadel.user.v2.UserService",
  methods: {
    /** Create a new human user */
    addHumanUser: {
      name: "AddHumanUser",
      requestType: AddHumanUserRequest,
      requestStream: false,
      responseType: AddHumanUserResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8338: [
            Buffer.from([
              248,
              1,
              18,
              21,
              67,
              114,
              101,
              97,
              116,
              101,
              32,
              97,
              32,
              117,
              115,
              101,
              114,
              32,
              40,
              72,
              117,
              109,
              97,
              110,
              41,
              26,
              209,
              1,
              67,
              114,
              101,
              97,
              116,
              101,
              47,
              105,
              109,
              112,
              111,
              114,
              116,
              32,
              97,
              32,
              110,
              101,
              119,
              32,
              117,
              115,
              101,
              114,
              32,
              119,
              105,
              116,
              104,
              32,
              116,
              104,
              101,
              32,
              116,
              121,
              112,
              101,
              32,
              104,
              117,
              109,
              97,
              110,
              46,
              32,
              84,
              104,
              101,
              32,
              110,
              101,
              119,
              108,
              121,
              32,
              99,
              114,
              101,
              97,
              116,
              101,
              100,
              32,
              117,
              115,
              101,
              114,
              32,
              119,
              105,
              108,
              108,
              32,
              103,
              101,
              116,
              32,
              97,
              32,
              118,
              101,
              114,
              105,
              102,
              105,
              99,
              97,
              116,
              105,
              111,
              110,
              32,
              101,
              109,
              97,
              105,
              108,
              32,
              105,
              102,
              32,
              101,
              105,
              116,
              104,
              101,
              114,
              32,
              116,
              104,
              101,
              32,
              101,
              109,
              97,
              105,
              108,
              32,
              97,
              100,
              100,
              114,
              101,
              115,
              115,
              32,
              105,
              115,
              32,
              110,
              111,
              116,
              32,
              109,
              97,
              114,
              107,
              101,
              100,
              32,
              97,
              115,
              32,
              118,
              101,
              114,
              105,
              102,
              105,
              101,
              100,
              32,
              97,
              110,
              100,
              32,
              121,
              111,
              117,
              32,
              100,
              105,
              100,
              32,
              110,
              111,
              116,
              32,
              114,
              101,
              113,
              117,
              101,
              115,
              116,
              32,
              116,
              104,
              101,
              32,
              118,
              101,
              114,
              105,
              102,
              105,
              99,
              97,
              116,
              105,
              111,
              110,
              32,
              116,
              111,
              32,
              98,
              101,
              32,
              114,
              101,
              116,
              117,
              114,
              110,
              101,
              100,
              46,
              74,
              11,
              10,
              3,
              50,
              48,
              48,
              18,
              4,
              10,
              2,
              79,
              75,
            ]),
          ],
          400010: [
            Buffer.from([
              33,
              10,
              26,
              10,
              10,
              117,
              115,
              101,
              114,
              46,
              119,
              114,
              105,
              116,
              101,
              26,
              12,
              111,
              114,
              103,
              97,
              110,
              105,
              115,
              97,
              116,
              105,
              111,
              110,
              18,
              3,
              8,
              201,
              1,
            ]),
          ],
          578365826: [
            Buffer.from([
              24,
              58,
              1,
              42,
              34,
              19,
              47,
              118,
              50,
              98,
              101,
              116,
              97,
              47,
              117,
              115,
              101,
              114,
              115,
              47,
              104,
              117,
              109,
              97,
              110,
            ]),
          ],
        },
      },
    },
    /** Change the email of a user */
    setEmail: {
      name: "SetEmail",
      requestType: SetEmailRequest,
      requestStream: false,
      responseType: SetEmailResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8338: [
            Buffer.from([
              209,
              1,
              18,
              21,
              67,
              104,
              97,
              110,
              103,
              101,
              32,
              116,
              104,
              101,
              32,
              117,
              115,
              101,
              114,
              32,
              101,
              109,
              97,
              105,
              108,
              26,
              170,
              1,
              67,
              104,
              97,
              110,
              103,
              101,
              32,
              116,
              104,
              101,
              32,
              101,
              109,
              97,
              105,
              108,
              32,
              97,
              100,
              100,
              114,
              101,
              115,
              115,
              32,
              111,
              102,
              32,
              97,
              32,
              117,
              115,
              101,
              114,
              46,
              32,
              73,
              102,
              32,
              116,
              104,
              101,
              32,
              115,
              116,
              97,
              116,
              101,
              32,
              105,
              115,
              32,
              115,
              101,
              116,
              32,
              116,
              111,
              32,
              110,
              111,
              116,
              32,
              118,
              101,
              114,
              105,
              102,
              105,
              101,
              100,
              44,
              32,
              97,
              32,
              118,
              101,
              114,
              105,
              102,
              105,
              99,
              97,
              116,
              105,
              111,
              110,
              32,
              99,
              111,
              100,
              101,
              32,
              119,
              105,
              108,
              108,
              32,
              98,
              101,
              32,
              103,
              101,
              110,
              101,
              114,
              97,
              116,
              101,
              100,
              44,
              32,
              119,
              104,
              105,
              99,
              104,
              32,
              99,
              97,
              110,
              32,
              98,
              101,
              32,
              101,
              105,
              116,
              104,
              101,
              114,
              32,
              114,
              101,
              116,
              117,
              114,
              110,
              101,
              100,
              32,
              111,
              114,
              32,
              115,
              101,
              110,
              116,
              32,
              116,
              111,
              32,
              116,
              104,
              101,
              32,
              117,
              115,
              101,
              114,
              32,
              98,
              121,
              32,
              101,
              109,
              97,
              105,
              108,
              46,
              74,
              11,
              10,
              3,
              50,
              48,
              48,
              18,
              4,
              10,
              2,
              79,
              75,
            ]),
          ],
          400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
          578365826: [
            Buffer.from([
              34,
              58,
              1,
              42,
              34,
              29,
              47,
              118,
              50,
              98,
              101,
              116,
              97,
              47,
              117,
              115,
              101,
              114,
              115,
              47,
              123,
              117,
              115,
              101,
              114,
              95,
              105,
              100,
              125,
              47,
              101,
              109,
              97,
              105,
              108,
            ]),
          ],
        },
      },
    },
    /** Verify the email with the provided code */
    verifyEmail: {
      name: "VerifyEmail",
      requestType: VerifyEmailRequest,
      requestStream: false,
      responseType: VerifyEmailResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8338: [
            Buffer.from([
              74,
              18,
              16,
              86,
              101,
              114,
              105,
              102,
              121,
              32,
              116,
              104,
              101,
              32,
              101,
              109,
              97,
              105,
              108,
              26,
              41,
              86,
              101,
              114,
              105,
              102,
              121,
              32,
              116,
              104,
              101,
              32,
              101,
              109,
              97,
              105,
              108,
              32,
              119,
              105,
              116,
              104,
              32,
              116,
              104,
              101,
              32,
              103,
              101,
              110,
              101,
              114,
              97,
              116,
              101,
              100,
              32,
              99,
              111,
              100,
              101,
              46,
              74,
              11,
              10,
              3,
              50,
              48,
              48,
              18,
              4,
              10,
              2,
              79,
              75,
            ]),
          ],
          400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
          578365826: [
            Buffer.from([
              41,
              58,
              1,
              42,
              34,
              36,
              47,
              118,
              50,
              98,
              101,
              116,
              97,
              47,
              117,
              115,
              101,
              114,
              115,
              47,
              123,
              117,
              115,
              101,
              114,
              95,
              105,
              100,
              125,
              47,
              101,
              109,
              97,
              105,
              108,
              47,
              118,
              101,
              114,
              105,
              102,
              121,
            ]),
          ],
        },
      },
    },
    /** Change the phone of a user */
    setPhone: {
      name: "SetPhone",
      requestType: SetPhoneRequest,
      requestStream: false,
      responseType: SetPhoneResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8338: [
            Buffer.from([
              200,
              1,
              18,
              18,
              83,
              101,
              116,
              32,
              116,
              104,
              101,
              32,
              117,
              115,
              101,
              114,
              32,
              112,
              104,
              111,
              110,
              101,
              26,
              164,
              1,
              83,
              101,
              116,
              32,
              116,
              104,
              101,
              32,
              112,
              104,
              111,
              110,
              101,
              32,
              110,
              117,
              109,
              98,
              101,
              114,
              32,
              111,
              102,
              32,
              97,
              32,
              117,
              115,
              101,
              114,
              46,
              32,
              73,
              102,
              32,
              116,
              104,
              101,
              32,
              115,
              116,
              97,
              116,
              101,
              32,
              105,
              115,
              32,
              115,
              101,
              116,
              32,
              116,
              111,
              32,
              110,
              111,
              116,
              32,
              118,
              101,
              114,
              105,
              102,
              105,
              101,
              100,
              44,
              32,
              97,
              32,
              118,
              101,
              114,
              105,
              102,
              105,
              99,
              97,
              116,
              105,
              111,
              110,
              32,
              99,
              111,
              100,
              101,
              32,
              119,
              105,
              108,
              108,
              32,
              98,
              101,
              32,
              103,
              101,
              110,
              101,
              114,
              97,
              116,
              101,
              100,
              44,
              32,
              119,
              104,
              105,
              99,
              104,
              32,
              99,
              97,
              110,
              32,
              98,
              101,
              32,
              101,
              105,
              116,
              104,
              101,
              114,
              32,
              114,
              101,
              116,
              117,
              114,
              110,
              101,
              100,
              32,
              111,
              114,
              32,
              115,
              101,
              110,
              116,
              32,
              116,
              111,
              32,
              116,
              104,
              101,
              32,
              117,
              115,
              101,
              114,
              32,
              98,
              121,
              32,
              115,
              109,
              115,
              46,
              74,
              11,
              10,
              3,
              50,
              48,
              48,
              18,
              4,
              10,
              2,
              79,
              75,
            ]),
          ],
          400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
          578365826: [
            Buffer.from([
              34,
              58,
              1,
              42,
              34,
              29,
              47,
              118,
              50,
              98,
              101,
              116,
              97,
              47,
              117,
              115,
              101,
              114,
              115,
              47,
              123,
              117,
              115,
              101,
              114,
              95,
              105,
              100,
              125,
              47,
              112,
              104,
              111,
              110,
              101,
            ]),
          ],
        },
      },
    },
    /** Verify the phone with the provided code */
    verifyPhone: {
      name: "VerifyPhone",
      requestType: VerifyPhoneRequest,
      requestStream: false,
      responseType: VerifyPhoneResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8338: [
            Buffer.from([
              74,
              18,
              16,
              86,
              101,
              114,
              105,
              102,
              121,
              32,
              116,
              104,
              101,
              32,
              112,
              104,
              111,
              110,
              101,
              26,
              41,
              86,
              101,
              114,
              105,
              102,
              121,
              32,
              116,
              104,
              101,
              32,
              112,
              104,
              111,
              110,
              101,
              32,
              119,
              105,
              116,
              104,
              32,
              116,
              104,
              101,
              32,
              103,
              101,
              110,
              101,
              114,
              97,
              116,
              101,
              100,
              32,
              99,
              111,
              100,
              101,
              46,
              74,
              11,
              10,
              3,
              50,
              48,
              48,
              18,
              4,
              10,
              2,
              79,
              75,
            ]),
          ],
          400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
          578365826: [
            Buffer.from([
              41,
              58,
              1,
              42,
              34,
              36,
              47,
              118,
              50,
              98,
              101,
              116,
              97,
              47,
              117,
              115,
              101,
              114,
              115,
              47,
              123,
              117,
              115,
              101,
              114,
              95,
              105,
              100,
              125,
              47,
              112,
              104,
              111,
              110,
              101,
              47,
              118,
              101,
              114,
              105,
              102,
              121,
            ]),
          ],
        },
      },
    },
    registerPasskey: {
      name: "RegisterPasskey",
      requestType: RegisterPasskeyRequest,
      requestStream: false,
      responseType: RegisterPasskeyResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8338: [
            Buffer.from([
              218,
              1,
              18,
              44,
              83,
              116,
              97,
              114,
              116,
              32,
              116,
              104,
              101,
              32,
              114,
              101,
              103,
              105,
              115,
              116,
              114,
              97,
              116,
              105,
              111,
              110,
              32,
              111,
              102,
              32,
              112,
              97,
              115,
              115,
              107,
              101,
              121,
              32,
              102,
              111,
              114,
              32,
              97,
              32,
              117,
              115,
              101,
              114,
              26,
              156,
              1,
              83,
              116,
              97,
              114,
              116,
              32,
              116,
              104,
              101,
              32,
              114,
              101,
              103,
              105,
              115,
              116,
              114,
              97,
              116,
              105,
              111,
              110,
              32,
              111,
              102,
              32,
              97,
              32,
              112,
              97,
              115,
              115,
              107,
              101,
              121,
              32,
              102,
              111,
              114,
              32,
              97,
              32,
              117,
              115,
              101,
              114,
              44,
              32,
              97,
              115,
              32,
              97,
              32,
              114,
              101,
              115,
              112,
              111,
              110,
              115,
              101,
              32,
              116,
              104,
              101,
              32,
              112,
              117,
              98,
              108,
              105,
              99,
              32,
              107,
              101,
              121,
              32,
              99,
              114,
              101,
              100,
              101,
              110,
              116,
              105,
              97,
              108,
              32,
              99,
              114,
              101,
              97,
              116,
              105,
              111,
              110,
              32,
              111,
              112,
              116,
              105,
              111,
              110,
              115,
              32,
              97,
              114,
              101,
              32,
              114,
              101,
              116,
              117,
              114,
              110,
              101,
              100,
              44,
              32,
              119,
              104,
              105,
              99,
              104,
              32,
              97,
              114,
              101,
              32,
              117,
              115,
              101,
              100,
              32,
              116,
              111,
              32,
              118,
              101,
              114,
              105,
              102,
              121,
              32,
              116,
              104,
              101,
              32,
              112,
              97,
              115,
              115,
              107,
              101,
              121,
              46,
              74,
              11,
              10,
              3,
              50,
              48,
              48,
              18,
              4,
              10,
              2,
              79,
              75,
            ]),
          ],
          400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
          578365826: [
            Buffer.from([
              37,
              58,
              1,
              42,
              34,
              32,
              47,
              118,
              50,
              98,
              101,
              116,
              97,
              47,
              117,
              115,
              101,
              114,
              115,
              47,
              123,
              117,
              115,
              101,
              114,
              95,
              105,
              100,
              125,
              47,
              112,
              97,
              115,
              115,
              107,
              101,
              121,
              115,
            ]),
          ],
        },
      },
    },
    verifyPasskeyRegistration: {
      name: "VerifyPasskeyRegistration",
      requestType: VerifyPasskeyRegistrationRequest,
      requestStream: false,
      responseType: VerifyPasskeyRegistrationResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8338: [
            Buffer.from([
              107,
              18,
              27,
              86,
              101,
              114,
              105,
              102,
              121,
              32,
              97,
              32,
              112,
              97,
              115,
              115,
              107,
              101,
              121,
              32,
              102,
              111,
              114,
              32,
              97,
              32,
              117,
              115,
              101,
              114,
              26,
              63,
              86,
              101,
              114,
              105,
              102,
              121,
              32,
              116,
              104,
              101,
              32,
              112,
              97,
              115,
              115,
              107,
              101,
              121,
              32,
              114,
              101,
              103,
              105,
              115,
              116,
              114,
              97,
              116,
              105,
              111,
              110,
              32,
              119,
              105,
              116,
              104,
              32,
              116,
              104,
              101,
              32,
              112,
              117,
              98,
              108,
              105,
              99,
              32,
              107,
              101,
              121,
              32,
              99,
              114,
              101,
              100,
              101,
              110,
              116,
              105,
              97,
              108,
              46,
              74,
              11,
              10,
              3,
              50,
              48,
              48,
              18,
              4,
              10,
              2,
              79,
              75,
            ]),
          ],
          400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
          578365826: [
            Buffer.from([
              50,
              58,
              1,
              42,
              34,
              45,
              47,
              118,
              50,
              98,
              101,
              116,
              97,
              47,
              117,
              115,
              101,
              114,
              115,
              47,
              123,
              117,
              115,
              101,
              114,
              95,
              105,
              100,
              125,
              47,
              112,
              97,
              115,
              115,
              107,
              101,
              121,
              115,
              47,
              123,
              112,
              97,
              115,
              115,
              107,
              101,
              121,
              95,
              105,
              100,
              125,
            ]),
          ],
        },
      },
    },
    createPasskeyRegistrationLink: {
      name: "CreatePasskeyRegistrationLink",
      requestType: CreatePasskeyRegistrationLinkRequest,
      requestStream: false,
      responseType: CreatePasskeyRegistrationLinkResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8338: [
            Buffer.from([
              163,
              1,
              18,
              45,
              67,
              114,
              101,
              97,
              116,
              101,
              32,
              97,
              32,
              112,
              97,
              115,
              115,
              107,
              101,
              121,
              32,
              114,
              101,
              103,
              105,
              115,
              116,
              114,
              97,
              116,
              105,
              111,
              110,
              32,
              108,
              105,
              110,
              107,
              32,
              102,
              111,
              114,
              32,
              97,
              32,
              117,
              115,
              101,
              114,
              26,
              101,
              67,
              114,
              101,
              97,
              116,
              101,
              32,
              97,
              32,
              112,
              97,
              115,
              115,
              107,
              101,
              121,
              32,
              114,
              101,
              103,
              105,
              115,
              116,
              114,
              97,
              116,
              105,
              111,
              110,
              32,
              108,
              105,
              110,
              107,
              32,
              119,
              104,
              105,
              99,
              104,
              32,
              105,
              110,
              99,
              108,
              117,
              100,
              101,
              115,
              32,
              97,
              32,
              99,
              111,
              100,
              101,
              32,
              97,
              110,
              100,
              32,
              101,
              105,
              116,
              104,
              101,
              114,
              32,
              114,
              101,
              116,
              117,
              114,
              110,
              32,
              105,
              116,
              32,
              111,
              114,
              32,
              115,
              101,
              110,
              100,
              32,
              105,
              116,
              32,
              116,
              111,
              32,
              116,
              104,
              101,
              32,
              117,
              115,
              101,
              114,
              46,
              74,
              11,
              10,
              3,
              50,
              48,
              48,
              18,
              4,
              10,
              2,
              79,
              75,
            ]),
          ],
          400010: [
            Buffer.from([
              22,
              10,
              20,
              10,
              18,
              117,
              115,
              101,
              114,
              46,
              112,
              97,
              115,
              115,
              107,
              101,
              121,
              46,
              119,
              114,
              105,
              116,
              101,
            ]),
          ],
          578365826: [
            Buffer.from([
              55,
              58,
              1,
              42,
              34,
              50,
              47,
              118,
              50,
              98,
              101,
              116,
              97,
              47,
              117,
              115,
              101,
              114,
              115,
              47,
              123,
              117,
              115,
              101,
              114,
              95,
              105,
              100,
              125,
              47,
              112,
              97,
              115,
              115,
              107,
              101,
              121,
              115,
              47,
              114,
              101,
              103,
              105,
              115,
              116,
              114,
              97,
              116,
              105,
              111,
              110,
              95,
              108,
              105,
              110,
              107,
            ]),
          ],
        },
      },
    },
    registerU2F: {
      name: "RegisterU2F",
      requestType: RegisterU2FRequest,
      requestStream: false,
      responseType: RegisterU2FResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8338: [
            Buffer.from([
              226,
              1,
              18,
              48,
              83,
              116,
              97,
              114,
              116,
              32,
              116,
              104,
              101,
              32,
              114,
              101,
              103,
              105,
              115,
              116,
              114,
              97,
              116,
              105,
              111,
              110,
              32,
              111,
              102,
              32,
              97,
              32,
              117,
              50,
              102,
              32,
              116,
              111,
              107,
              101,
              110,
              32,
              102,
              111,
              114,
              32,
              97,
              32,
              117,
              115,
              101,
              114,
              26,
              160,
              1,
              83,
              116,
              97,
              114,
              116,
              32,
              116,
              104,
              101,
              32,
              114,
              101,
              103,
              105,
              115,
              116,
              114,
              97,
              116,
              105,
              111,
              110,
              32,
              111,
              102,
              32,
              97,
              32,
              117,
              50,
              102,
              32,
              116,
              111,
              107,
              101,
              110,
              32,
              102,
              111,
              114,
              32,
              97,
              32,
              117,
              115,
              101,
              114,
              44,
              32,
              97,
              115,
              32,
              97,
              32,
              114,
              101,
              115,
              112,
              111,
              110,
              115,
              101,
              32,
              116,
              104,
              101,
              32,
              112,
              117,
              98,
              108,
              105,
              99,
              32,
              107,
              101,
              121,
              32,
              99,
              114,
              101,
              100,
              101,
              110,
              116,
              105,
              97,
              108,
              32,
              99,
              114,
              101,
              97,
              116,
              105,
              111,
              110,
              32,
              111,
              112,
              116,
              105,
              111,
              110,
              115,
              32,
              97,
              114,
              101,
              32,
              114,
              101,
              116,
              117,
              114,
              110,
              101,
              100,
              44,
              32,
              119,
              104,
              105,
              99,
              104,
              32,
              97,
              114,
              101,
              32,
              117,
              115,
              101,
              100,
              32,
              116,
              111,
              32,
              118,
              101,
              114,
              105,
              102,
              121,
              32,
              116,
              104,
              101,
              32,
              117,
              50,
              102,
              32,
              116,
              111,
              107,
              101,
              110,
              46,
              74,
              11,
              10,
              3,
              50,
              48,
              48,
              18,
              4,
              10,
              2,
              79,
              75,
            ]),
          ],
          400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
          578365826: [
            Buffer.from([
              32,
              58,
              1,
              42,
              34,
              27,
              47,
              118,
              50,
              98,
              101,
              116,
              97,
              47,
              117,
              115,
              101,
              114,
              115,
              47,
              123,
              117,
              115,
              101,
              114,
              95,
              105,
              100,
              125,
              47,
              117,
              50,
              102,
            ]),
          ],
        },
      },
    },
    verifyU2FRegistration: {
      name: "VerifyU2FRegistration",
      requestType: VerifyU2FRegistrationRequest,
      requestStream: false,
      responseType: VerifyU2FRegistrationResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8338: [
            Buffer.from([
              111,
              18,
              29,
              86,
              101,
              114,
              105,
              102,
              121,
              32,
              97,
              32,
              117,
              50,
              102,
              32,
              116,
              111,
              107,
              101,
              110,
              32,
              102,
              111,
              114,
              32,
              97,
              32,
              117,
              115,
              101,
              114,
              26,
              65,
              86,
              101,
              114,
              105,
              102,
              121,
              32,
              116,
              104,
              101,
              32,
              117,
              50,
              102,
              32,
              116,
              111,
              107,
              101,
              110,
              32,
              114,
              101,
              103,
              105,
              115,
              116,
              114,
              97,
              116,
              105,
              111,
              110,
              32,
              119,
              105,
              116,
              104,
              32,
              116,
              104,
              101,
              32,
              112,
              117,
              98,
              108,
              105,
              99,
              32,
              107,
              101,
              121,
              32,
              99,
              114,
              101,
              100,
              101,
              110,
              116,
              105,
              97,
              108,
              46,
              74,
              11,
              10,
              3,
              50,
              48,
              48,
              18,
              4,
              10,
              2,
              79,
              75,
            ]),
          ],
          400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
          578365826: [
            Buffer.from([
              41,
              58,
              1,
              42,
              34,
              36,
              47,
              118,
              50,
              98,
              101,
              116,
              97,
              47,
              117,
              115,
              101,
              114,
              115,
              47,
              123,
              117,
              115,
              101,
              114,
              95,
              105,
              100,
              125,
              47,
              117,
              50,
              102,
              47,
              123,
              117,
              50,
              102,
              95,
              105,
              100,
              125,
            ]),
          ],
        },
      },
    },
    registerTOTP: {
      name: "RegisterTOTP",
      requestType: RegisterTOTPRequest,
      requestStream: false,
      responseType: RegisterTOTPResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8338: [
            Buffer.from([
              208,
              1,
              18,
              53,
              83,
              116,
              97,
              114,
              116,
              32,
              116,
              104,
              101,
              32,
              114,
              101,
              103,
              105,
              115,
              116,
              114,
              97,
              116,
              105,
              111,
              110,
              32,
              111,
              102,
              32,
              97,
              32,
              84,
              79,
              84,
              80,
              32,
              103,
              101,
              110,
              101,
              114,
              97,
              116,
              111,
              114,
              32,
              102,
              111,
              114,
              32,
              97,
              32,
              117,
              115,
              101,
              114,
              26,
              137,
              1,
              83,
              116,
              97,
              114,
              116,
              32,
              116,
              104,
              101,
              32,
              114,
              101,
              103,
              105,
              115,
              116,
              114,
              97,
              116,
              105,
              111,
              110,
              32,
              111,
              102,
              32,
              97,
              32,
              84,
              79,
              84,
              80,
              32,
              103,
              101,
              110,
              101,
              114,
              97,
              116,
              111,
              114,
              32,
              102,
              111,
              114,
              32,
              97,
              32,
              117,
              115,
              101,
              114,
              44,
              32,
              97,
              115,
              32,
              97,
              32,
              114,
              101,
              115,
              112,
              111,
              110,
              115,
              101,
              32,
              97,
              32,
              115,
              101,
              99,
              114,
              101,
              116,
              32,
              114,
              101,
              116,
              117,
              114,
              110,
              101,
              100,
              44,
              32,
              119,
              104,
              105,
              99,
              104,
              32,
              105,
              115,
              32,
              117,
              115,
              101,
              100,
              32,
              116,
              111,
              32,
              105,
              110,
              105,
              116,
              105,
              97,
              108,
              105,
              122,
              101,
              32,
              97,
              32,
              84,
              79,
              84,
              80,
              32,
              97,
              112,
              112,
              32,
              111,
              114,
              32,
              100,
              101,
              118,
              105,
              99,
              101,
              46,
              74,
              11,
              10,
              3,
              50,
              48,
              48,
              18,
              4,
              10,
              2,
              79,
              75,
            ]),
          ],
          400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
          578365826: [
            Buffer.from([
              33,
              58,
              1,
              42,
              34,
              28,
              47,
              118,
              50,
              98,
              101,
              116,
              97,
              47,
              117,
              115,
              101,
              114,
              115,
              47,
              123,
              117,
              115,
              101,
              114,
              95,
              105,
              100,
              125,
              47,
              116,
              111,
              116,
              112,
            ]),
          ],
        },
      },
    },
    verifyTOTPRegistration: {
      name: "VerifyTOTPRegistration",
      requestType: VerifyTOTPRegistrationRequest,
      requestStream: false,
      responseType: VerifyTOTPRegistrationResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8338: [
            Buffer.from([
              102,
              18,
              34,
              86,
              101,
              114,
              105,
              102,
              121,
              32,
              97,
              32,
              84,
              79,
              84,
              80,
              32,
              103,
              101,
              110,
              101,
              114,
              97,
              116,
              111,
              114,
              32,
              102,
              111,
              114,
              32,
              97,
              32,
              117,
              115,
              101,
              114,
              26,
              51,
              86,
              101,
              114,
              105,
              102,
              121,
              32,
              116,
              104,
              101,
              32,
              84,
              79,
              84,
              80,
              32,
              114,
              101,
              103,
              105,
              115,
              116,
              114,
              97,
              116,
              105,
              111,
              110,
              32,
              119,
              105,
              116,
              104,
              32,
              97,
              32,
              103,
              101,
              110,
              101,
              114,
              97,
              116,
              101,
              100,
              32,
              99,
              111,
              100,
              101,
              46,
              74,
              11,
              10,
              3,
              50,
              48,
              48,
              18,
              4,
              10,
              2,
              79,
              75,
            ]),
          ],
          400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
          578365826: [
            Buffer.from([
              40,
              58,
              1,
              42,
              34,
              35,
              47,
              118,
              50,
              98,
              101,
              116,
              97,
              47,
              117,
              115,
              101,
              114,
              115,
              47,
              123,
              117,
              115,
              101,
              114,
              95,
              105,
              100,
              125,
              47,
              116,
              111,
              116,
              112,
              47,
              118,
              101,
              114,
              105,
              102,
              121,
            ]),
          ],
        },
      },
    },
    addOTPSMS: {
      name: "AddOTPSMS",
      requestType: AddOTPSMSRequest,
      requestStream: false,
      responseType: AddOTPSMSResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8338: [
            Buffer.from([
              129,
              2,
              18,
              22,
              65,
              100,
              100,
              32,
              79,
              84,
              80,
              32,
              83,
              77,
              83,
              32,
              102,
              111,
              114,
              32,
              97,
              32,
              117,
              115,
              101,
              114,
              26,
              217,
              1,
              65,
              100,
              100,
              32,
              97,
              32,
              110,
              101,
              119,
              32,
              79,
              110,
              101,
              45,
              84,
              105,
              109,
              101,
              45,
              80,
              97,
              115,
              115,
              119,
              111,
              114,
              100,
              32,
              40,
              79,
              84,
              80,
              41,
              32,
              83,
              77,
              83,
              32,
              102,
              97,
              99,
              116,
              111,
              114,
              32,
              116,
              111,
              32,
              116,
              104,
              101,
              32,
              97,
              117,
              116,
              104,
              101,
              110,
              116,
              105,
              99,
              97,
              116,
              101,
              100,
              32,
              117,
              115,
              101,
              114,
              46,
              32,
              79,
              84,
              80,
              32,
              83,
              77,
              83,
              32,
              119,
              105,
              108,
              108,
              32,
              101,
              110,
              97,
              98,
              108,
              101,
              32,
              116,
              104,
              101,
              32,
              117,
              115,
              101,
              114,
              32,
              116,
              111,
              32,
              118,
              101,
              114,
              105,
              102,
              121,
              32,
              97,
              32,
              79,
              84,
              80,
              32,
              119,
              105,
              116,
              104,
              32,
              116,
              104,
              101,
              32,
              108,
              97,
              116,
              101,
              115,
              116,
              32,
              118,
              101,
              114,
              105,
              102,
              105,
              101,
              100,
              32,
              112,
              104,
              111,
              110,
              101,
              32,
              110,
              117,
              109,
              98,
              101,
              114,
              46,
              32,
              84,
              104,
              101,
              32,
              112,
              104,
              111,
              110,
              101,
              32,
              110,
              117,
              109,
              98,
              101,
              114,
              32,
              104,
              97,
              115,
              32,
              116,
              111,
              32,
              98,
              101,
              32,
              118,
              101,
              114,
              105,
              102,
              105,
              101,
              100,
              32,
              116,
              111,
              32,
              97,
              100,
              100,
              32,
              116,
              104,
              101,
              32,
              115,
              101,
              99,
              111,
              110,
              100,
              32,
              102,
              97,
              99,
              116,
              111,
              114,
              46,
              74,
              11,
              10,
              3,
              50,
              48,
              48,
              18,
              4,
              10,
              2,
              79,
              75,
            ]),
          ],
          400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
          578365826: [
            Buffer.from([
              36,
              58,
              1,
              42,
              34,
              31,
              47,
              118,
              50,
              98,
              101,
              116,
              97,
              47,
              117,
              115,
              101,
              114,
              115,
              47,
              123,
              117,
              115,
              101,
              114,
              95,
              105,
              100,
              125,
              47,
              111,
              116,
              112,
              95,
              115,
              109,
              115,
            ]),
          ],
        },
      },
    },
    removeOTPSMS: {
      name: "RemoveOTPSMS",
      requestType: RemoveOTPSMSRequest,
      requestStream: false,
      responseType: RemoveOTPSMSResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8338: [
            Buffer.from([
              249,
              1,
              18,
              46,
              82,
              101,
              109,
              111,
              118,
              101,
              32,
              79,
              110,
              101,
              45,
              84,
              105,
              109,
              101,
              45,
              80,
              97,
              115,
              115,
              119,
              111,
              114,
              100,
              32,
              40,
              79,
              84,
              80,
              41,
              32,
              83,
              77,
              83,
              32,
              102,
              114,
              111,
              109,
              32,
              97,
              32,
              117,
              115,
              101,
              114,
              26,
              185,
              1,
              82,
              101,
              109,
              111,
              118,
              101,
              32,
              116,
              104,
              101,
              32,
              99,
              111,
              110,
              102,
              105,
              103,
              117,
              114,
              101,
              100,
              32,
              79,
              110,
              101,
              45,
              84,
              105,
              109,
              101,
              45,
              80,
              97,
              115,
              115,
              119,
              111,
              114,
              100,
              32,
              40,
              79,
              84,
              80,
              41,
              32,
              83,
              77,
              83,
              32,
              102,
              97,
              99,
              116,
              111,
              114,
              32,
              111,
              102,
              32,
              116,
              104,
              101,
              32,
              97,
              117,
              116,
              104,
              101,
              110,
              116,
              105,
              99,
              97,
              116,
              101,
              100,
              32,
              117,
              115,
              101,
              114,
              46,
              32,
              65,
              115,
              32,
              111,
              110,
              108,
              121,
              32,
              111,
              110,
              101,
              32,
              79,
              84,
              80,
              32,
              83,
              77,
              83,
              32,
              112,
              101,
              114,
              32,
              117,
              115,
              101,
              114,
              32,
              105,
              115,
              32,
              97,
              108,
              108,
              111,
              119,
              101,
              100,
              44,
              32,
              116,
              104,
              101,
              32,
              117,
              115,
              101,
              114,
              32,
              119,
              105,
              108,
              108,
              32,
              110,
              111,
              116,
              32,
              104,
              97,
              118,
              101,
              32,
              79,
              84,
              80,
              32,
              83,
              77,
              83,
              32,
              97,
              115,
              32,
              97,
              32,
              115,
              101,
              99,
              111,
              110,
              100,
              45,
              102,
              97,
              99,
              116,
              111,
              114,
              32,
              97,
              102,
              116,
              101,
              114,
              119,
              97,
              114,
              100,
              46,
              74,
              11,
              10,
              3,
              50,
              48,
              48,
              18,
              4,
              10,
              2,
              79,
              75,
            ]),
          ],
          400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
          578365826: [
            Buffer.from([
              33,
              42,
              31,
              47,
              118,
              50,
              98,
              101,
              116,
              97,
              47,
              117,
              115,
              101,
              114,
              115,
              47,
              123,
              117,
              115,
              101,
              114,
              95,
              105,
              100,
              125,
              47,
              111,
              116,
              112,
              95,
              115,
              109,
              115,
            ]),
          ],
        },
      },
    },
    addOTPEmail: {
      name: "AddOTPEmail",
      requestType: AddOTPEmailRequest,
      requestStream: false,
      responseType: AddOTPEmailResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8338: [
            Buffer.from([
              249,
              1,
              18,
              24,
              65,
              100,
              100,
              32,
              79,
              84,
              80,
              32,
              69,
              109,
              97,
              105,
              108,
              32,
              102,
              111,
              114,
              32,
              97,
              32,
              117,
              115,
              101,
              114,
              26,
              207,
              1,
              65,
              100,
              100,
              32,
              97,
              32,
              110,
              101,
              119,
              32,
              79,
              110,
              101,
              45,
              84,
              105,
              109,
              101,
              45,
              80,
              97,
              115,
              115,
              119,
              111,
              114,
              100,
              32,
              40,
              79,
              84,
              80,
              41,
              32,
              69,
              109,
              97,
              105,
              108,
              32,
              102,
              97,
              99,
              116,
              111,
              114,
              32,
              116,
              111,
              32,
              116,
              104,
              101,
              32,
              97,
              117,
              116,
              104,
              101,
              110,
              116,
              105,
              99,
              97,
              116,
              101,
              100,
              32,
              117,
              115,
              101,
              114,
              46,
              32,
              79,
              84,
              80,
              32,
              69,
              109,
              97,
              105,
              108,
              32,
              119,
              105,
              108,
              108,
              32,
              101,
              110,
              97,
              98,
              108,
              101,
              32,
              116,
              104,
              101,
              32,
              117,
              115,
              101,
              114,
              32,
              116,
              111,
              32,
              118,
              101,
              114,
              105,
              102,
              121,
              32,
              97,
              32,
              79,
              84,
              80,
              32,
              119,
              105,
              116,
              104,
              32,
              116,
              104,
              101,
              32,
              108,
              97,
              116,
              101,
              115,
              116,
              32,
              118,
              101,
              114,
              105,
              102,
              105,
              101,
              100,
              32,
              101,
              109,
              97,
              105,
              108,
              46,
              32,
              84,
              104,
              101,
              32,
              101,
              109,
              97,
              105,
              108,
              32,
              104,
              97,
              115,
              32,
              116,
              111,
              32,
              98,
              101,
              32,
              118,
              101,
              114,
              105,
              102,
              105,
              101,
              100,
              32,
              116,
              111,
              32,
              97,
              100,
              100,
              32,
              116,
              104,
              101,
              32,
              115,
              101,
              99,
              111,
              110,
              100,
              32,
              102,
              97,
              99,
              116,
              111,
              114,
              46,
              74,
              11,
              10,
              3,
              50,
              48,
              48,
              18,
              4,
              10,
              2,
              79,
              75,
            ]),
          ],
          400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
          578365826: [
            Buffer.from([
              38,
              58,
              1,
              42,
              34,
              33,
              47,
              118,
              50,
              98,
              101,
              116,
              97,
              47,
              117,
              115,
              101,
              114,
              115,
              47,
              123,
              117,
              115,
              101,
              114,
              95,
              105,
              100,
              125,
              47,
              111,
              116,
              112,
              95,
              101,
              109,
              97,
              105,
              108,
            ]),
          ],
        },
      },
    },
    removeOTPEmail: {
      name: "RemoveOTPEmail",
      requestType: RemoveOTPEmailRequest,
      requestStream: false,
      responseType: RemoveOTPEmailResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8338: [
            Buffer.from([
              129,
              2,
              18,
              48,
              82,
              101,
              109,
              111,
              118,
              101,
              32,
              79,
              110,
              101,
              45,
              84,
              105,
              109,
              101,
              45,
              80,
              97,
              115,
              115,
              119,
              111,
              114,
              100,
              32,
              40,
              79,
              84,
              80,
              41,
              32,
              69,
              109,
              97,
              105,
              108,
              32,
              102,
              114,
              111,
              109,
              32,
              97,
              32,
              117,
              115,
              101,
              114,
              26,
              191,
              1,
              82,
              101,
              109,
              111,
              118,
              101,
              32,
              116,
              104,
              101,
              32,
              99,
              111,
              110,
              102,
              105,
              103,
              117,
              114,
              101,
              100,
              32,
              79,
              110,
              101,
              45,
              84,
              105,
              109,
              101,
              45,
              80,
              97,
              115,
              115,
              119,
              111,
              114,
              100,
              32,
              40,
              79,
              84,
              80,
              41,
              32,
              69,
              109,
              97,
              105,
              108,
              32,
              102,
              97,
              99,
              116,
              111,
              114,
              32,
              111,
              102,
              32,
              116,
              104,
              101,
              32,
              97,
              117,
              116,
              104,
              101,
              110,
              116,
              105,
              99,
              97,
              116,
              101,
              100,
              32,
              117,
              115,
              101,
              114,
              46,
              32,
              65,
              115,
              32,
              111,
              110,
              108,
              121,
              32,
              111,
              110,
              101,
              32,
              79,
              84,
              80,
              32,
              69,
              109,
              97,
              105,
              108,
              32,
              112,
              101,
              114,
              32,
              117,
              115,
              101,
              114,
              32,
              105,
              115,
              32,
              97,
              108,
              108,
              111,
              119,
              101,
              100,
              44,
              32,
              116,
              104,
              101,
              32,
              117,
              115,
              101,
              114,
              32,
              119,
              105,
              108,
              108,
              32,
              110,
              111,
              116,
              32,
              104,
              97,
              118,
              101,
              32,
              79,
              84,
              80,
              32,
              69,
              109,
              97,
              105,
              108,
              32,
              97,
              115,
              32,
              97,
              32,
              115,
              101,
              99,
              111,
              110,
              100,
              45,
              102,
              97,
              99,
              116,
              111,
              114,
              32,
              97,
              102,
              116,
              101,
              114,
              119,
              97,
              114,
              100,
              46,
              74,
              11,
              10,
              3,
              50,
              48,
              48,
              18,
              4,
              10,
              2,
              79,
              75,
            ]),
          ],
          400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
          578365826: [
            Buffer.from([
              35,
              42,
              33,
              47,
              118,
              50,
              98,
              101,
              116,
              97,
              47,
              117,
              115,
              101,
              114,
              115,
              47,
              123,
              117,
              115,
              101,
              114,
              95,
              105,
              100,
              125,
              47,
              111,
              116,
              112,
              95,
              101,
              109,
              97,
              105,
              108,
            ]),
          ],
        },
      },
    },
    /** Start an IDP authentication (for external login, registration or linking) */
    startIdentityProviderIntent: {
      name: "StartIdentityProviderIntent",
      requestType: StartIdentityProviderIntentRequest,
      requestStream: false,
      responseType: StartIdentityProviderIntentResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8338: [
            Buffer.from([
              136,
              1,
              18,
              36,
              83,
              116,
              97,
              114,
              116,
              32,
              102,
              108,
              111,
              119,
              32,
              119,
              105,
              116,
              104,
              32,
              97,
              110,
              32,
              105,
              100,
              101,
              110,
              116,
              105,
              116,
              121,
              32,
              112,
              114,
              111,
              118,
              105,
              100,
              101,
              114,
              26,
              83,
              83,
              116,
              97,
              114,
              116,
              32,
              97,
              32,
              102,
              108,
              111,
              119,
              32,
              119,
              105,
              116,
              104,
              32,
              97,
              110,
              32,
              105,
              100,
              101,
              110,
              116,
              105,
              116,
              121,
              32,
              112,
              114,
              111,
              118,
              105,
              100,
              101,
              114,
              44,
              32,
              102,
              111,
              114,
              32,
              101,
              120,
              116,
              101,
              114,
              110,
              97,
              108,
              32,
              108,
              111,
              103,
              105,
              110,
              44,
              32,
              114,
              101,
              103,
              105,
              115,
              116,
              114,
              97,
              116,
              105,
              111,
              110,
              32,
              111,
              114,
              32,
              108,
              105,
              110,
              107,
              105,
              110,
              103,
              74,
              11,
              10,
              3,
              50,
              48,
              48,
              18,
              4,
              10,
              2,
              79,
              75,
            ]),
          ],
          400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
          578365826: [
            Buffer.from([
              24,
              58,
              1,
              42,
              34,
              19,
              47,
              118,
              50,
              98,
              101,
              116,
              97,
              47,
              105,
              100,
              112,
              95,
              105,
              110,
              116,
              101,
              110,
              116,
              115,
            ]),
          ],
        },
      },
    },
    retrieveIdentityProviderIntent: {
      name: "RetrieveIdentityProviderIntent",
      requestType: RetrieveIdentityProviderIntentRequest,
      requestStream: false,
      responseType: RetrieveIdentityProviderIntentResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8338: [
            Buffer.from([
              200,
              1,
              18,
              58,
              82,
              101,
              116,
              114,
              105,
              101,
              118,
              101,
              32,
              116,
              104,
              101,
              32,
              105,
              110,
              102,
              111,
              114,
              109,
              97,
              116,
              105,
              111,
              110,
              32,
              114,
              101,
              116,
              117,
              114,
              110,
              101,
              100,
              32,
              98,
              121,
              32,
              116,
              104,
              101,
              32,
              105,
              100,
              101,
              110,
              116,
              105,
              116,
              121,
              32,
              112,
              114,
              111,
              118,
              105,
              100,
              101,
              114,
              26,
              125,
              82,
              101,
              116,
              114,
              105,
              101,
              118,
              101,
              32,
              116,
              104,
              101,
              32,
              105,
              110,
              102,
              111,
              114,
              109,
              97,
              116,
              105,
              111,
              110,
              32,
              114,
              101,
              116,
              117,
              114,
              110,
              101,
              100,
              32,
              98,
              121,
              32,
              116,
              104,
              101,
              32,
              105,
              100,
              101,
              110,
              116,
              105,
              116,
              121,
              32,
              112,
              114,
              111,
              118,
              105,
              100,
              101,
              114,
              32,
              102,
              111,
              114,
              32,
              114,
              101,
              103,
              105,
              115,
              116,
              114,
              97,
              116,
              105,
              111,
              110,
              32,
              111,
              114,
              32,
              117,
              112,
              100,
              97,
              116,
              105,
              110,
              103,
              32,
              97,
              110,
              32,
              101,
              120,
              105,
              115,
              116,
              105,
              110,
              103,
              32,
              117,
              115,
              101,
              114,
              32,
              119,
              105,
              116,
              104,
              32,
              110,
              101,
              119,
              32,
              105,
              110,
              102,
              111,
              114,
              109,
              97,
              116,
              105,
              111,
              110,
              74,
              11,
              10,
              3,
              50,
              48,
              48,
              18,
              4,
              10,
              2,
              79,
              75,
            ]),
          ],
          400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
          578365826: [
            Buffer.from([
              40,
              58,
              1,
              42,
              34,
              35,
              47,
              118,
              50,
              98,
              101,
              116,
              97,
              47,
              105,
              100,
              112,
              95,
              105,
              110,
              116,
              101,
              110,
              116,
              115,
              47,
              123,
              105,
              100,
              112,
              95,
              105,
              110,
              116,
              101,
              110,
              116,
              95,
              105,
              100,
              125,
            ]),
          ],
        },
      },
    },
    /** Link an IDP to an existing user */
    addIDPLink: {
      name: "AddIDPLink",
      requestType: AddIDPLinkRequest,
      requestStream: false,
      responseType: AddIDPLinkResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8338: [
            Buffer.from([
              103,
              18,
              43,
              65,
              100,
              100,
              32,
              108,
              105,
              110,
              107,
              32,
              116,
              111,
              32,
              97,
              110,
              32,
              105,
              100,
              101,
              110,
              116,
              105,
              116,
              121,
              32,
              112,
              114,
              111,
              118,
              105,
              100,
              101,
              114,
              32,
              116,
              111,
              32,
              97,
              110,
              32,
              117,
              115,
              101,
              114,
              26,
              43,
              65,
              100,
              100,
              32,
              108,
              105,
              110,
              107,
              32,
              116,
              111,
              32,
              97,
              110,
              32,
              105,
              100,
              101,
              110,
              116,
              105,
              116,
              121,
              32,
              112,
              114,
              111,
              118,
              105,
              100,
              101,
              114,
              32,
              116,
              111,
              32,
              97,
              110,
              32,
              117,
              115,
              101,
              114,
              74,
              11,
              10,
              3,
              50,
              48,
              48,
              18,
              4,
              10,
              2,
              79,
              75,
            ]),
          ],
          400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
          578365826: [
            Buffer.from([
              34,
              58,
              1,
              42,
              34,
              29,
              47,
              118,
              50,
              98,
              101,
              116,
              97,
              47,
              117,
              115,
              101,
              114,
              115,
              47,
              123,
              117,
              115,
              101,
              114,
              95,
              105,
              100,
              125,
              47,
              108,
              105,
              110,
              107,
              115,
            ]),
          ],
        },
      },
    },
    /** Request password reset */
    passwordReset: {
      name: "PasswordReset",
      requestType: PasswordResetRequest,
      requestStream: false,
      responseType: PasswordResetResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8338: [
            Buffer.from([
              85,
              18,
              34,
              82,
              101,
              113,
              117,
              101,
              115,
              116,
              32,
              97,
              32,
              99,
              111,
              100,
              101,
              32,
              116,
              111,
              32,
              114,
              101,
              115,
              101,
              116,
              32,
              97,
              32,
              112,
              97,
              115,
              115,
              119,
              111,
              114,
              100,
              26,
              34,
              82,
              101,
              113,
              117,
              101,
              115,
              116,
              32,
              97,
              32,
              99,
              111,
              100,
              101,
              32,
              116,
              111,
              32,
              114,
              101,
              115,
              101,
              116,
              32,
              97,
              32,
              112,
              97,
              115,
              115,
              119,
              111,
              114,
              100,
              74,
              11,
              10,
              3,
              50,
              48,
              48,
              18,
              4,
              10,
              2,
              79,
              75,
            ]),
          ],
          400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
          578365826: [
            Buffer.from([
              43,
              58,
              1,
              42,
              34,
              38,
              47,
              118,
              50,
              98,
              101,
              116,
              97,
              47,
              117,
              115,
              101,
              114,
              115,
              47,
              123,
              117,
              115,
              101,
              114,
              95,
              105,
              100,
              125,
              47,
              112,
              97,
              115,
              115,
              119,
              111,
              114,
              100,
              95,
              114,
              101,
              115,
              101,
              116,
            ]),
          ],
        },
      },
    },
    /** Change password */
    setPassword: {
      name: "SetPassword",
      requestType: SetPasswordRequest,
      requestStream: false,
      responseType: SetPasswordResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8338: [
            Buffer.from([
              118,
              18,
              15,
              67,
              104,
              97,
              110,
              103,
              101,
              32,
              112,
              97,
              115,
              115,
              119,
              111,
              114,
              100,
              26,
              86,
              67,
              104,
              97,
              110,
              103,
              101,
              32,
              116,
              104,
              101,
              32,
              112,
              97,
              115,
              115,
              119,
              111,
              114,
              100,
              32,
              111,
              102,
              32,
              97,
              32,
              117,
              115,
              101,
              114,
              32,
              119,
              105,
              116,
              104,
              32,
              101,
              105,
              116,
              104,
              101,
              114,
              32,
              97,
              32,
              118,
              101,
              114,
              105,
              102,
              105,
              99,
              97,
              116,
              105,
              111,
              110,
              32,
              99,
              111,
              100,
              101,
              32,
              111,
              114,
              32,
              116,
              104,
              101,
              32,
              99,
              117,
              114,
              114,
              101,
              110,
              116,
              32,
              112,
              97,
              115,
              115,
              119,
              111,
              114,
              100,
              46,
              74,
              11,
              10,
              3,
              50,
              48,
              48,
              18,
              4,
              10,
              2,
              79,
              75,
            ]),
          ],
          400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
          578365826: [
            Buffer.from([
              37,
              58,
              1,
              42,
              34,
              32,
              47,
              118,
              50,
              98,
              101,
              116,
              97,
              47,
              117,
              115,
              101,
              114,
              115,
              47,
              123,
              117,
              115,
              101,
              114,
              95,
              105,
              100,
              125,
              47,
              112,
              97,
              115,
              115,
              119,
              111,
              114,
              100,
            ]),
          ],
        },
      },
    },
    /** List all possible authentication methods of a user */
    listAuthenticationMethodTypes: {
      name: "ListAuthenticationMethodTypes",
      requestType: ListAuthenticationMethodTypesRequest,
      requestStream: false,
      responseType: ListAuthenticationMethodTypesResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8338: [
            Buffer.from([
              162,
              1,
              18,
              50,
              76,
              105,
              115,
              116,
              32,
              97,
              108,
              108,
              32,
              112,
              111,
              115,
              115,
              105,
              98,
              108,
              101,
              32,
              97,
              117,
              116,
              104,
              101,
              110,
              116,
              105,
              99,
              97,
              116,
              105,
              111,
              110,
              32,
              109,
              101,
              116,
              104,
              111,
              100,
              115,
              32,
              111,
              102,
              32,
              97,
              32,
              117,
              115,
              101,
              114,
              26,
              95,
              76,
              105,
              115,
              116,
              32,
              97,
              108,
              108,
              32,
              112,
              111,
              115,
              115,
              105,
              98,
              108,
              101,
              32,
              97,
              117,
              116,
              104,
              101,
              110,
              116,
              105,
              99,
              97,
              116,
              105,
              111,
              110,
              32,
              109,
              101,
              116,
              104,
              111,
              100,
              115,
              32,
              111,
              102,
              32,
              97,
              32,
              117,
              115,
              101,
              114,
              32,
              108,
              105,
              107,
              101,
              32,
              112,
              97,
              115,
              115,
              119,
              111,
              114,
              100,
              44,
              32,
              112,
              97,
              115,
              115,
              119,
              111,
              114,
              100,
              108,
              101,
              115,
              115,
              44,
              32,
              40,
              84,
              41,
              79,
              84,
              80,
              32,
              97,
              110,
              100,
              32,
              109,
              111,
              114,
              101,
              74,
              11,
              10,
              3,
              50,
              48,
              48,
              18,
              4,
              10,
              2,
              79,
              75,
            ]),
          ],
          400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
          578365826: [
            Buffer.from([
              48,
              18,
              46,
              47,
              118,
              50,
              98,
              101,
              116,
              97,
              47,
              117,
              115,
              101,
              114,
              115,
              47,
              123,
              117,
              115,
              101,
              114,
              95,
              105,
              100,
              125,
              47,
              97,
              117,
              116,
              104,
              101,
              110,
              116,
              105,
              99,
              97,
              116,
              105,
              111,
              110,
              95,
              109,
              101,
              116,
              104,
              111,
              100,
              115,
            ]),
          ],
        },
      },
    },
  },
} as const;

export interface UserServiceImplementation<CallContextExt = {}> {
  /** Create a new human user */
  addHumanUser(
    request: AddHumanUserRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<AddHumanUserResponse>>;
  /** Change the email of a user */
  setEmail(request: SetEmailRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetEmailResponse>>;
  /** Verify the email with the provided code */
  verifyEmail(
    request: VerifyEmailRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<VerifyEmailResponse>>;
  /** Change the phone of a user */
  setPhone(request: SetPhoneRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetPhoneResponse>>;
  /** Verify the phone with the provided code */
  verifyPhone(
    request: VerifyPhoneRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<VerifyPhoneResponse>>;
  registerPasskey(
    request: RegisterPasskeyRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<RegisterPasskeyResponse>>;
  verifyPasskeyRegistration(
    request: VerifyPasskeyRegistrationRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<VerifyPasskeyRegistrationResponse>>;
  createPasskeyRegistrationLink(
    request: CreatePasskeyRegistrationLinkRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<CreatePasskeyRegistrationLinkResponse>>;
  registerU2F(
    request: RegisterU2FRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<RegisterU2FResponse>>;
  verifyU2FRegistration(
    request: VerifyU2FRegistrationRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<VerifyU2FRegistrationResponse>>;
  registerTOTP(
    request: RegisterTOTPRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<RegisterTOTPResponse>>;
  verifyTOTPRegistration(
    request: VerifyTOTPRegistrationRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<VerifyTOTPRegistrationResponse>>;
  addOTPSMS(request: AddOTPSMSRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddOTPSMSResponse>>;
  removeOTPSMS(
    request: RemoveOTPSMSRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<RemoveOTPSMSResponse>>;
  addOTPEmail(
    request: AddOTPEmailRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<AddOTPEmailResponse>>;
  removeOTPEmail(
    request: RemoveOTPEmailRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<RemoveOTPEmailResponse>>;
  /** Start an IDP authentication (for external login, registration or linking) */
  startIdentityProviderIntent(
    request: StartIdentityProviderIntentRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<StartIdentityProviderIntentResponse>>;
  retrieveIdentityProviderIntent(
    request: RetrieveIdentityProviderIntentRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<RetrieveIdentityProviderIntentResponse>>;
  /** Link an IDP to an existing user */
  addIDPLink(
    request: AddIDPLinkRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<AddIDPLinkResponse>>;
  /** Request password reset */
  passwordReset(
    request: PasswordResetRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<PasswordResetResponse>>;
  /** Change password */
  setPassword(
    request: SetPasswordRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<SetPasswordResponse>>;
  /** List all possible authentication methods of a user */
  listAuthenticationMethodTypes(
    request: ListAuthenticationMethodTypesRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ListAuthenticationMethodTypesResponse>>;
}

export interface UserServiceClient<CallOptionsExt = {}> {
  /** Create a new human user */
  addHumanUser(
    request: DeepPartial<AddHumanUserRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<AddHumanUserResponse>;
  /** Change the email of a user */
  setEmail(request: DeepPartial<SetEmailRequest>, options?: CallOptions & CallOptionsExt): Promise<SetEmailResponse>;
  /** Verify the email with the provided code */
  verifyEmail(
    request: DeepPartial<VerifyEmailRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<VerifyEmailResponse>;
  /** Change the phone of a user */
  setPhone(request: DeepPartial<SetPhoneRequest>, options?: CallOptions & CallOptionsExt): Promise<SetPhoneResponse>;
  /** Verify the phone with the provided code */
  verifyPhone(
    request: DeepPartial<VerifyPhoneRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<VerifyPhoneResponse>;
  registerPasskey(
    request: DeepPartial<RegisterPasskeyRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<RegisterPasskeyResponse>;
  verifyPasskeyRegistration(
    request: DeepPartial<VerifyPasskeyRegistrationRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<VerifyPasskeyRegistrationResponse>;
  createPasskeyRegistrationLink(
    request: DeepPartial<CreatePasskeyRegistrationLinkRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<CreatePasskeyRegistrationLinkResponse>;
  registerU2F(
    request: DeepPartial<RegisterU2FRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<RegisterU2FResponse>;
  verifyU2FRegistration(
    request: DeepPartial<VerifyU2FRegistrationRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<VerifyU2FRegistrationResponse>;
  registerTOTP(
    request: DeepPartial<RegisterTOTPRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<RegisterTOTPResponse>;
  verifyTOTPRegistration(
    request: DeepPartial<VerifyTOTPRegistrationRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<VerifyTOTPRegistrationResponse>;
  addOTPSMS(request: DeepPartial<AddOTPSMSRequest>, options?: CallOptions & CallOptionsExt): Promise<AddOTPSMSResponse>;
  removeOTPSMS(
    request: DeepPartial<RemoveOTPSMSRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<RemoveOTPSMSResponse>;
  addOTPEmail(
    request: DeepPartial<AddOTPEmailRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<AddOTPEmailResponse>;
  removeOTPEmail(
    request: DeepPartial<RemoveOTPEmailRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<RemoveOTPEmailResponse>;
  /** Start an IDP authentication (for external login, registration or linking) */
  startIdentityProviderIntent(
    request: DeepPartial<StartIdentityProviderIntentRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<StartIdentityProviderIntentResponse>;
  retrieveIdentityProviderIntent(
    request: DeepPartial<RetrieveIdentityProviderIntentRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<RetrieveIdentityProviderIntentResponse>;
  /** Link an IDP to an existing user */
  addIDPLink(
    request: DeepPartial<AddIDPLinkRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<AddIDPLinkResponse>;
  /** Request password reset */
  passwordReset(
    request: DeepPartial<PasswordResetRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<PasswordResetResponse>;
  /** Change password */
  setPassword(
    request: DeepPartial<SetPasswordRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<SetPasswordResponse>;
  /** List all possible authentication methods of a user */
  listAuthenticationMethodTypes(
    request: DeepPartial<ListAuthenticationMethodTypesRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ListAuthenticationMethodTypesResponse>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
