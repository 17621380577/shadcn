# shadcn 组件库使用指南

## 1. 简介

shadcn 是一个基于 React、Tailwind CSS 和 Radix UI 的组件库，提供了一套现代化、可定制的 UI 组件。它的特点是：

- **高度可定制**：基于 Tailwind CSS，支持通过配置文件自定义主题
- **类型安全**：使用 TypeScript 开发，提供完整的类型定义
- **组件丰富**：包含按钮、输入框、模态框、抽屉、表格等常用组件
- **易于集成**：可以轻松集成到现有的 React 项目中
- **响应式设计**：支持各种屏幕尺寸

## 2. 安装

### 2.1 前提条件

在安装 shadcn 之前，确保你的项目已经满足以下条件：

- Node.js 16.0 或更高版本
- React 18.0 或更高版本
- Tailwind CSS 3.0 或更高版本

### 2.2 安装步骤


1. **安装 shadcn**

   ```bash
   # 安装 shadcn CLI
   npx shadcn@latest init
   ```

   按照提示完成初始化配置，包括：
   - 组件目录路径（默认为 `src/components/ui`）
   - 样式文件路径（默认为 `src/app/globals.css`）
   - 是否使用 TypeScript（推荐使用）

2. **添加组件**

   使用 shadcn CLI 添加组件：

   ```bash
   # 添加按钮组件
   npx shadcn@latest add button
   
   # 添加输入框组件
   npx shadcn@latest add input
   
   # 添加模态框组件
   npx shadcn@latest add modal
   ```

## 3. 基本使用

在 React 组件中引用 shadcn 组件：

```tsx
import { Button } from "@/components/ui/button";

<Button>点击我</Button>
```

## 4. 最佳实践

### 4.1 组件组织

- 将 shadcn 组件放在 `src/components/ui` 目录中
- 创建自定义组件时，遵循 shadcn 的命名和结构规范
- 使用 TypeScript 定义组件 props，确保类型安全

### 4.2 样式管理

- 使用 Tailwind CSS 类名进行样式调整
- 避免直接修改组件源码，而是通过覆盖类名或添加自定义样式

### 4.3 性能优化

- 按需导入组件，避免全量导入
- 使用 React.memo 优化组件渲染
- 合理使用 useState 和 useEffect，避免不必要的重渲染

### 4.4 可访问性

- 为组件添加适当的 ARIA 属性
- 测试组件在不同设备和浏览器中的表现

## 5. 总结

shadcn 是一个功能强大、高度可定制的 UI 组件库，它结合了 React、Tailwind CSS 和 Radix UI 的优势，为开发者提供了一套现代化的 UI 解决方案。通过本指南，你应该能够快速上手 shadcn，并在你的项目中使用它来构建美观、易用的用户界面。

如果你有任何问题或建议，欢迎在 GitHub 上提交 issue 或 PR。

## 6. 资源

- [shadcn 官方文档](https://ui.shadcn.com/)
- [Tailwind CSS 文档](https://tailwindcss.com/docs)
- [Radix UI 文档](https://www.radix-ui.com/)
- [React 官方文档](https://react.dev/)

