import { StoreContext } from '@/store';
import { useContext } from 'react';

/**
 * @author 龙保江
 * @date 2024-06-05 13:51:47
 * @desc 获取store
 */
export const useStore = () => {
  const context: any = useContext(StoreContext);
  return { store: context.store as STORE.IState, dispatch: context.dispatch as STORE.IDispatch };
};
