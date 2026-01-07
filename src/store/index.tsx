'use client';
import { createContext, useReducer } from 'react';
import { countrys, menus } from './defaultState';
import { persistenceKeys, rootReducers } from './reducers';

export const StoreContext = createContext<STORE.IState | null>(null);

/**
 * @author 龙保江
 * @date 2024-06-05 15:22:23
 * @desc 配置初始化reducer
 */
export const initReducer: STORE.IReducer = (state, action) => {
  switch (action.type) {
    case 'INIT_REDUCER':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return {
        ...state,
        ...action.payload,
      };
  }
};

/**
 * @author 龙保江
 * @date 2024-06-05 13:51:59
 * @desc 创建通用reducer
 */
export const combineReducer: STORE.IReducer = (
  state: STORE.IState,
  action: { type: string; [key: string]: any },
) => {
  let newState: STORE.IState = { ...state };
  rootReducers.concat(initReducer).forEach((reducer) => {
    newState = { ...newState, ...reducer(newState, action) };
  });
  persistenceState(newState);
  return { ...newState };
};

const localStorageKey = 'persistence';
const localStorageObj: {
  version: string;
  state: STORE.IState;
} = {
  version: new Date().getTime().toString(),
  state: {},
};

/**
 * @author 龙保江
 * @date 2024-06-05 15:02:53
 * @desc 持久化state
 */
export const persistenceState = (state: STORE.IState) => {
  persistenceKeys.forEach((key) => {
    localStorageObj.state[key] = state[key];
  });
  if (typeof window !== 'undefined') {
    localStorage.setItem(localStorageKey, JSON.stringify(localStorageObj));
  }
};

/**
 * @author 龙保江
 * @date 2024-06-05 15:11:14
 * @desc 初始化持久化state
 */
export const initPersistenceState = () => {
  const newState: STORE.IState = {};
  const localStorageData = localStorage.getItem(localStorageKey);
  if (localStorageData) {
    try {
      const json = JSON.parse(localStorageData);
      for (const key in json.state) {
        if (Object.prototype.hasOwnProperty.call(json.state, key)) {
          const item = json.state[key];
          newState[key] = item;
        }
      }
    } catch (error: any) {
      console.log(error);
      localStorage.setItem(localStorageKey, '');
    }
  }
  return newState;
};

export const StoreProvider = ({
  children,
  initialValue = defaultState,
}: STORE.ProviderPropsType) => {
  const [store, dispatch] = useReducer(combineReducer, initialValue);
  return <StoreContext.Provider value={{ store, dispatch }}>{children}</StoreContext.Provider>;
};

/**
 * @author 龙保江
 * @date 2024-10-10 09:38:45
 * @desc 默认store
 */
const defaultState: STORE.IState = (() => {
  const storageState = typeof window !== 'undefined' ? initPersistenceState() : {};
  return {
    user: undefined,
    token: '',
    menus,
    currentMenuIndex: 0,
    faxNumberHistory: [], // 发送传真历史:
    faxCurrentCountryIndex: 0, // 发送传真已选国家的id
    countrys,
    registerSuccess: false,
    ...storageState,
  };
})();
