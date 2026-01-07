import { useRef } from 'react';

/**
 * @author 龙保江
 * @date 2024-09-10 18:08:59
 * @desc 节流锁
 */
export const useLock = () => {
  const lock = useRef(false);
  return {
    lock: lock.current,
    setLock: (value: boolean) => {
      lock.current = value;
    },
  };
};
