import { Button } from '@/components/ui/button';
import {
  Modal,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTrigger,
} from '@/components/ui/modal';
import { AlertCircle, Info, CheckCircle, XCircle } from 'lucide-react';

export default function ModalsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">弹窗组件</h1>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">基本弹窗</h2>
        <div className="flex flex-wrap gap-4">
          <Modal>
            <ModalTrigger asChild>
              <Button>基本弹窗</Button>
            </ModalTrigger>
            <ModalContent>
              <ModalHeader>
                <ModalTitle>弹窗标题</ModalTitle>
              </ModalHeader>
              <div className="py-4 px-4">
                <p>弹窗内容：可以在这里放置表单、警告信息或其他需要用户注意的内容。</p>
              </div>
              <ModalFooter>
                <Button variant="outline">取消</Button>
                <Button>确认</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">确认弹窗</h2>
        <div className="flex flex-wrap gap-4">
          <Modal>
            <ModalTrigger asChild>
              <Button variant="destructive">删除确认</Button>
            </ModalTrigger>
            <ModalContent>
              <ModalHeader>
                <ModalTitle className="flex items-center gap-2">
                  <XCircle className="h-5 w-5 text-red-500" />
                  确认删除
                </ModalTitle>
              </ModalHeader>
              <div className="py-4">
                <p>删除后，此项目将被永久删除，无法恢复。请谨慎操作。</p>
              </div>
              <ModalFooter>
                <Button variant="outline">取消</Button>
                <Button variant="destructive">确认删除</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">警告弹窗</h2>
        <div className="flex flex-wrap gap-4">
          <Modal>
            <ModalTrigger asChild>
              <Button variant="secondary">警告信息</Button>
            </ModalTrigger>
            <ModalContent>
              <ModalHeader>
                <ModalTitle className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-yellow-500" />
                  警告信息
                </ModalTitle>
              </ModalHeader>
              <div className="py-4">
                <p>此操作将覆盖现有的数据，请确保您已经备份了重要信息。</p>
              </div>
              <ModalFooter>
                <Button variant="outline">取消</Button>
                <Button>继续操作</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">信息弹窗</h2>
        <div className="flex flex-wrap gap-4">
          <Modal>
            <ModalTrigger asChild>
              <Button variant="outline">信息提示</Button>
            </ModalTrigger>
            <ModalContent>
              <ModalHeader>
                <ModalTitle className="flex items-center gap-2">
                  <Info className="h-5 w-5 text-blue-500" />
                  信息提示
                </ModalTitle>
                <ModalDescription>这是一个信息弹窗，用于显示重要的通知。</ModalDescription>
              </ModalHeader>
              <div className="py-4">
                <p>您的操作已成功完成，相关信息已保存。</p>
              </div>
              <ModalFooter>
                <Button>确定</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">成功弹窗</h2>
        <div className="flex flex-wrap gap-4">
          <Modal>
            <ModalTrigger asChild>
              <Button variant="default">操作成功</Button>
            </ModalTrigger>
            <ModalContent>
              <ModalHeader>
                <ModalTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  操作成功
                </ModalTitle>
              </ModalHeader>
              <div className="py-4">
                <p>您的请求已处理完毕，所有更改已保存。</p>
              </div>
              <ModalFooter>
                <Button>确定</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </div>
      </div>
    </div>
  );
}