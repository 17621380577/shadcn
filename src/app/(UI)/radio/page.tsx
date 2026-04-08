'use client';

import { useState } from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio';

export default function RadiosPage() {
  const [selectedOption, setSelectedOption] = useState('option1');
  const [selectedSize, setSelectedSize] = useState('medium');

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-4">单选框组件</h1>
          <p className="text-gray-600 mb-6">各种类型的单选框组件，支持自定义样式和状态，用于从多个选项中选择一个。</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">基本单选框</h2>
          <RadioGroup
            value={selectedOption}
            onValueChange={setSelectedOption}
            className="space-y-2"
          >
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option1" id="option1" />
              <label htmlFor="option1" className="text-sm font-medium">选项 1</label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option2" id="option2" />
              <label htmlFor="option2" className="text-sm font-medium">选项 2</label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option3" id="option3" />
              <label htmlFor="option3" className="text-sm font-medium">选项 3</label>
            </div>
          </RadioGroup>
          <p className="text-gray-600 mt-4">选中的选项: {selectedOption}</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">禁用的单选框</h2>
          <RadioGroup defaultValue="option1" className="space-y-2">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option1" id="disabled1" disabled />
              <label htmlFor="disabled1" className="text-sm font-medium text-muted-foreground">禁用的选项 1</label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option2" id="disabled2" />
              <label htmlFor="disabled2" className="text-sm font-medium">选项 2</label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option3" id="disabled3" />
              <label htmlFor="disabled3" className="text-sm font-medium">选项 3</label>
            </div>
          </RadioGroup>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">单选框组示例</h2>
          <p className="text-gray-600 mb-4">选择你的尺码:</p>
          <RadioGroup
            value={selectedSize}
            onValueChange={setSelectedSize}
            className="flex gap-6"
          >
            <div className="flex items-center gap-2">
              <RadioGroupItem value="small" id="size-small" />
              <label htmlFor="size-small" className="text-sm font-medium">S</label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="medium" id="size-medium" />
              <label htmlFor="size-medium" className="text-sm font-medium">M</label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="large" id="size-large" />
              <label htmlFor="size-large" className="text-sm font-medium">L</label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="xlarge" id="size-xl" />
              <label htmlFor="size-xl" className="text-sm font-medium">XL</label>
            </div>
          </RadioGroup>
          <p className="text-gray-600 mt-4">选中的尺码: {selectedSize}</p>
        </div>
      </div>
    </div>
  );
}