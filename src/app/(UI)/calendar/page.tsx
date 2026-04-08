'use client';

import { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';

export default function CalendarsPage() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [minDate] = useState(new Date(2024, 0, 1));
  const [maxDate] = useState(new Date(2024, 11, 31));

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-4">日历组件</h1>
          <p className="text-gray-600 mb-6">各种类型的日历组件，包括月历、周历等，支持日期选择和范围选择。</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">基本日历</h2>
          <div className="max-w-md">
            <Calendar
              value={selectedDate}
              onChange={setSelectedDate}
            />
          </div>
          <p className="text-gray-600 mt-4">选中的日期: {selectedDate.toDateString()}</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">带日期范围的日历</h2>
          <p className="text-gray-600 mb-4">只能选择 2024 年的日期:</p>
          <div className="max-w-md">
            <Calendar
              value={selectedDate}
              onChange={setSelectedDate}
              minDate={minDate}
              maxDate={maxDate}
            />
          </div>
          <p className="text-gray-600 mt-4">选中的日期: {selectedDate.toDateString()}</p>
          <p className="text-gray-600 mt-2">日期范围: {minDate.toDateString()} 至 {maxDate.toDateString()}</p>
        </div>
      </div>
    </div>
  );
}