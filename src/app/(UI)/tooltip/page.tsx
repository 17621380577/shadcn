'use client';

import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export default function TooltipPage() {
  return (
    <TooltipProvider>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-3xl font-bold mb-4">工具提示组件</h1>
            <p className="text-gray-600 mb-6">各种类型的工具提示组件，包括基本提示、不同位置的提示等。</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">基本工具提示</h2>
            <div className="flex items-center gap-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button>悬停我</Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>这是一个基本的工具提示。</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-10 flex items-center">
            <h2 className="text-xl font-semibold">不同位置的工具提示</h2>
            <div className="flex flex-1 flex-wrap gap-4 justify-center">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button>左侧</Button>
                </TooltipTrigger>
                <TooltipContent side="left">
                  <p>这是一个显示在左侧的工具提示。</p>
                </TooltipContent>
              </Tooltip>
              
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button>顶部</Button>
                </TooltipTrigger>
                <TooltipContent side="top">
                  <p>这是一个显示在顶部的工具提示。</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button>底部</Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <p>这是一个显示在底部的工具提示。</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button>右侧</Button>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>这是一个显示在右侧的工具提示。</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">带样式的工具提示</h2>
            <div className="flex items-center gap-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="destructive">危险操作</Button>
                </TooltipTrigger>
                <TooltipContent className="bg-red-500 text-white">
                  <p>这是一个危险操作，请谨慎执行。</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">信息提示</Button>
                </TooltipTrigger>
                <TooltipContent className="bg-blue-500 text-white">
                  <p>这是一个信息提示。</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}