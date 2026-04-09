'use client';

import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
export default function ToastsPage() {
  const handleShowDefaultToast = () => {
    toast('这是一个默认提示', {
      position: 'top-center',
    });
  };
  const handleShowSuccessToast = () => {
    toast.success('操作成功', { position: 'top-center' });
  };

  const handleShowErrorToast = () => {
    toast.error('操作失败', { position: 'top-center' });
  };

  const handleShowWarningToast = () => {
    toast.warning('请检查输入信息', { position: 'top-center' });
  };

  const handleShowInfoToast = () => {
    toast.info('这是一条信息提示', { position: 'top-center' });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-4">全局提示组件</h1>
          <p className="text-gray-600 mb-6">
            各种类型的全局提示组件，包括成功、错误、警告和信息提示。
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">基本用法</h2>
          <div className="space-x-4">
            <Button onClick={handleShowDefaultToast} variant="default">
              显示默认提示
            </Button>
            <Button onClick={handleShowSuccessToast} variant="default">
              显示成功提示
            </Button>
            <Button variant="destructive" onClick={handleShowErrorToast}>
              显示错误提示
            </Button>
            <Button variant="default" onClick={handleShowWarningToast}>
              显示警告提示
            </Button>
            <Button variant="default" onClick={handleShowInfoToast}>
              显示信息提示
            </Button>
            <Button
              variant="default"
              onClick={() => {
                toast.promise<{ name: string }>(
                  () =>
                    new Promise((resolve, reject) =>
                      setTimeout(() => resolve({ name: 'Event' }), 2000),
                    ),
                  {
                    loading: 'Loading...',
                    success: (data) => `${data.name} has been created`,
                    error: 'Error',
                    position: 'top-center',
                  },
                );
              }}
            >
              显示加载提示
            </Button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">自定义位置</h2>
          <div className="space-x-4">
            <Button
              onClick={() => {
                toast.info('这是一条信息提示', { position: 'top-left' });
              }}
            >
              左上
            </Button>
            <Button
              onClick={() => {
                toast.info('这是一条信息提示', { position: 'top-center' });
              }}
            >
              上中
            </Button>
            <Button
              onClick={() => {
                toast.info('这是一条信息提示', { position: 'top-right' });
              }}
            >
              右上
            </Button>
            <Button
              onClick={() => {
                toast.info('这是一条信息提示', { position: 'bottom-left' });
              }}
            >
              左下
            </Button>
            <Button
              onClick={() => {
                toast.info('这是一条信息提示', { position: 'bottom-center' });
              }}
            >
              下中
            </Button>
            <Button
              onClick={() => {
                toast.info('这是一条信息提示', { position: 'bottom-right' });
              }}
            >
              右下
            </Button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">自定义时长</h2>
          <p className="text-gray-600 mb-4">
            可以通过 duration 属性自定义提示的显示时长（单位：毫秒）。
          </p>
          <Button
            onClick={() => {
              toast.info('这是一条信息提示', { position: 'top-center', duration: 5000 });
            }}
          >
            显示 5 秒的提示
          </Button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">带标题提示</h2>
          <p className="text-gray-600 mb-4">可以显示带标题的提示，标题为描述信息。</p>
          <Button
            onClick={() => {
              toast('这是标题', { description: '这是一条信息提示', position: 'top-center' });
            }}
          >
            显示带标题提示
          </Button>
        </div>
      </div>
    </div>
  );
}
