'use client';

import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/toast-context';

export default function ToastsPage() {
  const { showToast } = useToast();

  const handleShowSuccessToast = () => {
    showToast({
      type: 'success',
      title: '成功',
      description: '操作已成功完成',
    });
  };

  const handleShowErrorToast = () => {
    showToast({
      type: 'error',
      title: '错误',
      description: '操作失败，请重试',
    });
  };

  const handleShowWarningToast = () => {
    showToast({
      type: 'warning',
      title: '警告',
      description: '请检查输入信息',
    });
  };

  const handleShowInfoToast = () => {
    showToast({
      type: 'info',
      title: '信息',
      description: '这是一条信息提示',
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-4">全局提示组件</h1>
          <p className="text-gray-600 mb-6">各种类型的全局提示组件，包括成功、错误、警告和信息提示。</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">基本用法</h2>
          <div className="space-x-4">
            <Button onClick={handleShowSuccessToast}>显示成功提示</Button>
            <Button variant="destructive" onClick={handleShowErrorToast}>显示错误提示</Button>
            <Button variant="warning" onClick={handleShowWarningToast}>显示警告提示</Button>
            <Button variant="secondary" onClick={handleShowInfoToast}>显示信息提示</Button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">自定义时长</h2>
          <p className="text-gray-600 mb-4">可以通过 duration 属性自定义提示的显示时长（单位：毫秒）。</p>
          <Button
            onClick={() => {
              showToast({
                type: 'info',
                title: '自定义时长',
                description: '这个提示将显示 5 秒',
                duration: 5000,
              });
            }}
          >
            显示 5 秒的提示
          </Button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">无标题提示</h2>
          <p className="text-gray-600 mb-4">可以只显示描述信息，不显示标题。</p>
          <Button
            onClick={() => {
              showToast({
                type: 'info',
                description: '这是一个无标题的提示',
              });
            }}
          >
            显示无标题提示
          </Button>
        </div>
      </div>
    </div>
  );
}