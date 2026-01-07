'use client';

import { useEffect, useState } from 'react';

interface BuildInfoProps {
  serverStartTime: string | undefined;
}

interface BuildInfo {
  version: string;
  timestamp: string | null;
  buildDate: string | null;
  nodeEnv: string | null;
  deploymentTime: string | null;
}

export default function BuildInfoClient({ serverStartTime }: BuildInfoProps) {
  const [buildInfo, setBuildInfo] = useState<BuildInfo>({
    version: '未知',
    timestamp: null,
    buildDate: null,
    nodeEnv: null,
    deploymentTime: null,
  });

  useEffect(() => {
    // 这些环境变量是在构建时由 webpack 注入的
    const timestamp = process.env.BUILD_TIMESTAMP || null;
    const version = process.env.NEXT_PUBLIC_APP_VERSION || '未知';

    setBuildInfo({
      version,
      timestamp,
      buildDate: timestamp ? new Date(timestamp).toLocaleString() : null,
      nodeEnv: process.env.NEXT_PUBLIC_NODE_ENV || null,
      deploymentTime: serverStartTime ? new Date(serverStartTime).toLocaleString() : null,
    });
  }, [serverStartTime]);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">构建与部署信息</h1>

        <div className="space-y-4">
          <div className="border-b pb-4">
            <h2 className="text-lg font-medium text-gray-700 mb-2">版本信息</h2>
            <p className="text-gray-600">
              当前版本:{' '}
              <span className="font-mono bg-gray-100 px-2 py-1 rounded">{buildInfo.version}</span>
            </p>
          </div>

          <div className="border-b pb-4">
            <h2 className="text-lg font-medium text-gray-700 mb-2">构建时间</h2>
            {buildInfo.buildDate ? (
              <p className="text-gray-600">
                构建于:{' '}
                <span className="font-mono bg-gray-100 px-2 py-1 rounded">
                  {buildInfo.buildDate}
                </span>
              </p>
            ) : (
              <p className="text-yellow-600">未获取到构建时间信息</p>
            )}

            {buildInfo.timestamp && (
              <p className="text-gray-500 text-sm mt-1">
                原始时间戳: <span className="font-mono">{buildInfo.timestamp}</span>
              </p>
            )}
          </div>

          <div className="border-b pb-4">
            <h2 className="text-lg font-medium text-gray-700 mb-2">部署时间</h2>
            {buildInfo.deploymentTime ? (
              <p className="text-gray-600">
                部署于:{' '}
                <span className="font-mono bg-gray-100 px-2 py-1 rounded">
                  {buildInfo.deploymentTime}
                </span>
              </p>
            ) : (
              <p className="text-yellow-600">未获取到部署时间信息</p>
            )}
            <p className="text-gray-500 text-sm mt-1">
              部署时间基于服务器实例启动时间，只在服务器重启或重新部署时更新
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-700 mb-2">环境信息</h2>
            <p className="text-gray-600">
              运行环境:{' '}
              <span className="font-mono bg-gray-100 px-2 py-1 rounded">
                {buildInfo.nodeEnv || '未知'}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
