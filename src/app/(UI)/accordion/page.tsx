'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function AccordionPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-4">手风琴组件</h1>
          <p className="text-gray-600 mb-6">手风琴组件用于展示可折叠的内容，适合展示分类信息或长内容。</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">基本手风琴</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>什么是手风琴组件？</AccordionTrigger>
              <AccordionContent>
                手风琴组件是一种可折叠的UI组件，允许用户展开或折叠内容区域。它通常用于展示分类信息、FAQ、产品详情等。
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>手风琴组件的优点是什么？</AccordionTrigger>
              <AccordionContent>
                手风琴组件可以节省页面空间，提高内容的可读性，让用户可以只查看感兴趣的内容，同时保持页面的整洁。
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>如何使用手风琴组件？</AccordionTrigger>
              <AccordionContent>
                使用手风琴组件时，需要定义多个折叠项，每个折叠项包含一个触发器和一个内容区域。用户点击触发器可以展开或折叠对应的内容区域。
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">可同时展开的手风琴</h2>
          <Accordion type="multiple" className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>项目 1</AccordionTrigger>
              <AccordionContent>
                这是项目 1 的内容。
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>项目 2</AccordionTrigger>
              <AccordionContent>
                这是项目 2 的内容。
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>项目 3</AccordionTrigger>
              <AccordionContent>
                这是项目 3 的内容。
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
