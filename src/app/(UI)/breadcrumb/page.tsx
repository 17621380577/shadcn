'use client';

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage } from '@/components/ui/breadcrumb';

export default function BreadcrumbComp() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-4">面包屑组件</h1>
          <p className="text-gray-600 mb-6">面包屑组件用于显示当前页面在网站层次结构中的位置，帮助用户导航。</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">基本面包屑</h2>
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">首页</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">产品</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">电子产品</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbPage>手机</BreadcrumbPage>
            </BreadcrumbItem>
          </Breadcrumb>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">带自定义分隔符的面包屑</h2>
          <Breadcrumb separator="">
            <BreadcrumbItem>
              <BreadcrumbLink href="#">首页</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <span className="mx-2">→</span>
              <BreadcrumbLink href="#">产品</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <span className="mx-2">→</span>
              <BreadcrumbLink href="#">电子产品</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <span className="mx-2">→</span>
              <BreadcrumbPage>手机</BreadcrumbPage>
            </BreadcrumbItem>
          </Breadcrumb>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">带图标分隔符的面包屑</h2>
          <Breadcrumb separator="/">
            <BreadcrumbItem>
              <BreadcrumbLink href="#">首页</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">博客</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">技术</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbPage>React 教程</BreadcrumbPage>
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
}
