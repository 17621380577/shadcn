# Shadcn 组件库使用说明

## 项目介绍

本项目基于 Next.js 14.2.1（App Router）、TypeScript 和 Tailwind CSS 3.4.3，封装了 shadcn/ui 组件库的核心组件，包括按钮、抽屉、弹窗和下拉菜单等。

## 安装说明

### 1. 克隆项目

```bash
git clone <repository-url>
cd shadcn
```

### 2. 安装依赖

```bash
npm install
```

### 3. 启动开发服务器

```bash
npm run dev
```

开发服务器将在 `http://localhost:3000` 启动。

## 注意事项

1. 本项目使用 Tailwind CSS 3.4.3，确保在 `tailwind.config.js` 中正确配置了内容路径。

2. 组件使用了 Radix UI 作为底层实现，确保已安装相关依赖。

3. 所有组件都支持 TypeScript 类型，使用时会有类型提示。

4. 组件样式可以通过传递 `className` 属性进行自定义。

5. 对于需要响应式设计的场景，可以使用 Tailwind CSS 的响应式类。

## 示例页面

项目根路径 `/` 提供了所有组件的示例，包括：

- 按钮的不同变体和尺寸
- 抽屉组件的使用
- 弹窗组件的使用
- 下拉菜单的使用

访问 `http://localhost:3000` 查看所有组件的实际效果。