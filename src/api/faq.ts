import httpRequest from '@/lib/request';
let baseUrl = '';
if (process.env.NEXT_PUBLIC_NODE_ENV !== 'production') {
  baseUrl = process.env.NEXT_PUBLIC_APP_PAYMENT_API_URL || '';
}
export const getFAQIndexList = (params: { lg?: string; paid?: any }): Promise<any> =>
  httpRequest(`${baseUrl}/api/faq-get-index`, {
    method: 'GET',
    params,
  });

export const getFAQDetail = (params: { lg?: string; question_id?: any }): Promise<any> =>
  httpRequest(`${baseUrl}/api/faq-get-detail`, {
    method: 'GET',
    params,
  });

export const getFAQSearchList = (params: {
  lg?: string;
  class_id?: any;
  search_text?: any;
  paid?: any;
}): Promise<any> =>
  httpRequest(`/api/faq-get-list`, {
    method: 'GET',
    params,
  });

// const buryingPoint = (key: string, data?: { [key: string]: any }) => {
//   const info = JSON.parse(sessionStorage.getItem('spmConfig') as string) || {};
//   http.post('sqlRecord/addUserRecord.php', {
//     records: [
//       {
//         app_version: process.env.APP_VERSION,
//         event_name: key,
//         create_timestamp: Number((new Date().getTime() / 1000).toFixed(0)),
//         device_id: info?.device_id || '',
//         keychain: info.userId || '',
//         parameters: data ?? {},
//       },
//     ],
//     app_name: 'tinyinvoice.web',
//   });
// };
