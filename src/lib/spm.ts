import FingerprintJS from '@fingerprintjs/fingerprintjs';
import CryptoJS from 'crypto-js';

const getFingerid = async () => {
  const fpPromise = FingerprintJS.load();
  const fp = await fpPromise;
  const result = await fp.get();
  return result.visitorId;
};

interface Config {
  /**
   * @author 龙保江
   * @date 2024-11-18 14:38:54
   * @desc 应用唯一标识
   */
  app_id: string;
  /**
   * @author 龙保江
   * @date 2024-11-18 14:38:54
   * @desc 应用名称
   */
  app_name: string;
  /**
   * @author 龙保江
   * @date 2024-11-18 14:38:54
   * @desc 应用版本
   */
  app_version: string;
  /**
   * @author 龙保江
   * @date 2024-11-18 14:38:54
   * @desc 平台类型
   */
  platform: string;
  /**
   * @author 龙保江
   * @date 2024-11-18 14:38:54
   * @desc SDK版本
   */
  lib_version: string;
  /**
   * @author 龙保江
   * @date 2024-11-18 14:38:54
   * @desc 设备制造商
   */
  manufacturer: string;
  /**
   * @author 龙保江
   * @date 2024-11-18 14:38:54
   * @desc 设备品牌
   */
  brand: string;
  /**
   * @author 龙保江
   * @date 2024-11-18 14:38:54
   * @desc 设备型号
   */
  model: string;
  /**
   * @author 龙保江
   * @date 2024-11-18 14:38:54
   * @desc 操作系统
   */
  os: string;
  /**
   * @author 龙保江
   * @date 2024-11-18 14:38:54
   * @desc 操作系统版本
   */
  os_version: string;
  /**
   * @author 龙保江
   * @date 2024-11-18 14:38:54
   * @desc 前向页面标题
   */
  referrer_title: string;
  /**
   * @author 龙保江
   * @date 2024-11-18 14:38:54
   * @desc 屏幕高度
   */
  screen_height: number;
  /**
   * @author 龙保江
   * @date 2024-11-18 14:38:54
   * @desc 屏幕宽度
   */
  screen_width: number;
  /**
   * @author 龙保江
   * @date 2024-11-18 14:38:54
   * @desc 是否 WiFi
   */
  is_wifi?: boolean;
  /**
   * @author 龙保江
   * @date 2024-11-18 14:38:54
   * @desc 运营商名称
   */
  carrier: string;
  /**
   * @author 龙保江
   * @date 2024-11-18 14:38:54
   * @desc 网络类型
   */
  network_type: string;
  /**
   * @author 龙保江
   * @date 2024-11-18 14:38:54
   * @desc 时区偏移量
   */
  timezone_offset: number;
  /**
   * @author 龙保江
   * @date 2024-11-18 14:38:54
   * @desc 是否首日访问
   */
  is_first_day?: boolean;
  /**
   * @author 龙保江
   * @date 2024-11-18 14:38:54
   * @desc 是否首次访问
   */
  is_first_time?: boolean;
  /**
   * @author 龙保江
   * @date 2024-11-18 14:38:54
   * @desc 是否登录 ID
   */
  is_login_id?: boolean;
  /**
   * @author 龙保江
   * @date 2024-11-18 14:38:54
   * @desc 国家
   */
  device_country: string;
  /**
   * @author 龙保江
   * @date 2024-11-18 14:38:54
   * @desc 登录 ID
   */
  login_id: string;
  /**
   * @author 龙保江
   * @date 2024-11-18 14:38:54
   * @desc 设备 ID
   */
  device_id: string;
  /**
   * @author 龙保江
   * @date 2024-11-18 14:38:54
   * @desc 是否付费用户
   */
  is_money?: boolean;
}
export interface ConfigParams {
  /**
   * @author 龙保江
   * @date 2024-11-18 14:38:54
   * @desc 应用唯一标识
   */
  app_id: string;
  /**
   * @author 龙保江
   * @date 2024-11-18 14:38:54
   * @desc 应用名称
   */
  app_name: string;
  /**
   * @author 龙保江
   * @date 2024-11-18 14:38:54
   * @desc 应用版本
   */
  app_version: string;

  /**
   * @author 龙保江
   * @date 2024-11-18 14:38:54
   * @desc 是否登录 ID
   */
  is_login_id?: boolean;

  /**
   * @author 龙保江
   * @date 2024-11-18 14:38:54
   * @desc 登录 ID
   */
  login_id?: string;

  /**
   * @author 龙保江
   * @date 2024-11-18 14:38:54
   * @desc 是否付费用户
   */
  is_money?: boolean;
  /**
   * @author 龙保江
   * @date 2024-11-18 14:38:54
   * @desc 设备 ID
   */
  device_id?: string;
  /**
   * @author 龙保江
   * @date 2024-11-18 14:38:54
   * @desc 国家
   */
  device_country?: string;
  /**
   * @author 龙保江
   * @date 2024-11-19 10:37:47
   * @desc 跳过浏览事件的路径列表,数据为location.pathname
   */
  exclude_browse_pathname_list?: string[];
}
/**
 * @author 龙保江
 * @date 2024-11-18 14:37:14
 * @desc spm配置
 */
let spmConfig: Config = {
  /**
   * @author 龙保江
   * @date 2024-11-18 14:38:54
   * @desc 应用唯一标识
   */
  app_id: '',
  /**
   * @author 龙保江
   * @date 2024-11-18 14:38:54
   * @desc 应用名称
   */
  app_name: '',
  /**
   * @author 龙保江
   * @date 2024-11-18 14:38:54
   * @desc 应用版本
   */
  app_version: '',
  /**
   * @author 龙保江
   * @date 2024-11-18 14:38:54
   * @desc 平台类型
   */
  platform: 'web',
  /**
   * @author 龙保江
   * @date 2024-11-18 14:38:54
   * @desc SDK版本
   */
  lib_version: '',
  /**
   * @author 龙保江
   * @date 2024-11-18 14:38:54
   * @desc 设备制造商
   */
  manufacturer: '',
  /**
   * @author 龙保江
   * @date 2024-11-18 14:38:54
   * @desc 设备品牌
   */
  brand: '',
  /**
   * @author 龙保江
   * @date 2024-11-18 14:38:54
   * @desc 设备型号
   */
  model: '',
  /**
   * @author 龙保江
   * @date 2024-11-18 14:38:54
   * @desc 操作系统
   */
  os: '',
  /**
   * @author 龙保江
   * @date 2024-11-18 14:38:54
   * @desc 操作系统版本
   */
  os_version: '',
  /**
   * @author 龙保江
   * @date 2024-11-18 14:38:54
   * @desc 前向页面标题
   */
  referrer_title: '',
  /**
   * @author 龙保江
   * @date 2024-11-18 14:38:54
   * @desc 屏幕高度
   */
  screen_height: 0,
  /**
   * @author 龙保江
   * @date 2024-11-18 14:38:54
   * @desc 屏幕宽度
   */
  screen_width: 0,
  /**
   * @author 龙保江
   * @date 2024-11-18 14:38:54
   * @desc 运营商名称
   */
  carrier: '',
  /**
   * @author 龙保江
   * @date 2024-11-18 14:38:54
   * @desc 网络类型
   */
  network_type: '',
  /**
   * @author 龙保江
   * @date 2024-11-18 14:38:54
   * @desc 时区偏移量
   */
  timezone_offset: 0,
  /**
   * @author 龙保江
   * @date 2024-11-18 14:38:54
   * @desc 国家
   */
  device_country: '',
  /**
   * @author 龙保江
   * @date 2024-11-18 14:38:54
   * @desc 登录 ID
   */
  login_id: '',
  /**
   * @author 龙保江
   * @date 2024-11-18 14:38:54
   * @desc 设备 ID
   */
  device_id: '',
};
/**
 * @author 龙保江
 * @date 2024-11-19 10:39:29
 * @desc 路由信息
 */
const routers: Array<Location & { title: string }> = [];
/**
 * @author 龙保江
 * @date 2024-11-19 10:37:47
 * @desc 跳过浏览事件的路径列表
 */
const exclude_browse_pathname_list: string[] = [];
/**
 * @author 龙保江
 * @date 2024-11-19 14:05:12
 * @desc 是否初始化
 */
let isInit = false;
/**
 * @author 龙保江
 * @date 2024-11-18 15:51:26
 * @desc 初始化环境配置
 */
const initEnvironmentConfig = (config: typeof spmConfig) => {
  const updatedConfig = { ...config }; // 创建一个新的对象
  updatedConfig.os = getOS();
  updatedConfig.os_version = getOSVersion();
  updatedConfig.manufacturer = getManufacturer();
  updatedConfig.brand = getManufacturer();
  updatedConfig.model = getManufacturer();
  updatedConfig.screen_height = getScreenHeight();
  updatedConfig.screen_width = getScreenWidth();
  updatedConfig.timezone_offset = getTimezoneOffset();
  window.addEventListener('DOMContentLoaded', handleLocation);
  window.addEventListener('hashchange', handleLocation);
  window.addEventListener('popstate', handleLocation);
  const observer = new MutationObserver(handleLocation);
  observer.observe(document.querySelector('body') as any, {
    childList: false,
    subtree: false,
    attributes: true,
    attributeFilter: ['href'],
  });
  let lastPath = '';
  setInterval(() => {
    if (lastPath !== window.location.href) {
      if (routers.length) {
        if (routers[routers.length - 1].href !== window.location.href) {
          handleLocation();
        }
      } else {
        handleLocation();
      }
      lastPath = window.location.href;
    }
    if (routers.length) {
      if (routers[routers.length - 1].href === window.location.href) {
        routers[routers.length - 1].title = document.title;
      }
    }
  }, 600);
  return updatedConfig; // 返回更新后的对象
};
/**
 * @author 龙保江
 * @date 2024-11-19 10:39:36
 * @desc 监听路由变化
 */
const handleLocation = () => {
  routers.push({ ...location, title: document.title });
  if (isInit) {
    handleBrowserEvent();
  }
  if (routers.length > 10) {
    routers.splice(0, 1);
  }
};
/**
 * @author 龙保江
 * @date 2024-11-19 14:14:47
 * @desc 处理浏览事件
 */
const handleBrowserEvent = () => {
  let flag = false;
  const pathname = location.pathname.endsWith('/')
    ? location.pathname.slice(0, -1)
    : location.pathname;
  exclude_browse_pathname_list.forEach((e) => {
    if (e.endsWith('/')) {
      if (pathname.startsWith(e)) {
        flag = true;
      }
    } else if (pathname === e) {
      flag = true;
    }
  });
  if (!flag) {
    browserEvent();
  }
};
/**
 * @author 龙保江
 * @date 2024-11-18 15:24:12
 * @desc 获取操作系统
 */
const getOS = (): string => {
  const { userAgent } = navigator;
  if (userAgent.indexOf('Android') !== -1) return 'Android';
  if (userAgent.indexOf('Windows') !== -1) return 'Windows';
  if (userAgent.indexOf('Mac') !== -1) return 'MacOS';
  if (userAgent.indexOf('iPhone') !== -1 || userAgent.indexOf('iPad') !== -1) return 'iOS';
  if (userAgent.indexOf('Linux') !== -1) return 'Linux';
  return '';
};
/**
 * @author 龙保江
 * @date 2024-11-18 15:24:07
 * @desc 获取操作系统版本
 */
const getOSVersion = (): string => {
  const { userAgent } = navigator;
  const match = userAgent.match(/(Windows NT|Mac OS X|Linux|Android|iPhone|iP[ao]d) ([.\d]+)/);
  return match ? match[2] : '';
};
/**
 * @author 龙保江
 * @date 2024-11-18 15:23:58
 * @desc 获取设备制造商
 */
const getManufacturer = (): string => {
  const match = navigator.userAgent.match(/\(([^)]+)\)/); // 匹配括号内的内容
  if (match) {
    const innerContent = match[1];
    const parts = innerContent.split('; ');

    // 假设设备型号和构建版本是最后一个部分
    const lastPart = parts[parts.length - 1];
    return lastPart;
  }
  return '';
};
/**
 * @author 龙保江
 * @date 2024-11-18 15:27:30
 * @desc 获取屏幕高度
 */
const getScreenHeight = (): number => {
  return window.screen.height;
};
/**
 * @author 龙保江
 * @date 2024-11-18 15:27:32
 * @desc 获取屏幕宽度
 */
const getScreenWidth = (): number => {
  return window.screen.width;
};

/**
 * @author 龙保江
 * @date 2024-11-18 15:33:41
 * @desc 获取时区偏移量
 */
const getTimezoneOffset = (): number => {
  const offsetInMinutes = new Date().getTimezoneOffset();
  const offsetInHours = -offsetInMinutes / 60;
  const sign = offsetInHours >= 0 ? '' : '-';
  const hours = Math.abs(offsetInHours).toString().padStart(2, '0');
  return Number(`${sign}${hours}`);
};

/**
 * @author 龙保江
 * @date 2024-11-18 14:40:28
 * @desc 初始化配置
 */
const initConfig = async (config: ConfigParams) => {
  if (typeof window === 'undefined') {
    return;
  }
  if (isInit) {
    return;
  }
  if (sessionStorage.getItem('spmConfig')) {
    try {
      spmConfig = JSON.parse(sessionStorage.getItem('spmConfig') as string);
    } catch (error) {
      console.error('Error parsing spmConfig:', error);
    }
  }
  spmConfig = initEnvironmentConfig(spmConfig);

  spmConfig = { ...spmConfig, ...config };
  if (config.exclude_browse_pathname_list) {
    exclude_browse_pathname_list.push(...config.exclude_browse_pathname_list);
  }
  isInit = true;
};

/**
 * @author 龙保江
 * @date 2024-11-18 14:50:39
 * @desc 修改配置
 */
const changeConfig = (config: Partial<ConfigParams>) => {
  if (typeof window === 'undefined') {
    return;
  }
  spmConfig = { ...spmConfig, ...config };
  sessionStorage.setItem('spmConfig', JSON.stringify(spmConfig));
};

/**
 * @author 龙保江
 * @date 2024-11-18 17:13:14
 * @desc 发送事件
 */
const event = async (key: string, options?: { [key: string]: string | number | boolean }) => {
  try {
    const url = 'https://universallink-test.polycents.com/mongoRecord/addAppEvent.php';
    const timestamp = Number.parseInt((new Date().getTime() / 1000).toFixed(0), 10);
    const sign = CryptoJS.MD5(`${spmConfig.app_name}rjN7kzLh7XdVKBwX4B${timestamp}`).toString();
    let referrer_title = '';
    if (routers.length > 1) {
      referrer_title = routers[routers.length - 2].title;
    }
    if (!spmConfig.device_id) {
      spmConfig.device_id = await getFingerid();
    }
    const item = {
      event_name:
        process.env.NEXT_PUBLIC_NODE_ENV === 'development' ||
        process.env.NEXT_PUBLIC_NODE_ENV === 'test'
          ? `${key}_TEST`
          : key,
      ...spmConfig,
      create_timestamp: timestamp,
      parameters: options,
      referrer_title,
    };
    if (!options) {
      delete item.parameters;
    }
    const body = {
      app_name: spmConfig.app_name,
      s_timestamp: timestamp,
      sign,
      records: [item],
    };
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
  } catch (error) {
    console.log(error);
  }
};

/**
 * @author 龙保江
 * @date 2024-11-19 10:33:55
 * @desc 浏览器事件上报
 */
const browserEvent = (title?: string) => {
  event('WebPageView', {
    title: title || document.title,
    url: window.location.href,
  });
};
const spm = { initConfig, changeConfig, event, browserEvent };
export default spm;
