'use client';

import { useState } from 'react';
import { Tag, TagClose, TagLabel } from '@/components/ui/tag';

export default function TagsPage() {
  const [tags, setTags] = useState(['React', 'TypeScript', 'Next.js', 'Tailwind CSS']);

  const handleRemoveTag = (tagToRemove: string) => {
    setTags((prev) => prev.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-4">标签组件</h1>
          <p className="text-gray-600 mb-6">各种类型的标签组件，包括普通标签、可关闭标签等，支持自定义样式和颜色。</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">基本标签</h2>
          <div className="flex flex-wrap gap-2">
            <Tag>
              <TagLabel>React</TagLabel>
            </Tag>
            <Tag>
              <TagLabel>TypeScript</TagLabel>
            </Tag>
            <Tag>
              <TagLabel>Next.js</TagLabel>
            </Tag>
            <Tag>
              <TagLabel>Tailwind CSS</TagLabel>
            </Tag>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">可关闭的标签</h2>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Tag key={tag}>
                <TagLabel>{tag}</TagLabel>
                <TagClose onClick={() => handleRemoveTag(tag)} />
              </Tag>
            ))}
          </div>
          <p className="text-gray-600 mt-4">点击标签上的关闭按钮可以移除标签。</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">不同样式的标签</h2>
          <div className="flex flex-wrap gap-2">
            <Tag className="bg-blue-100 text-blue-800 border-blue-200">
              <TagLabel>蓝色标签</TagLabel>
            </Tag>
            <Tag className="bg-green-100 text-green-800 border-green-200">
              <TagLabel>绿色标签</TagLabel>
            </Tag>
            <Tag className="bg-red-100 text-red-800 border-red-200">
              <TagLabel>红色标签</TagLabel>
            </Tag>
            <Tag className="bg-yellow-100 text-yellow-800 border-yellow-200">
              <TagLabel>黄色标签</TagLabel>
            </Tag>
            <Tag className="bg-purple-100 text-purple-800 border-purple-200">
              <TagLabel>紫色标签</TagLabel>
            </Tag>
            <Tag className="bg-pink-100 text-pink-800 border-pink-200">
              <TagLabel>粉色标签</TagLabel>
            </Tag>
          </div>
        </div>
      </div>
    </div>
  );
}