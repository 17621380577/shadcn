import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  reactStrictMode: false,
  // 根据环境变量启用sourcemap
  productionBrowserSourceMaps: process.env.NODE_ENV === 'test',
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '**',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: '**',
        pathname: '**',
      },
    ],
  },
  // 自定义webpack配置，为测试环境启用sourcemap
  webpack: (config, { dev }) => {
    // 在测试环境中也启用sourcemap
    if (!dev && process.env.NODE_ENV === 'test') {
      config.devtool = 'source-map';
    }

    // 添加构建时间戳
    config.plugins = config.plugins || [];
    const { DefinePlugin } = require('webpack');
    config.plugins.push(
      new DefinePlugin({
        'process.env.BUILD_TIMESTAMP': JSON.stringify(new Date().toISOString()),
      }),
    );

    return config;
  },
};

const withNextIntl = createNextIntlPlugin()(nextConfig);
export default withNextIntl;
