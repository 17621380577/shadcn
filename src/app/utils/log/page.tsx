// 这是一个服务器组件（默认）
import BuildInfoClient from '@/app/utils/log/BuildInfoClient';

// 声明全局变量类型
declare global {
  // eslint-disable-next-line no-var
  var __SERVER_START_TIME__: string | undefined;
}

// 确保服务器启动时间只初始化一次
if (!global.__SERVER_START_TIME__) {
  global.__SERVER_START_TIME__ = new Date().toISOString();
}

export default function LogPage() {
  if (process.env.NEXT_PUBLIC_NODE_ENV === 'production') {
    return null;
  }
  // 获取服务器启动时间
  const serverStartTime = global.__SERVER_START_TIME__;

  // 将数据传递给客户端组件
  return <BuildInfoClient serverStartTime={serverStartTime} />;
}
