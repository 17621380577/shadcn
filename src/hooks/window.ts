import { useEffect, useState } from 'react';

/**
 * @author 龙保江
 * @date 2024-07-18 14:25:31
 * @desc 获取window的宽高
 */
export const useWindow = () => {
  // window size,包含屏幕屏幕的宽高、body的宽高
  const [windowSize, setWindowSize] = useState<{
    innerWidth: number;
    innerHeight: number;
    clientWidth: number;
    clientHeight: number;
    scrollY: number;
    scrollX: number;
  } | null>();

  useEffect(() => {
    setWindowSize({
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
      clientWidth: document.documentElement.clientWidth,
      clientHeight: document.documentElement.clientHeight,
      scrollY: window.scrollY,
      scrollX: window.scrollX,
    });
    window.addEventListener('resize', () => {
      setWindowSize({
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight,
        clientWidth: document.documentElement.clientWidth,
        clientHeight: document.documentElement.clientHeight,
        scrollY: window.scrollY,
        scrollX: window.scrollX,
      });
    });
    return () => {
      window.removeEventListener('resize', () => {
        setWindowSize({
          innerWidth: window.innerWidth,
          innerHeight: window.innerHeight,
          clientWidth: document.documentElement.clientWidth,
          clientHeight: document.documentElement.clientHeight,
          scrollY: window.scrollY,
          scrollX: window.scrollX,
        });
      });
    };
  }, []);
  /**
   * @author 龙保江
   * @date 2024-07-18 14:01:04
   * @desc 滚动到指定位置
   */
  const scrollTo = (x: number, y: number) => {
    window.scrollTo(x, y);
  };
  /**
   * @author 龙保江
   * @date 2024-07-18 14:01:54
   * @desc 滚动到顶部
   */
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  /**
   * @author 龙保江
   * @date 2024-07-18 14:02:04
   * @desc 滚动到底部
   */
  const scrollToBottom = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };
  /**
   * @author 龙保江
   * @date 2024-07-18 14:03:04
   * @desc 滚动到指定元素
   */
  const scrollToElement = (element: HTMLElement) => {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  };
  return { windowSize, scrollTo, scrollToTop, scrollToBottom, scrollToElement };
};

/**
 * @author 龙保江
 * @date 2024-07-23 14:47:58
 * @desc 页面内容相关
 */
export const usePage = () => {
  /**
   * @author 龙保江
   * @date 2024-07-26 09:39:47
   * @desc 设置页面标题
   */
  const setTitle = (title: string) => {
    document.title = title;
  };
  return {
    setTitle,
  };
};
