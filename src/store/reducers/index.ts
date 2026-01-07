import { AuthReducer } from './authReducer';
import HomeReducers from './homeReducer';
import { SystemConfigReducer } from './systemConfig';

export const rootReducers = [AuthReducer, SystemConfigReducer, ...HomeReducers];

/**
 * @author 龙保江
 * @date 2024-06-05 14:57:46
 * @desc 配置持久化存储的key，这里的key为Store中的key
 */
export const persistenceKeys = [
  'token',
  'systemConfig',
  'faxNumberHistory',
  'faxCoverForm',
  'faxCurrentCountryIndex',
  'registerSuccess',
];
