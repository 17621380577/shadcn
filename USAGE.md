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