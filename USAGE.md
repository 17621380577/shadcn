# Shadcn 组件库使用说明

## 项目结构

```
shadcn-project/
├── src/
│   ├── app/              # App Router 目录
│   │   ├── globals.css   # 全局样式
│   │   ├── layout.tsx    # 根布局
│   │   └── page.tsx      # 主页
│   ├── components/       # 组件目录
│   │   └── ui/           # UI 组件
│   │       ├── button.tsx        # 按钮组件
│   │       ├── dropdown-menu.tsx # 下拉菜单组件
│   │       ├── drawer.tsx        # 抽屉组件
│   │       └── modal.tsx         # 弹窗组件
│   └── lib/              # 工具函数
│       └── utils.ts      # 工具函数
├── tailwind.config.js    # Tailwind CSS 配置
├── postcss.config.js     # PostCSS 配置
├── tsconfig.json         # TypeScript 配置
└── package.json          # 项目配置
```

## 安装依赖

```bash
npm install
```

## 运行项目

```bash
npm run dev
```

## 组件使用说明

### 1. 按钮组件 (Button)

#### 导入

```tsx
import { Button } from "@/components/ui/button";
```

#### 使用示例

```tsx
// 默认按钮
<Button>默认按钮</Button>

// 不同变体
<Button variant="destructive">危险按钮</Button>
<Button variant="outline">轮廓按钮</Button>
<Button variant="secondary">次要按钮</Button>
<Button variant="ghost">幽灵按钮</Button>
<Button variant="link">链接按钮</Button>

// 不同尺寸
<Button size="sm">小按钮</Button>
<Button size="md">中按钮</Button>
<Button size="lg">大按钮</Button>
<Button size="icon">
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
  </svg>
</Button>

// 禁用状态
<Button disabled>禁用按钮</Button>

// 加载状态
<Button>
  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
  加载中...
</Button>
```

### 2. 下拉菜单组件 (Dropdown Menu)

#### 导入

```tsx
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
```

#### 使用示例

```tsx
<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">打开菜单</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>选项 1</DropdownMenuItem>
    <DropdownMenuItem>选项 2</DropdownMenuItem>
    <DropdownMenuItem>选项 3</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

### 3. 抽屉组件 (Drawer)

#### 导入

```tsx
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
```

#### 使用示例

```tsx
<Drawer>
  <DrawerTrigger asChild>
    <Button>打开抽屉</Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>抽屉标题</DrawerTitle>
      <DrawerDescription>
        这是一个抽屉组件，用于显示额外的内容。
      </DrawerDescription>
    </DrawerHeader>
    <div className="py-4">
      <p>抽屉内容...</p>
    </div>
  </DrawerContent>
</Drawer>
```

### 4. 弹窗组件 (Modal)

#### 导入

```tsx
import {
  Modal,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTrigger,
} from "@/components/ui/modal";
```

#### 使用示例

```tsx
<Modal>
  <ModalTrigger asChild>
    <Button>打开弹窗</Button>
  </ModalTrigger>
  <ModalContent>
    <ModalHeader>
      <ModalTitle>弹窗标题</ModalTitle>
      <ModalDescription>
        这是一个弹窗组件，用于显示重要信息。
      </ModalDescription>
    </ModalHeader>
    <div className="py-4">
      <p>弹窗内容...</p>
    </div>
    <ModalFooter>
      <Button variant="outline">取消</Button>
      <Button>确认</Button>
    </ModalFooter>
  </ModalContent>
</Modal>
```

### 5. 输入框组件 (Input)

#### 导入

```tsx
import { Input } from "@/components/ui/input";
```

#### 使用示例

```tsx
// 普通输入框
<Input placeholder="请输入内容" />

// 带图标的输入框
<div className="relative">
  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
  <Input placeholder="搜索..." className="pl-10" />
</div>

// 禁用的输入框
<Input placeholder="禁用状态" disabled />

// 密码输入框
<Input type="password" placeholder="请输入密码" />
```

### 6. 图标使用 (Lucide React)

#### 安装依赖

```bash
npm install lucide-react
```

#### 导入

```tsx
import {
  Home,
  Search,
  User,
  Settings,
  Bell,
  Mail,
  Calendar,
  Clock,
  FileText,
  FilePlus,
  Trash2,
  Edit,
  Copy,
  Share2,
  Download,
  Upload,
  ChevronRight,
  ChevronLeft,
  ChevronUp,
  ChevronDown,
  Menu,
  X,
  Check,
  AlertCircle,
  // 更多图标...
} from "lucide-react";
```

#### 使用示例

```tsx
// 基本使用
<Home className="h-6 w-6" />

// 带颜色
<Search className="h-6 w-6 text-blue-500" />

// 带大小
<User className="h-8 w-8" />

// 带动画
<Loader className="h-6 w-6 animate-spin" />
```

#### 常用图标列表

- **导航图标**: Home, Search, User, Settings, Bell, Mail
- **文件操作**: FileText, FilePlus, Trash2, Edit, Copy, Share2, Download, Upload
- **导航箭头**: ChevronRight, ChevronLeft, ChevronUp, ChevronDown, ArrowRight, ArrowLeft, ArrowUp, ArrowDown
- **交互图标**: Menu, X, Check, AlertCircle, Info, Star, Heart, ThumbsUp, ThumbsDown
- **数据可视化**: BarChart2, PieChart, Activity
- **开发工具**: Code, Terminal
- **天气图标**: Sun, Moon, Cloud, CloudRain, Wind, Zap
- **媒体图标**: Camera, Video, Music, Headphones
- **教育图标**: Book, BookOpen, GraduationCap
- **商业图标**: Briefcase, ShoppingCart, CreditCard, DollarSign
- **状态图标**: CheckCircle, XCircle, AlertTriangle, HelpCircle
- **加载图标**: Loader, RefreshCw, RotateCw
- **操作图标**: Plus, Minus, Save, Print
- **布局图标**: Maximize, Minimize, Move, ResizeCw
- **缩放图标**: ZoomIn, ZoomOut
- **地图图标**: Globe, MapPin
- **安全图标**: Lock, Unlock, Eye, EyeOff
- **自然图标**: Leaf, TreePine, Mountain, Compass
- **情感图标**: Sparkles, Sparkle, Award, Trophy, Medal

### 7. 日历组件 (Calendar)

#### 导入

```tsx
import { Calendar } from "@/components/ui/calendar";
```

#### 使用示例

```tsx
// 基本日历
<Calendar />

// 带日期选择
const [selectedDate, setSelectedDate] = useState(new Date());

<Calendar
  value={selectedDate}
  onChange={setSelectedDate}
/>

// 带日期范围
const [minDate] = useState(new Date(2024, 0, 1));
const [maxDate] = useState(new Date(2024, 11, 31));

<Calendar
  value={selectedDate}
  onChange={setSelectedDate}
  minDate={minDate}
  maxDate={maxDate}
/>
```

### 8. 复选框组件 (Checkbox)

#### 导入

```tsx
import { Checkbox } from "@/components/ui/checkbox";
```

#### 使用示例

```tsx
// 基本复选框
const [checked, setChecked] = useState(false);

<Checkbox checked={checked} onCheckedChange={(value) => setChecked(value === true)} />

// 禁用的复选框
<Checkbox checked disabled />
<Checkbox disabled />

// 复选框组
const [fruits, setFruits] = useState<string[]>([]);

const handleFruitChange = (fruit: string) => {
  setFruits((prev) =>
    prev.includes(fruit) ? prev.filter((f) => f !== fruit) : [...prev, fruit]
  );
};

<Checkbox
  checked={fruits.includes('apple')}
  onCheckedChange={() => handleFruitChange('apple')}
/>
```

### 9. 空状态组件 (Empty)

#### 导入

```tsx
import { Empty } from "@/components/ui/empty";
```

#### 使用示例

```tsx
// 基本空状态
<Empty
  title="没有找到结果"
  description="尝试使用不同的关键词或过滤条件"
/>

// 带图标的空状态
<Empty
  icon={<Search className="h-16 w-16 text-muted-foreground" />}
  title="没有找到结果"
  description="尝试使用不同的关键词或过滤条件"
/>

// 带操作按钮的空状态
<Empty
  title="购物车是空的"
  description="添加一些商品到购物车吧"
  action={
    <Button>浏览商品</Button>
  }
/>
```

### 10. 表单组件 (Form)

#### 导入

```tsx
import { Form, FormControl, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectOption } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
```

#### 使用示例

```tsx
// 基本表单
const [formData, setFormData] = useState({
  name: '',
  email: '',
  password: '',
  gender: '',
});

const [errors, setErrors] = useState<Record<string, string>>({});

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));
  if (errors[name]) {
    setErrors((prev) => ({ ...prev, [name]: '' }));
  }
};

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  
  const newErrors: Record<string, string> = {};
  if (!formData.name) {
    newErrors.name = '请输入姓名';
  } else {
    console.log('表单提交成功:', formData);
  }
};

<Form onSubmit={handleSubmit}>
  <FormItem>
    <FormLabel htmlFor="name">姓名</FormLabel>
    <FormControl>
      <Input
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
    </FormControl>
    {errors.name && <FormMessage className="text-red-500">{errors.name}</FormMessage>}
  </FormItem>

  <Button type="submit">提交</Button>
</Form>
```

### 11. 分页组件 (Pagination)

#### 导入

```tsx
import { Pagination } from "@/components/ui/pagination";
```

#### 使用示例

```tsx
// 基本分页
const [currentPage, setCurrentPage] = useState(1);
const totalPages = 10;

<Pagination
  totalPages={totalPages}
  currentPage={currentPage}
  onPageChange={setCurrentPage}
/>

```

### 12. 气泡组件 (Popover)

#### 导入

```tsx
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
```

#### 使用示例

```tsx

// 悬停触发的气泡
<Popover trigger="hover">
  <PopoverTrigger asChild>
    <Button variant="secondary">悬停我</Button>
  </PopoverTrigger>
  <PopoverContent>
    <div className="space-y-2">
      <h3 className="font-medium">悬停气泡</h3>
      <p className="text-sm text-muted-foreground">这是一个悬停触发的气泡组件。</p>
    </div>
  </PopoverContent>
</Popover>
```

### 13. 进度条组件 (Progress)

#### 导入

```tsx
import { Progress } from "@/components/ui/progress";
```

#### 使用示例

```tsx
// 基本进度条
<Progress value={50} />

// 带自定义颜色的进度条
<Progress value={75} className="bg-gray-200" />

// 带动画的进度条
<Progress value={30} className="animate-pulse" />
```

### 14. 单选框组件 (Radio)

#### 导入

```tsx
import { Radio, RadioGroup } from "@/components/ui/radio";
```

#### 使用示例

```tsx
// 基本单选框组
const [selected, setSelected] = useState("option1");

<RadioGroup value={selected} onValueChange={setSelected}>
  <div className="flex items-center gap-2">
    <Radio value="option1" />
    <label>选项 1</label>
  </div>
  <div className="flex items-center gap-2">
    <Radio value="option2" />
    <label>选项 2</label>
  </div>
  <div className="flex items-center gap-2">
    <Radio value="option3" />
    <label>选项 3</label>
  </div>
</RadioGroup>

### 15. 选择框组件 (Select)

#### 导入

```tsx
import { Select, SelectOption } from "@/components/ui/select";
```

#### 使用示例

```tsx
// 基本选择框
const [selected, setSelected] = useState("");

<Select value={selected} onChange={(e) => setSelected(e.target.value)}>
  <SelectOption value="">请选择</SelectOption>
  <SelectOption value="option1">选项 1</SelectOption>
  <SelectOption value="option2">选项 2</SelectOption>
  <SelectOption value="option3">选项 3</SelectOption>
</Select>

```

### 16. 表格组件 (Table)

#### 导入

```tsx
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
```

#### 使用示例

```tsx
// 基本表格
<Table>
  <TableHeader>
    <TableRow>
      <TableHead>ID</TableHead>
      <TableHead>姓名</TableHead>
      <TableHead>邮箱</TableHead>
      <TableHead>操作</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>1</TableCell>
      <TableCell>张三</TableCell>
      <TableCell>zhangsan@example.com</TableCell>
      <TableCell>
        <Button variant="ghost" size="sm">编辑</Button>
        <Button variant="ghost" size="sm" className="ml-2">删除</Button>
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell>2</TableCell>
      <TableCell>李四</TableCell>
      <TableCell>lisi@example.com</TableCell>
      <TableCell>
        <Button variant="ghost" size="sm">编辑</Button>
        <Button variant="ghost" size="sm" className="ml-2">删除</Button>
      </TableCell>
    </TableRow>
  </TableBody>
</Table>
```

### 17. 标签组件 (Tag)

#### 导入

```tsx
import { Tag } from "@/components/ui/tag";
```

#### 使用示例

```tsx
// 基本标签
<Tag>标签</Tag>

// 不同变体的标签
<Tag variant="default">默认标签</Tag>
<Tag variant="outline">轮廓标签</Tag>
<Tag variant="destructive">危险标签</Tag>

// 可关闭的标签
<Tag closeable onClose={() => console.log('标签已关闭')}>
  可关闭标签
</Tag>
```

### 18. 全局提示组件 (Toast)

#### 导入

```tsx
import { useToast } from "@/components/ui/toast-context";
import { ToastContainer } from "@/components/ui/toast-container";
```

#### 使用示例

```tsx
// 在应用的根组件中添加 ToastContainer
function App() {
  return (
    <>
      {/* 其他组件 */}
      <ToastContainer />
    </>
  );
}

// 在需要使用 Toast 的组件中
const { showToast } = useToast();

// 显示成功提示
showToast({
  title: '操作成功',
  description: '您的操作已成功完成',
  type: 'success',
});

// 显示错误提示
showToast({
  title: '操作失败',
  description: '请稍后重试',
  type: 'error',
});

```

## 自定义主题

可以通过修改 `tailwind.config.js` 文件来自定义主题颜色和样式。

## 注意事项

1. 确保已安装所有必要的依赖项
2. 组件使用了 Radix UI 作为底层实现，确保熟悉其 API
3. 可以根据需要扩展组件功能，添加自定义 props
4. 建议在使用组件前查看源代码，了解其实现细节

## 开发建议

1. 使用 TypeScript 类型定义，确保类型安全
2. 遵循 shadcn 的设计规范，保持组件风格一致
3. 测试组件在不同场景下的表现
4. 优化组件性能，避免不必要的渲染

---

如有任何问题或建议，请随时提出。