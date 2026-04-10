'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import { Loader, RefreshCw, Circle, Square, Triangle } from 'lucide-react';

export default function SpinnerPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-4">加载指示器组件</h1>
          <p className="text-gray-600 mb-6">
            加载指示器组件用于显示加载状态，可用于表单提交、数据加载等场景。
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">不同类型</h2>
          <div className="flex flex-wrap gap-8">
            <div className="flex flex-col items-center gap-2">
              <Spinner />
              <span className="text-sm text-gray-600">基本</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner icon={<Loader />} />
              <span className="text-sm text-gray-600">Loader图标</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner icon={<RefreshCw />} />
              <span className="text-sm text-gray-600">Refresh图标</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner icon={<Circle />} />
              <span className="text-sm text-gray-600">Circle图标</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">不同尺寸</h2>
          <div className="flex flex-wrap gap-8">
            <div className="flex flex-col items-center gap-2">
              <Spinner size="sm" className="border-gray-400 border-t-blue-500" />
              <span className="text-sm text-gray-600">小尺寸</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner size="md" className="border-gray-400 border-t-blue-500" />
              <span className="text-sm text-gray-600">中尺寸</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner size="lg" className="border-gray-400 border-t-blue-500" />
              <span className="text-sm text-gray-600">大尺寸</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">不同颜色</h2>
          <div className="flex flex-wrap gap-8">
            <div className="flex flex-col items-center gap-2">
              <Spinner className="border-gray-400 border-t-blue-500" />
              <span className="text-sm text-gray-600">主色</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner className="border-gray-400 border-t-green-500" />
              <span className="text-sm text-gray-600">成功色</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner className="border-gray-400 border-t-red-500" />
              <span className="text-sm text-gray-600">危险色</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner className="border-gray-400 border-t-yellow-500" />
              <span className="text-sm text-gray-600">警告色</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">不同使用场景</h2>
          <div className="flex flex-wrap gap-8">
            <div className="flex flex-col items-center gap-4">
              <div className="w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                <Spinner size="lg" className="border-gray-400 border-t-blue-500" />
              </div>
              <span className="text-sm text-gray-600">数据加载中</span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Button disabled>
                <Spinner size="sm" className="mr-2 border-white border-t-transparent" />
                提交中...
              </Button>
              <span className="text-sm text-gray-600">表单提交中</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
