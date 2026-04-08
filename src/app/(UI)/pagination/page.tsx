'use client';

import { useState } from 'react';
import { Pagination } from '@/components/ui/pagination';

export default function PaginationPage() {
  const [currentPage1, setCurrentPage1] = useState(1);
  const [currentPage2, setCurrentPage2] = useState(1);
  const [currentPage3, setCurrentPage3] = useState(1);
  const [currentPage4, setCurrentPage4] = useState(1);
  const totalPages = 10;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-4">分页组件</h1>
          <p className="text-gray-600 mb-6">各种类型的分页组件，支持自定义总页数、当前页码和显示的页码数量。</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">基本分页</h2>
          <div className="flex justify-center">
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage1}
              onPageChange={setCurrentPage1}
            />
          </div>
          <p className="text-center text-gray-600 mt-4">当前页码: {currentPage1}</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">带不同兄弟页码数量的分页</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-medium mb-2">兄弟页码数量: 0</h3>
              <div className="flex justify-center">
                <Pagination
                  totalPages={totalPages}
                  currentPage={currentPage2}
                  onPageChange={setCurrentPage2}
                  siblings={0}
                />
              </div>
              <p className="text-center text-gray-600 mt-2">当前页码: {currentPage2}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-2">兄弟页码数量: 1 (默认)</h3>
              <div className="flex justify-center">
                <Pagination
                  totalPages={totalPages}
                  currentPage={currentPage3}
                  onPageChange={setCurrentPage3}
                  siblings={1}
                />
              </div>
              <p className="text-center text-gray-600 mt-2">当前页码: {currentPage3}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-2">兄弟页码数量: 2</h3>
              <div className="flex justify-center">
                <Pagination
                  totalPages={totalPages}
                  currentPage={currentPage4}
                  onPageChange={setCurrentPage4}
                  siblings={2}
                />
              </div>
              <p className="text-center text-gray-600 mt-2">当前页码: {currentPage4}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}