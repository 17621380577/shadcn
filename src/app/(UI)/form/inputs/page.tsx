'use client';

import { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio';

export default function InputsPage() {
  const [checked, setChecked] = useState(false);
  const [fruits, setFruits] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState('option1');
  const [selectedSize, setSelectedSize] = useState('medium');

  const handleFruitChange = (fruit: string) => {
    setFruits((prev) =>
      prev.includes(fruit) ? prev.filter((f) => f !== fruit) : [...prev, fruit]
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-4">输入组件</h1>
          <p className="text-gray-600 mb-6">各种类型的输入组件，包括复选框和单选框。</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">复选框组件</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-4">基本复选框</h3>
              <div className="flex items-center gap-2">
                <Checkbox checked={checked} onCheckedChange={(value) => setChecked(value === true)} />
                <label className="text-sm font-medium">同意条款和条件</label>
              </div>
              <p className="text-gray-600 mt-2">状态: {checked ? '选中' : '未选中'}</p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">禁用的复选框</h3>
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

            <div>
              <h3 className="text-lg font-medium mb-4">复选框组</h3>
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

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">单选框组件</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-4">基本单选框</h3>
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

            <div>
              <h3 className="text-lg font-medium mb-4">禁用的单选框</h3>
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

            <div>
              <h3 className="text-lg font-medium mb-4">单选框组示例</h3>
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
      </div>
    </div>
  );
}