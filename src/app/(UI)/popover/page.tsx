'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

export default function PopoversPage() {
  const [isHoverOpen, setIsHoverOpen] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-4">气泡组件</h1>
          <p className="text-gray-600 mb-6">各种类型的气泡组件，包括工具提示、弹出菜单等，支持自定义样式和位置。</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">基本气泡</h2>
          <div className="flex items-center gap-4">
            <Popover>
              <PopoverTrigger asChild>
                <Button>点击我</Button>
              </PopoverTrigger>
              <PopoverContent>
                <div className="space-y-2">
                  <h3 className="font-medium">气泡内容</h3>
                  <p className="text-sm text-muted-foreground">这是一个基本的气泡组件，点击按钮可以显示和隐藏。</p>
                </div>
              </PopoverContent>
            </Popover>

            <div
              onMouseEnter={() => setIsHoverOpen(true)}
              onMouseLeave={() => setIsHoverOpen(false)}
              className="inline-block"
            >
              <Button variant="secondary">悬停我</Button>
              {isHoverOpen && (
                <div className="absolute z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md mt-2">
                  <div className="space-y-2">
                    <h3 className="font-medium">悬停气泡</h3>
                    <p className="text-sm text-muted-foreground">这是一个悬停触发的气泡组件。</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">不同位置的气泡</h2>
          <div className="grid grid-cols-2 gap-4">
            <Popover>
              <PopoverTrigger asChild>
                <Button>顶部</Button>
              </PopoverTrigger>
              <PopoverContent side="top">
                <div className="space-y-2">
                  <h3 className="font-medium">顶部气泡</h3>
                  <p className="text-sm text-muted-foreground">这是一个显示在顶部的气泡组件。</p>
                </div>
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger asChild>
                <Button>底部</Button>
              </PopoverTrigger>
              <PopoverContent side="bottom">
                <div className="space-y-2">
                  <h3 className="font-medium">底部气泡</h3>
                  <p className="text-sm text-muted-foreground">这是一个显示在底部的气泡组件。</p>
                </div>
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger asChild>
                <Button>左侧</Button>
              </PopoverTrigger>
              <PopoverContent side="left">
                <div className="space-y-2">
                  <h3 className="font-medium">左侧气泡</h3>
                  <p className="text-sm text-muted-foreground">这是一个显示在左侧的气泡组件。</p>
                </div>
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger asChild>
                <Button>右侧</Button>
              </PopoverTrigger>
              <PopoverContent side="right">
                <div className="space-y-2">
                  <h3 className="font-medium">右侧气泡</h3>
                  <p className="text-sm text-muted-foreground">这是一个显示在右侧的气泡组件。</p>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">带操作的气泡</h2>
          <Popover>
            <PopoverTrigger asChild>
              <Button>显示操作菜单</Button>
            </PopoverTrigger>
            <PopoverContent className="w-56">
              <div className="space-y-2">
                <h3 className="font-medium">操作菜单</h3>
                <div className="border-t pt-2">
                  <button className="w-full text-left px-2 py-1.5 rounded-md hover:bg-muted text-sm">
                    编辑
                  </button>
                  <button className="w-full text-left px-2 py-1.5 rounded-md hover:bg-muted text-sm">
                    复制
                  </button>
                  <button className="w-full text-left px-2 py-1.5 rounded-md hover:bg-muted text-sm">
                    删除
                  </button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
}