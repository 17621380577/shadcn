'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSearch,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function SelectPage() {
  const [selected, setSelected] = useState('');
  const [selectedDisabled, setSelectedDisabled] = useState('option1');
  const [selectedGroup, setSelectedGroup] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [filteredOptions, setFilteredOptions] = useState([
    '选项 1', '选项 2', '选项 3', '选项 4', '选项 5',
    '选项 6', '选项 7', '选项 8', '选项 9', '选项 10'
  ]);

  const cities = {
    china: ['北京', '上海', '广州', '深圳'],
    usa: ['纽约', '洛杉矶', '芝加哥', '迈阿密'],
    japan: ['东京', '大阪', '京都', '福冈']
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-4">选择框组件</h1>
          <p className="text-gray-600 mb-6">各种类型的选择框组件，包括基本选择、禁用状态、分组选择等。</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">基本选择框</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">请选择一个选项</label>
              <Select>
                <SelectTrigger className="w-64">
                  <SelectValue placeholder="请选择" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option1">选项 1</SelectItem>
                  <SelectItem value="option2">选项 2</SelectItem>
                  <SelectItem value="option3">选项 3</SelectItem>
                  <SelectItem value="option4">选项 4</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">禁用的选择框</label>
              <Select value={selectedDisabled} onValueChange={setSelectedDisabled} disabled>
                <SelectTrigger className="w-64">
                  <SelectValue placeholder="请选择" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option1">选项 1</SelectItem>
                  <SelectItem value="option2">选项 2</SelectItem>
                  <SelectItem value="option3">选项 3</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">带分组的选择框</label>
              <Select>
                <SelectTrigger className="w-64">
                  <SelectValue placeholder="请选择" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>水果</SelectLabel>
                    <SelectItem value="apple">苹果</SelectItem>
                    <SelectItem value="banana">香蕉</SelectItem>
                    <SelectItem value="orange">橙子</SelectItem>
                  </SelectGroup>
                  <SelectGroup>
                    <SelectLabel>蔬菜</SelectLabel>
                    <SelectItem value="tomato">西红柿</SelectItem>
                    <SelectItem value="potato">土豆</SelectItem>
                    <SelectItem value="carrot">胡萝卜</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">二级下拉选择框</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">选择国家和城市</label>
              <div className="flex gap-4">
                <Select value={selectedCountry} onValueChange={(value) => {
                  setSelectedCountry(value);
                  setSelectedCity('');
                }}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="请选择国家" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="china">中国</SelectItem>
                    <SelectItem value="usa">美国</SelectItem>
                    <SelectItem value="japan">日本</SelectItem>
                  </SelectContent>
                </Select>
                <Select disabled={!selectedCountry}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="请选择城市" />
                  </SelectTrigger>
                  <SelectContent>
                    {selectedCountry && cities[selectedCountry as keyof typeof cities].map(city => (
                      <SelectItem key={city} value={city}>{city}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">带搜索的选择框</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">搜索选项</label>
              <Select>
                <SelectTrigger className="w-64">
                  <SelectValue placeholder="请选择" />
                </SelectTrigger>
                <SelectContent>
                  <SelectSearch placeholder="搜索..." />
                  {filteredOptions.map((option: string, index: number) => (
                    <SelectItem key={index} value={option}>{option}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
