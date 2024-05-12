'use client';
import type { ToastType } from '#/modules/Components/Toast';
import Toast from '#/modules/Components/Toast';
import SignInForm from '#/modules/Login/components/SignInForm';
import ApiService from '#/services/frontend/api.service';
import { APILogin, APIRequestCode, APIVerifyCode } from '#/types/api';
import { ROUTING } from '#/types/router';
import type { Application, AuthRequest } from '#/types/zitadel';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';

const LoginPage = (props: {
  appUrl: string;
  authRequest?: AuthRequest;
  application?: Application;
}) => {
  const { appUrl, authRequest, application } = props;
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const apiService = ApiService({ appUrl });
  const toastRef = useRef<ToastType>();

  const handleSignIn = async (params: {
    username: string;
    password: string;
  }) => {
    const { username, password } = params;

    try {
      setIsLoading(true);

      const session = await apiService.request<APILogin>({
        url: '/api/login',
        method: 'post',
        data: {
          username,
          password,
          authRequestId: authRequest?.id,
        },
      });

      if (!session || !session.userId) {
        throw session;
      }

      if (session.changeRequired) {
        if (authRequest) {
          router.replace(`${ROUTING.PASSWORD}?authRequest=${authRequest.id}`);
        } else {
          router.replace(ROUTING.PASSWORD);
        }
      } else {
        router.replace(session.callbackUrl || ROUTING.HOME);
      }
    } catch (error) {
      console.error(error);

      toastRef.current?.show({
        message: 'Login error',
        intent: 'error',
      });

      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="mb-[8px] ml-[30px] mr-[30px] flex w-full flex-col justify-center rounded-md border-gray-300 lg:w-[480px] lg:border lg:p-[40px] p-3">
        <div className="flex flex-col items-center justify-center">
          <Image src="/images/company.png" alt="logo" width="125" height="47" />

          <h2 className="mb-[24px] mt-6 text-center text-3xl font-extrabold text-gray-900">
            👋 Welcome!
          </h2>
        </div>

        <div className="flex max-w-7xl flex-col lg:m-0">
          <SignInForm
            loading={isLoading}
            defaultUsername={authRequest?.loginHint}
            handleSignIn={handleSignIn}
          />
        </div>

        <a
          className="mb-[18px] text-[12px] font-normal text-[#4F6679]"
          onClick={async () => {
            router.replace(`/users/reset?authRequest=${authRequest?.id}`);
          }}
        >
          Forgot password?
        </a>
      </div>

      {application?.name && (
        <p className="mb-[18px] text-[12px] font-normal text-[#4F6679]">
          You are logging in to {application?.name}
        </p>
      )}
      <Toast ref={toastRef} />
    </div>
  );
};

export default LoginPage;
