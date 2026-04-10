import { Button } from '@/components/ui/button';
import { Toggle } from '@/components/ui/toggle';
import { Switch } from '@/components/ui/switch';
import { useState } from 'react';

export default function ButtonsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">按钮组件</h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">按钮变体</h2>
        <div className="flex flex-wrap gap-4">
          <div className="flex flex-col items-center gap-2">
            <Button variant="default">默认按钮</Button>
            <span className="text-sm text-gray-600">default</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button variant="destructive">危险按钮</Button>
            <span className="text-sm text-gray-600">destructive</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button variant="outline">轮廓按钮</Button>
            <span className="text-sm text-gray-600">outline</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button variant="secondary">次要按钮</Button>
            <span className="text-sm text-gray-600">secondary</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button variant="ghost">幽灵按钮</Button>
            <span className="text-sm text-gray-600">ghost</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button variant="link">链接按钮</Button>
            <span className="text-sm text-gray-600">link</span>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">按钮尺寸</h2>
        <div className="flex flex-wrap gap-4">
          <div className="flex flex-col items-center gap-2">
            <Button size="sm">小按钮</Button>
            <span className="text-sm text-gray-600">sm</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button size="md">中按钮</Button>
            <span className="text-sm text-gray-600">md</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button size="lg">大按钮</Button>
            <span className="text-sm text-gray-600">lg</span>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">按钮状态</h2>
        <div className="flex flex-wrap gap-4">
          <div className="flex flex-col items-center gap-2">
            <Button>正常按钮</Button>
            <span className="text-sm text-gray-600">正常</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button disabled>禁用按钮</Button>
            <span className="text-sm text-gray-600">禁用</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button>
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              加载中...
            </Button>
            <span className="text-sm text-gray-600">加载中</span>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">按钮组合</h2>
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <Button variant="outline">取消</Button>
            <Button>确认</Button>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="secondary">上一步</Button>
            <Button>下一步</Button>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="destructive">删除</Button>
            <Button variant="outline">取消</Button>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Toggle 组件</h2>
        <div className="flex flex-wrap gap-8 ">
          <div className="flex flex-col items-center gap-2 rounded-lg">
            <Toggle className="px-4 py-2 bg-blue-50 hover:bg-blue-100 data-[state=on]:bg-blue-600 data-[state=on]:text-white">
              基本 toggle
            </Toggle>
          </div>
          <div className="flex flex-col items-center gap-2 rounded-lg">
            <Toggle disabled className="px-4 py-2">
              禁用状态
            </Toggle>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Switch 组件</h2>
        <div className="flex flex-wrap gap-8 items-center">
          <Switch />
          <Switch disabled />
          <div className="flex items-center gap-2 p-4 bg-gray-50 rounded-lg">
            <span>启用选项</span>
            <Switch />
          </div>
        </div>
      </div>
    </div>
  );
}
