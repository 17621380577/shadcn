'use client';

import { Input } from '@/components/ui/input';
import { Search, Eye, EyeOff, Calendar, User, Mail, Lock, Phone, CreditCard } from 'lucide-react';
import { useState } from 'react';

export default function InputsPage() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">输入框组件</h1>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">基本输入框</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">普通输入框</label>
            <Input placeholder="请输入内容" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">禁用的输入框</label>
            <Input placeholder="禁用状态" disabled />
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">带图标的输入框</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">搜索输入框</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input placeholder="搜索..." className="pl-10" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">用户输入框</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input placeholder="用户名" className="pl-10" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">邮箱输入框</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input type="email" placeholder="邮箱地址" className="pl-10" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">电话输入框</label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input type="tel" placeholder="电话号码" className="pl-10" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">特殊输入框</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">密码输入框</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input 
                type={passwordVisible ? "text" : "password"} 
                placeholder="请输入密码" 
                className="pl-10 pr-10"
              />
              <button 
                type="button" 
                className="absolute right-3 top-1/2 transform -translate-y-1/2" 
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? (
                  <EyeOff className="h-4 w-4 text-gray-400" />
                ) : (
                  <Eye className="h-4 w-4 text-gray-400" />
                )}
              </button>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">信用卡输入框</label>
            <div className="relative">
              <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input placeholder="信用卡号" className="pl-10" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">日期输入框</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input type="date" className="pl-10" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">数字输入框</label>
            <Input type="number" placeholder="请输入数字" />
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">输入框验证</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">必填输入框</label>
            <Input placeholder="请输入内容" required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">最小长度输入框</label>
            <Input placeholder="至少6个字符" minLength={6} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">最大长度输入框</label>
            <Input placeholder="最多20个字符" maxLength={20} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">正则表达式输入框</label>
            <Input placeholder="请输入数字" pattern="[0-9]+" />
          </div>
        </div>
      </div>
    </div>
  );
}