import configuration from '#/configuration';
import Passkeys from '#/modules/Passkeys/Passkeys';
import AuthService from '#/services/backend/auth.service';
import { ROUTING } from '#/types/router';
import { redirect } from 'next/navigation';
import ZitadelService, { CreatePasskeyRegistrationLink,RegisterPasskey } from '#/services/backend/zitadel.service';

export default async ({ searchParams }: any) => {
  const accessToken = await AuthService.getAdminAccessToken();

  const zitadelService = ZitadelService({
    host: configuration.zitadel.url,
  });

  const passkeyRegistrationLinkResult = await  zitadelService.request<CreatePasskeyRegistrationLink>({
    url: '/v2beta/users/{userId}/passkeys/registration_link',
    method: 'post',
    params:{
      userId: '243843133748594225'
    },
    headers:{
      Authorization: `Bearer ${accessToken}`,
      'x-zitadel-orgid': '243843074894125785'
    },
    data: {
      returnCode: {}
    },
  })

  const registerPasskeyResult = await  zitadelService.request<RegisterPasskey>({
    url: '/v2beta/users/{userId}/passkeys',
    method: 'post',
    params:{
      userId: '243843133748594225'
    },
    headers:{
      Authorization: `Bearer ${accessToken}`,
      'x-zitadel-orgid': '243843074894125785'
    },
    data: {
      "code": {
        "id": passkeyRegistrationLinkResult.code.id,
        "code": passkeyRegistrationLinkResult.code.code
      },
      "authenticator": "PASSKEY_AUTHENTICATOR_UNSPECIFIED",
      "domain": 'https://zitadel-login-ui-v2.vercel.app'
    },
  })

  return (
    <Passkeys
      passkeyId={registerPasskeyResult.passkeyId}
      publicKeyCredentialCreationOptions={registerPasskeyResult.publicKeyCredentialCreationOptions}
      appUrl={configuration.appUrl}
    />
  );
};