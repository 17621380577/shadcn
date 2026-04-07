import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';

import {
  Modal,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTrigger,
} from '@/components/ui/modal';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold">Welcome to Shadcn Project</h1>
      <div className="flex flex-wrap gap-4 mt-4">
        <h3 className="w-full text-lg font-semibold">按钮变体</h3>
        <div className="flex flex-col items-center gap-2">
          <Button variant="default">默认按钮</Button>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Button variant="destructive">危险按钮</Button>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Button variant="outline">轮廓按钮</Button>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Button variant="secondary">次要按钮</Button>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Button variant="ghost">幽灵按钮</Button>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Button variant="link">链接按钮</Button>
        </div>
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
        <Button disabled>禁用按钮</Button>
      </div>

      <div className="flex flex-wrap gap-4 mt-6">
        <h3 className="w-full text-lg font-semibold">按钮尺寸</h3>
        <div className="flex flex-col items-center gap-2">
          <Button size="sm">小按钮</Button>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Button size="md">中按钮</Button>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Button size="lg">大按钮</Button>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold">抽屉组件</h3>
        <Drawer>
          <DrawerTrigger asChild>
            <Button>打开抽屉</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>抽屉标题</DrawerTitle>
              <DrawerDescription>这是一个抽屉组件，用于显示额外的内容。</DrawerDescription>
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

      <div className="mt-8">
        <h3 className="text-lg font-semibold">弹窗组件</h3>
        <Modal>
          <ModalTrigger asChild>
            <Button>打开弹窗</Button>
          </ModalTrigger>
          <ModalContent>
            <ModalHeader>
              <ModalTitle>弹窗标题</ModalTitle>
              <ModalDescription>这是一个弹窗组件，用于显示重要信息。</ModalDescription>
            </ModalHeader>
            <div className="py-4">
              <p>弹窗内容：可以在这里放置表单、警告信息或其他需要用户注意的内容。</p>
              <div className="mt-4">
                <p>示例：确认删除操作、填写表单、显示详细信息等。</p>
              </div>
            </div>
            <ModalFooter>
              <Button variant="outline">取消</Button>
              <Button>确认</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold">下拉菜单</h3>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button>打开下拉菜单</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>文件操作</DropdownMenuItem>
            <DropdownMenuItem>新建文件</DropdownMenuItem>
            <DropdownMenuItem>打开文件</DropdownMenuItem>
            <DropdownMenuItem>保存文件</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>编辑操作</DropdownMenuItem>
            <DropdownMenuItem>复制</DropdownMenuItem>
            <DropdownMenuItem>剪切</DropdownMenuItem>
            <DropdownMenuItem>粘贴</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>系统操作</DropdownMenuItem>
            <DropdownMenuItem>设置</DropdownMenuItem>
            <DropdownMenuItem>帮助</DropdownMenuItem>
            <DropdownMenuItem>关于</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
