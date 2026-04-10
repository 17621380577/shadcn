import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { AlertCircle, Info, CheckCircle, XCircle } from 'lucide-react';

export default function DialogPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">对话框组件</h1>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">基本对话框</h2>
        <div className="flex flex-wrap gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button>基本对话框</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>对话框标题</DialogTitle>
              </DialogHeader>
              <div className="py-4 px-4">
                <p>对话框内容：可以在这里放置表单、警告信息或其他需要用户注意的内容。</p>
              </div>
              <DialogFooter>
                <Button variant="outline">取消</Button>
                <Button>确认</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">确认对话框</h2>
        <div className="flex flex-wrap gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="destructive">删除确认</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <XCircle className="h-5 w-5 text-red-500" />
                  确认删除
                </DialogTitle>
              </DialogHeader>
              <div className="py-4">
                <p>删除后，此项目将被永久删除，无法恢复。请谨慎操作。</p>
              </div>
              <DialogFooter>
                <Button variant="outline">取消</Button>
                <Button variant="destructive">确认删除</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">警告对话框</h2>
        <div className="flex flex-wrap gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="secondary">警告信息</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-yellow-500" />
                  警告信息
                </DialogTitle>
              </DialogHeader>
              <div className="py-4">
                <p>此操作将覆盖现有的数据，请确保您已经备份了重要信息。</p>
              </div>
              <DialogFooter>
                <Button variant="outline">取消</Button>
                <Button>继续操作</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">成功对话框</h2>
        <div className="flex flex-wrap gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="default">操作成功</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  操作成功
                </DialogTitle>
              </DialogHeader>
              <div className="py-4">
                <p>您的请求已处理完毕，所有更改已保存。</p>
              </div>
              <DialogFooter>
                <Button>确定</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}