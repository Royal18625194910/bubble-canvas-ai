# Bubble AI Canvas

Bubble AI Canvas 是一个基于 Next.js 构建的在线 AI 画布设计平台，提供直观的拖拽式设计体验和强大的 AI 图片处理能力。用户可以轻松创建精美的设计作品，适用于社交媒体图片、演示文稿、海报等多种场景。

## 📸 项目展示

### 首页概览
![首页](./showcase/home.png)

### 设计工作区
![设计界面](./showcase/design.png)

### 项目管理
![项目管理](./showcase/projects.png)

## ✨ 主要功能

- **AI 智能图片处理**
  - 智能抠图：一键去除图片背景
  - 智能补全：AI 生成填充缺失区域
  - 智能放大：提升图片分辨率和清晰度
  - 智能阴影：自动生成自然阴影效果
  - 智能调色：一键优化图片色彩

- **多样化设计工具**
  - 图层管理：灵活调整元素层级
  - 文本编辑：丰富的字体和样式选项
  - 形状工具：内置多种基础形状
  - 图片处理：调整大小、旋转、翻转等
  - 属性设置：边框、透明度、圆角等

- **资源管理**
  - 模板中心：内置多种设计模板
  - 素材库：丰富的图片和图形素材
  - 项目管理：分类保存和管理设计作品
  - 导出分享：支持多种格式导出

- **用户体验**
  - 简洁界面：现代化 UI 设计
  - 快捷操作：支持快捷键和右键菜单
  - 自动保存：实时保存设计进度
  - 响应式：适配不同屏幕尺寸

## 🛠️ 技术栈

- [Next.js 14](https://nextjs.org/)  — React 服务端渲染与静态网站生成框架
- [TypeScript](https://www.typescriptlang.org/)  — 类型安全的 JavaScript 超集
- [Tailwind CSS](https://tailwindcss.com/)  — 实用优先的 CSS 框架
- [shadcn/ui](https://ui.shadcn.com/)  — 可重用的组件库
- [Convex](https://convex.dev/)  — 实时数据库与后端服务
- [ImageKit](https://imagekit.io/)  — 图片处理和 CDN 服务
- [Geist Font](https://vercel.com/font)  — 现代无衬线字体

## 🔧 系统要求

- Node.js 18.0.0 或更高版本
- npm 或 yarn 包管理器
- 现代浏览器（Chrome、Firefox、Safari、Edge 等）

## 📁 目录结构

```
├── app/                # Next.js 应用主目录
│   ├── (routes)/       # 路由页面与子模块
│   ├── assets/         # 静态图片与素材
│   ├── fonts/          # 字体文件
│   └── ...
├── components/         # 通用 UI 组件
├── containers/         # 业务功能组件
├── constants/          # 常量与配置
├── convex/             # Convex 数据库相关
├── hooks/              # 自定义 React Hooks
├── lib/                # 工具库与第三方集成
├── store/              # 状态管理
├── public/             # 公共资源
├── README.md           # 项目说明文档
└── ...
```

## 🚀 快速开始

1. **安装依赖**

```bash
npm install
# 或者
yarn install
```

2. **启动开发服务器**

```bash
npm run dev
# 或 yarn dev / pnpm dev / bun dev
```

3. 打开浏览器访问 [http://localhost:3000](http://localhost:3000)

4. 开始编辑页面：修改 `app/page.tsx` 或相关组件，页面会自动热更新。

## 🖼️ 部署

推荐使用 [Vercel](https://vercel.com/) 一键部署：

- 点击 [Vercel 部署链接](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
- 或参考 [Next.js 部署文档](https://nextjs.org/docs/app/building-your-application/deploying)

## 🤝 贡献指南

欢迎任何形式的贡献！

1. Fork 本仓库
2. 新建分支 (`git checkout -b feature/your-feature`)
3. 提交更改 (`git commit -am 'Add new feature'`)
4. 推送分支 (`git push origin feature/your-feature`)
5. 提交 Pull Request

## 📚 相关资源

- [Next.js 官方文档](https://nextjs.org/docs)
- [Convex 官方文档](https://docs.convex.dev/)
- [Tailwind CSS 文档](https://tailwindcss.com/docs)
- [Geist 字体](https://vercel.com/font)

## 📄 License

本项目基于 MIT License 开源。

---

如有问题或建议，欢迎提 Issue 或联系作者。
