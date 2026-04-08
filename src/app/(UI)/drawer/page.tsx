import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { ArrowLeft, Menu, X } from 'lucide-react';

export default function DrawersPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-2 mb-8">
        <Button variant="ghost" asChild>
          <a href="/">
            <ArrowLeft className="h-4 w-4 mr-2" />
            返回导航
          </a>
        </Button>
      </div>
      
      <h1 className="text-3xl font-bold mb-6">抽屉组件</h1>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">基本抽屉</h2>
        <div className="flex flex-wrap gap-4">
          <Drawer>
            <DrawerTrigger asChild>
              <Button>打开抽屉</Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>抽屉标题</DrawerTitle>
                <DrawerDescription>这是一个基本的抽屉组件，用于显示额外的内容。</DrawerDescription>
              </DrawerHeader>
              <div className="py-4">
                <p>抽屉内容：可以在这里放置表单、列表或其他复杂内容。</p>
                <div className="mt-4">
                  <Button variant="outline" className="mr-2">
                    取消
                  </Button>
                  <Button>确认</Button>
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">左侧抽屉</h2>
        <div className="flex gap-4">
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="outline">左侧抽屉</Button>
            </DrawerTrigger>
            <DrawerContent className="sm:max-w-xs left-0">
              <DrawerHeader>
                <DrawerTitle>导航菜单</DrawerTitle>
                <DrawerDescription>通过左侧抽屉访问导航菜单</DrawerDescription>
              </DrawerHeader>
              <div className="py-4">
                <div className="flex flex-col gap-2">
                  <Button variant="ghost" className="justify-start">
                    <Menu className="h-4 w-4 mr-2" />
                    首页
                  </Button>
                  <Button variant="ghost" className="justify-start">
                    <Menu className="h-4 w-4 mr-2" />
                    产品
                  </Button>
                  <Button variant="ghost" className="justify-start">
                    <Menu className="h-4 w-4 mr-2" />
                    服务
                  </Button>
                  <Button variant="ghost" className="justify-start">
                    <Menu className="h-4 w-4 mr-2" />
                    关于我们
                  </Button>
                  <Button variant="ghost" className="justify-start">
                    <Menu className="h-4 w-4 mr-2" />
                    联系我们
                  </Button>
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">右侧抽屉</h2>
        <div className="flex flex-wrap gap-4">
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="secondary">右侧抽屉</Button>
            </DrawerTrigger>
            <DrawerContent className="sm:max-w-xs">
              <DrawerHeader>
                <DrawerTitle>用户信息</DrawerTitle>
                <DrawerDescription>查看和编辑用户信息</DrawerDescription>
              </DrawerHeader>
              <div className="py-4">
                <div className="flex flex-col gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">用户名</label>
                    <input type="text" className="w-full px-3 py-2 border rounded-md" placeholder="请输入用户名" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">邮箱</label>
                    <input type="email" className="w-full px-3 py-2 border rounded-md" placeholder="请输入邮箱" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">密码</label>
                    <input type="password" className="w-full px-3 py-2 border rounded-md" placeholder="请输入密码" />
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button variant="outline" className="flex-1">
                      取消
                    </Button>
                    <Button className="flex-1">
                      保存
                    </Button>
                  </div>
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">底部抽屉</h2>
        <div className="flex flex-wrap gap-4">
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="destructive">底部抽屉</Button>
            </DrawerTrigger>
            <DrawerContent className="fixed inset-x-0 bottom-0 top-auto border-t border-l-0 h-[70vh] animate-in slide-in-from-bottom">
              <DrawerHeader>
                <DrawerTitle>操作选项</DrawerTitle>
                <DrawerDescription>选择您要执行的操作</DrawerDescription>
              </DrawerHeader>
              <div className="py-4">
                <div className="flex flex-col gap-2">
                  <Button variant="ghost" className="justify-start">
                    <X className="h-4 w-4 mr-2" />
                    删除
                  </Button>
                  <Button variant="ghost" className="justify-start">
                    <X className="h-4 w-4 mr-2" />
                    复制
                  </Button>
                  <Button variant="ghost" className="justify-start">
                    <X className="h-4 w-4 mr-2" />
                    移动
                  </Button>
                  <Button variant="ghost" className="justify-start">
                    <X className="h-4 w-4 mr-2" />
                    重命名
                  </Button>
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </div>
  );
}