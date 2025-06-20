# 微信读书 PC 官网

基于 Next.js 15 + Ant Design 构建的微信读书 PC 官网，展示了 Next.js 的各种核心特性。

## 🚀 技术栈

- **框架**: Next.js 15 (App Router)
- **UI 组件库**: Ant Design 5
- **样式**: CSS Modules + 全局样式
- **图标**: Ant Design Icons
- **语言**: JavaScript

## ✨ Next.js 特性展示

### 1. App Router
- 使用最新的 App Router 架构
- 基于文件系统的路由
- 支持嵌套布局

### 2. Server Components vs Client Components
- 大部分组件使用 Server Components 提升性能
- 需要交互的组件使用 Client Components (`'use client'`)

### 3. API Routes
- `/api/books` - 书籍列表 API (支持搜索、筛选、分页)
- `/api/books/[id]` - 单本书籍详情 API (支持 CRUD 操作)

### 4. Server Actions
- `toggleBookLike()` - 切换书籍收藏状态
- `addToBookshelf()` - 添加到书架
- `searchBooks()` - 搜索书籍
- `submitFeedback()` - 提交反馈
- `rateBook()` - 评分功能

### 5. Dynamic Routes
- `/books/[id]` - 动态书籍详情页面
- 支持参数获取和动态内容渲染

### 6. Metadata API
- 完整的 SEO 优化
- Open Graph 标签
- 动态元数据生成

### 7. Image Optimization
- 使用 Next.js Image 组件优化图片加载
- 自动图片格式转换和尺寸优化

### 8. CSS Modules
- 组件级样式隔离
- 全局样式管理

### 9. Layouts
- 共享布局组件
- 嵌套布局支持

### 10. Error Handling
- 自定义 404 页面
- 错误边界处理

## 📁 项目结构

```
src/
├── app/
│   ├── api/                    # API 路由
│   │   └── books/
│   │       ├── route.js        # 书籍列表 API
│   │       └── [id]/
│   │           └── route.js    # 单本书籍 API
│   ├── books/                  # 书城页面
│   │   ├── page.js             # 书城首页
│   │   └── [id]/
│   │       └── page.js         # 书籍详情页
│   ├── components/             # 共享组件
│   │   ├── Header.js           # 头部导航
│   │   ├── Footer.js           # 底部信息
│   │   ├── BookCard.js         # 书籍卡片
│   │   ├── FeatureSection.js   # 功能特色
│   │   └── TestimonialSection.js # 用户评价
│   ├── actions.js              # Server Actions
│   ├── globals.css             # 全局样式
│   ├── layout.js               # 根布局
│   ├── page.js                 # 首页
│   └── not-found.js            # 404 页面
```

## 🎨 设计特色

### 1. 微信读书主题
- 使用微信绿色 (#07c160) 作为主色调
- 简洁现代的设计风格
- 响应式布局设计

### 2. 功能模块
- **首页**: 英雄区域、功能特色、热门推荐、用户评价
- **书城**: 书籍列表、搜索筛选、分页功能
- **书籍详情**: 详细信息、评论系统、评分功能
- **导航**: 完整的网站导航结构

### 3. 交互体验
- 书籍收藏功能
- 评分和评论系统
- 搜索和筛选
- 响应式设计

## 🚀 运行项目

1. 安装依赖
```bash
npm install
```

2. 启动开发服务器
```bash
npm run dev
```

3. 打开浏览器访问 [http://localhost:3000](http://localhost:3000)

## 📱 响应式设计

- 支持桌面端、平板端、手机端
- 使用 Ant Design 的栅格系统
- 自适应布局和组件

## 🔧 开发特性

- **热重载**: 开发时自动刷新
- **ESLint**: 代码质量检查
- **TypeScript 支持**: 可扩展为 TypeScript
- **性能优化**: 自动代码分割和懒加载

## 📈 性能优化

- Server Components 减少客户端 JavaScript
- 图片自动优化
- 代码分割和懒加载
- 静态生成和缓存

## 🎯 下一步计划

- [ ] 添加用户认证系统
- [ ] 实现真实的数据库连接
- [ ] 添加更多页面（排行榜、分类页等）
- [ ] 集成支付系统
- [ ] 添加阅读器功能
- [ ] 实现社交功能

## 📄 许可证

MIT License

---

这个项目展示了 Next.js 15 的核心特性，包括 App Router、Server Components、API Routes、Server Actions 等。通过构建一个完整的微信读书官网，可以学习到 Next.js 的最佳实践和现代 Web 开发技术。
