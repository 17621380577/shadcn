import { Button } from '@/components/ui/button';
import {
  Home as HomeIcon,
  Square,
  LayoutGrid,
  Type,
  AlertCircle,
  PanelLeft,
  ChevronLeft,
  Table,
  Bell,
  BarChart2,
  CheckSquare,
  Radio,
  MessageCircle,
  Tag,
  Calendar,
  FileText,

  FileSearch,
} from 'lucide-react';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-2 mb-8">
        <HomeIcon className="h-8 w-8" />
        <h1 className="text-3xl font-bold">组件库导航</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 按钮组件 */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-100 rounded-full">
              <Square className="h-6 w-6 text-blue-600" />
            </div>
            <h2 className="text-xl font-semibold">按钮组件</h2>
          </div>
          <p className="text-gray-600 mb-4">各种类型和状态的按钮组件，包括默认、危险、轮廓、次要、幽灵和链接按钮。</p>
          <Button asChild>
            <a href="/button">查看组件</a>
          </Button>
        </div>
        
        {/* 图标组件 */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-purple-100 rounded-full">
              <LayoutGrid className="h-6 w-6 text-purple-600" />
            </div>
            <h2 className="text-xl font-semibold">图标组件</h2>
          </div>
          <p className="text-gray-600 mb-4">丰富的 Lucide 图标库，包括导航、文件、动作、状态、工具、媒体等各种类别的图标。</p>
          <Button asChild>
            <a href="/icons">查看组件</a>
          </Button>
        </div>
        
        {/* 输入框组件 */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-green-100 rounded-full">
              <Type className="h-6 w-6 text-green-600" />
            </div>
            <h2 className="text-xl font-semibold">输入框组件</h2>
          </div>
          <p className="text-gray-600 mb-4">各种类型的输入框组件，包括普通输入框、带图标输入框、禁用输入框、密码输入框等。</p>
          <Button asChild>
            <a href="/input">查看组件</a>
          </Button>
        </div>
        
        {/* 弹窗组件 */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-yellow-100 rounded-full">
              <AlertCircle className="h-6 w-6 text-yellow-600" />
            </div>
            <h2 className="text-xl font-semibold">弹窗组件</h2>
          </div>
          <p className="text-gray-600 mb-4">各种类型的弹窗组件，包括确认弹窗、警告弹窗、信息弹窗等，支持不同的大小和样式。</p>
          <Button asChild>
            <a href="/modal">查看组件</a>
          </Button>
        </div>
        
        {/* 抽屉组件 */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-red-100 rounded-full">
              <PanelLeft className="h-6 w-6 text-red-600" />
            </div>
            <h2 className="text-xl font-semibold">抽屉组件</h2>
          </div>
          <p className="text-gray-600 mb-4">各种类型的抽屉组件，包括左侧抽屉、右侧抽屉、顶部抽屉和底部抽屉，支持不同的大小和样式。</p>
          <Button asChild>
            <a href="/drawer">查看组件</a>
          </Button>
        </div>
        
        {/* 表格组件 */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-purple-100 rounded-full">
              <Table className="h-6 w-6 text-purple-600" />
            </div>
            <h2 className="text-xl font-semibold">表格组件</h2>
          </div>
          <p className="text-gray-600 mb-4">各种类型的表格组件，包括基本表格、带分页的表格、带排序的表格等，支持自定义样式和功能。</p>
          <Button asChild>
            <a href="/table">查看组件</a>
          </Button>
        </div>
        
        {/* 全局提示组件 */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-100 rounded-full">
              <Bell className="h-6 w-6 text-blue-600" />
            </div>
            <h2 className="text-xl font-semibold">全局提示组件</h2>
          </div>
          <p className="text-gray-600 mb-4">各种类型的全局提示组件，包括成功、错误、警告和信息提示，支持自动消失和手动关闭。</p>
          <Button asChild>
            <a href="/toast">查看组件</a>
          </Button>
        </div>
        
        {/* 进度条组件 */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-green-100 rounded-full">
              <BarChart2 className="h-6 w-6 text-green-600" />
            </div>
            <h2 className="text-xl font-semibold">进度条组件</h2>
          </div>
          <p className="text-gray-600 mb-4">各种类型的进度条组件，包括线性进度条、环形进度条等，支持自定义样式和进度值。</p>
          <Button asChild>
            <a href="/progress">查看组件</a>
          </Button>
        </div>
        
        {/* 输入组件 */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-100 rounded-full">
              <Type className="h-6 w-6 text-blue-600" />
            </div>
            <h2 className="text-xl font-semibold">输入组件</h2>
          </div>
          <p className="text-gray-600 mb-4">各种类型的输入组件，包括复选框和单选框，支持自定义样式和状态。</p>
          <Button asChild>
            <a href="/input">查看组件</a>
          </Button>
        </div>
        
        {/* 气泡组件 */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-indigo-100 rounded-full">
              <MessageCircle className="h-6 w-6 text-indigo-600" />
            </div>
            <h2 className="text-xl font-semibold">气泡组件</h2>
          </div>
          <p className="text-gray-600 mb-4">各种类型的气泡组件，包括工具提示、弹出菜单等，支持自定义样式和位置。</p>
          <Button asChild>
            <a href="/popover">查看组件</a>
          </Button>
        </div>
        
        {/* 标签组件 */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-orange-100 rounded-full">
              <Tag className="h-6 w-6 text-orange-600" />
            </div>
            <h2 className="text-xl font-semibold">标签组件</h2>
          </div>
          <p className="text-gray-600 mb-4">各种类型的标签组件，包括普通标签、可关闭标签等，支持自定义样式和颜色。</p>
          <Button asChild>
            <a href="/tag">查看组件</a>
          </Button>
        </div>
        
        {/* 日历组件 */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-teal-100 rounded-full">
              <Calendar className="h-6 w-6 text-teal-600" />
            </div>
            <h2 className="text-xl font-semibold">日历组件</h2>
          </div>
          <p className="text-gray-600 mb-4">各种类型的日历组件，包括月历、周历等，支持日期选择和范围选择。</p>
          <Button asChild>
            <a href="/calendar">查看组件</a>
          </Button>
        </div>
        
        {/* 表单组件 */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-violet-100 rounded-full">
              <FileText className="h-6 w-6 text-violet-600" />
            </div>
            <h2 className="text-xl font-semibold">表单组件</h2>
          </div>
          <p className="text-gray-600 mb-4">各种类型的表单组件，包括输入框、选择器、日期选择器等，支持表单验证和提交。</p>
          <Button asChild>
            <a href="/form">查看组件</a>
          </Button>
        </div>
        
        {/* 分页组件 */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-cyan-100 rounded-full">
              <ChevronLeft className="h-6 w-6 text-cyan-600" />
            </div>
            <h2 className="text-xl font-semibold">分页组件</h2>
          </div>
          <p className="text-gray-600 mb-4">各种类型的分页组件，支持自定义总页数、当前页码和显示的页码数量。</p>
          <Button asChild>
            <a href="/pagination">查看组件</a>
          </Button>
        </div>
        
        {/* 空状态组件 */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-gray-100 rounded-full">
              <FileSearch className="h-6 w-6 text-gray-600" />
            </div>
            <h2 className="text-xl font-semibold">空状态组件</h2>
          </div>
          <p className="text-gray-600 mb-4">各种类型的空状态组件，用于在没有数据或内容时显示的占位界面。</p>
          <Button asChild>
            <a href="/empty">查看组件</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
