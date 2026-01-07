import httpRequest from '@/lib/request';

export interface ResetPasswordParams {
  email: string;
  app: string;
  pwd: string;
  time: number;
  cookie: string;
  exp: string;
}

export interface ResetPasswordResponse {
  sign: string;
  error: string;
  msg: string;
}

export const resetPassword = (params: ResetPasswordParams): Promise<ResetPasswordResponse> =>
  httpRequest('/user/chpwd', {
    method: 'POST',
    data: params,
    headers: {
      'Content-Type': 'application/json',
      'x-forwarded-for': '34.203.117.11',
    },
  });