export interface IMessage {
  action: string;
  data: any;
}

/**
 * @author 龙保江
 * @date 2024-07-29 10:26:14
 * @desc jsBridge 的回调数据
 */
const callbacks: { [key: string]: (data: IMessage, key: string) => void } = {};

/**
 * @author 龙保江
 * @date 2024-07-29 10:26:41
 * @desc jsBridge
 */
export const jsBridge = (
  init: { platform: string | string[]; key: string },
  callback?: (data: IMessage, key: string) => void,
) => {
  callback && (callbacks[init.key] = callback);
  return {
    /**
     * @author 龙保江
     * @date 2024-07-29 10:26:51
     * @desc 发送消息
     */
    sendMessage: (message: IMessage) => {
      if (init.platform === 'ios' || init.platform?.includes('ios')) {
        try {
          (window as any).webkit.messageHandlers.iosHandler.postMessage(JSON.stringify(message));
        } catch (error) {
          console.log(error);
        }
      }
      if (init.platform === 'android' || init.platform?.includes('android')) {
        try {
          (window as any).androidHandler.postMessage(JSON.stringify(message));
        } catch (error) {
          console.log(error);
        }
      }
    },
    /**
     * @author 龙保江
     * @date 2024-07-29 10:40:46
     * @desc 销毁
     */
    destroy: () => {
      delete callbacks[init.key];
    },
  };
};
/**
 * @author 龙保江
 * @date 2024-07-26 16:30:56
 * @desc 接收IOS发送过来的数据
 */
function receiveDataFromIOS(data: IMessage) {
  for (const key in callbacks) {
    if (Object.prototype.hasOwnProperty.call(callbacks, key)) {
      const item = callbacks[key];
      try {
        item(data, key);
      } catch (error) {
        console.log(error);
      }
    }
  }
}

/**
 * @author 龙保江
 * @date 2024-07-29 16:59:20
 * @desc 监听Android发送过来的数据
 */
function receiveDataFromAndroid(data: string) {
  for (const key in callbacks) {
    if (Object.prototype.hasOwnProperty.call(callbacks, key)) {
      const item = callbacks[key];
      try {
        item(JSON.parse(data) as IMessage, key);
      } catch (error) {
        console.log(error);
      }
    }
  }
}
if (typeof window !== 'undefined') {
  (window as any).receiveDataFromIOS = receiveDataFromIOS;
  (window as any).receiveDataFromAndroid = receiveDataFromAndroid;
}
