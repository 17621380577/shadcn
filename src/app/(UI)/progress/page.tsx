'use client';

import { useState } from 'react';
import { Progress } from '@/components/ui/progress';

export default function ProgressPage() {
  const [progress, setProgress] = useState(50);

  const handleIncrease = () => {
    setProgress((prev) => Math.min(prev + 10, 100));
  };

  const handleDecrease = () => {
    setProgress((prev) => Math.max(prev - 10, 0));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-4">进度条组件</h1>
          <p className="text-gray-600 mb-6">各种类型的进度条组件，包括线性进度条、环形进度条等，支持自定义样式和进度值。</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">基本进度条</h2>
          <div className="space-y-8">
            <div>
              <Progress value={0} className="h-2" showLabel />
            </div>
            <div>
              <Progress value={25} className="h-2" showLabel />
            </div>
            <div>
              <Progress value={50} className="h-2" showLabel />
            </div>
            <div>
              <Progress value={75} className="h-2" showLabel />
            </div>
            <div>
              <Progress value={100} className="h-2" showLabel />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">可交互的进度条</h2>
          <p className="text-gray-600 mb-4">当前进度: {progress}%</p>
          <Progress value={progress} className="h-2 mb-4" />
          <div className="flex gap-4">
            <button
              onClick={handleDecrease}
              className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
            >
              减少 10%
            </button>
            <button
              onClick={handleIncrease}
              className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
            >
              增加 10%
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">不同高度的进度条</h2>
          <div className="space-y-4">
            <div>
              <span className="block mb-2">高度 1px</span>
              <Progress value={60} className="h-0.5" />
            </div>
            <div>
              <span className="block mb-2">高度 4px</span>
              <Progress value={60} className="h-1" />
            </div>
            <div>
              <span className="block mb-2">高度 8px</span>
              <Progress value={60} className="h-2" />
            </div>
            <div>
              <span className="block mb-2">高度 16px</span>
              <Progress value={60} className="h-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}