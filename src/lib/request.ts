import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

const axiosConfig: AxiosRequestConfig<any> = {
  // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
  // 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
  // baseURL: process.env.NEXT_PUBLIC_APP_API_URL,
  baseURL:'http://flighttrackerservices-devnew.us-east-1.elasticbeanstalk.com',
  timeout: 180000,
};
const http = axios.create(axiosConfig);

// 请求拦截器
http.interceptors.request.use(
  async (config) => {
    // if (localStorage.getItem('token') && !config.headers.Authorization) {
    //   config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    // }
    // config.headers.platform = 'web';
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// 响应拦截器
http.interceptors.response.use(
  async (response: AxiosResponse<API.IResponse<any>>): Promise<API.IResponse<any> | any> => {
    const responseData: API.IResponse<any> = response.data;
    // 如果是文件，自动下载
    // if (
    //   response.headers['content-disposition'] &&
    //   response.headers['content-disposition'].indexOf('attachment') > -1
    // ) {
    //   const disposition = response.headers['content-disposition'];
    //   if (disposition) {
    //     const filename = disposition.split('filename=')[1];
    //     downloadFileBlob(response.data as any, filename);
    //     return Promise.resolve(response);
    //   }
    // }
    // console.log(response.headers);

    if (
      response.headers['content-type'] &&
      response.headers['content-type'].indexOf('application/pdf') > -1
    ) {
      // downloadFileBlob(response.data as any, 'fax.pdf');
      return Promise.resolve(response.data);
    }

    // 成功正常返回数据
    if (responseData.code === 200 || (responseData as any).sign === '1') {
      // 这里返回的是 IResponse<T> 中的 T
      return Promise.resolve(responseData.data);
    }

    // 如果响应数据直接包含 sign 字段（如重置密码API），直接返回响应数据
    if ((responseData as any).sign !== undefined) {
      return Promise.resolve(responseData);
    }

    if (responseData.code === 401) {
      localStorage.removeItem('token');
      location.href = '/login';
      return Promise.resolve(false);
    }

    return Promise.resolve(false);
  },
  (error: AxiosError) => {
    console.log('API Error:', error);
    console.log('Error Response:', error.response?.data);
    console.log('Error Status:', error.response?.status);
    console.log('Request URL:', (error.config?.baseURL || '') + (error.config?.url || ''));
    if (error.status === 401) {
      localStorage.removeItem('token');
      location.href = '/login';
      return Promise.resolve(false);
    }
    return Promise.resolve(false);
  },
);

const httpRequest = async <T>(
  url: string,
  params: { method: string; data?: any; params?: any; headers?: any; responseType?: any },
): Promise<T> => {
  return http.request({
    url,
    method: params.method,
    data: params.data,
    params: params.params,
    headers: params.headers,
    responseType: params.responseType,
  });
};

export default httpRequest;
