'use client';

import { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';

export default function CheckboxesPage() {
  const [checked, setChecked] = useState(false);
  const [fruits, setFruits] = useState<string[]>([]);

  const handleFruitChange = (fruit: string) => {
    setFruits((prev) =>
      prev.includes(fruit) ? prev.filter((f) => f !== fruit) : [...prev, fruit]
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-4">复选框组件</h1>
          <p className="text-gray-600 mb-6">各种类型的复选框组件，包括单选和复选，支持自定义样式和状态。</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">基本复选框</h2>
          <div className="flex items-center gap-2">
            <Checkbox checked={checked} onCheckedChange={(value) => setChecked(value === true)} />
            <label className="text-sm font-medium">同意条款和条件</label>
          </div>
          <p className="text-gray-600 mt-2">状态: {checked ? '选中' : '未选中'}</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">禁用的复选框</h2>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Checkbox checked disabled />
              <label className="text-sm font-medium text-muted-foreground">已选中的禁用复选框</label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox disabled />
              <label className="text-sm font-medium text-muted-foreground">未选中的禁用复选框</label>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">复选框组</h2>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Checkbox
                checked={fruits.includes('apple')}
                onCheckedChange={() => handleFruitChange('apple')}
              />
              <label className="text-sm font-medium">苹果</label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                checked={fruits.includes('banana')}
                onCheckedChange={() => handleFruitChange('banana')}
              />
              <label className="text-sm font-medium">香蕉</label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                checked={fruits.includes('orange')}
                onCheckedChange={() => handleFruitChange('orange')}
              />
              <label className="text-sm font-medium">橙子</label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                checked={fruits.includes('grape')}
                onCheckedChange={() => handleFruitChange('grape')}
              />
              <label className="text-sm font-medium">葡萄</label>
            </div>
          </div>
          <p className="text-gray-600 mt-4">选中的水果: {fruits.length > 0 ? fruits.join(', ') : '无'}</p>
        </div>
      </div>
    </div>
  );
}