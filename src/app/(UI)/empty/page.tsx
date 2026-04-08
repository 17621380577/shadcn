import { Button } from '@/components/ui/button';
import { Empty } from '@/components/ui/empty';
import { Search, ShoppingCart, Inbox, FileText, Users } from 'lucide-react';

export default function EmptyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-4">空状态组件</h1>
          <p className="text-gray-600 mb-6">各种类型的空状态组件，用于在没有数据或内容时显示的占位界面。</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">搜索空状态</h2>
            <Empty
              icon={<Search className="h-16 w-16 text-muted-foreground" />}
              title="没有找到结果"
              description="尝试使用不同的关键词或过滤条件"
              action={
                <Button>清除筛选</Button>
              }
            />
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">购物车空状态</h2>
            <Empty
              icon={<ShoppingCart className="h-16 w-16 text-muted-foreground" />}
              title="购物车是空的"
              description="添加一些商品到购物车吧"
              action={
                <Button>浏览商品</Button>
              }
            />
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">收件箱空状态</h2>
            <Empty
              icon={<Inbox className="h-16 w-16 text-muted-foreground" />}
              title="收件箱是空的"
              description="没有新的消息"
            />
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">文档空状态</h2>
            <Empty
              icon={<FileText className="h-16 w-16 text-muted-foreground" />}
              title="没有文档"
              description="创建或上传文档"
              action={
                <Button>创建文档</Button>
              }
            />
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">用户空状态</h2>
            <Empty
              icon={<Users className="h-16 w-16 text-muted-foreground" />}
              title="没有用户"
              description="邀请用户加入"
              action={
                <Button>邀请用户</Button>
              }
            />
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">自定义空状态</h2>
            <Empty
              title="自定义空状态"
              description="这是一个自定义的空状态组件，你可以根据需要自定义图标、标题、描述和操作按钮"
              action={
                <div className="flex gap-2">
                  <Button>操作 1</Button>
                  <Button variant="secondary">操作 2</Button>
                </div>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}