# 常传建 · 个人作品集 (Portfolio 2026)

黑金风格的资深体验 / UI 设计师个人作品集网站，采用 **React + Vite** 构建，含 WebGL 流光背景、项目横向滑动详情、滚动入场动效等。

## ✨ 特性

- **黑金视觉体系**：统一的深色背景 + 香槟金强调色，覆盖导航、Hero、关于我、精选案例、核心优势、联系我六大模块。
- **流光背景动效**：各板块独立 WebGL 着色器背景（墨绿金 / 琥珀金 / 紫晶金 / 青蓝金），离屏自动暂停以省性能。
- **精选案例**：卡片横向滑动 + 拖拽 + 自动滚动，点击进入全屏详情页，支持上一个 / 下一个案例切换与返回。
- **响应式适配**：版心 1700px，三档断点（1700 / 1200 / 768）适配桌面与移动端。
- **简历下载**：导航与 Hero 均提供 PDF 简历下载入口。

## 🛠 技术栈

- React 18 + Vite 5
- Framer Motion（拖拽、入场动效）
- three.js / WebGL（ColorBends 着色器背景）
- lucide-react（图标）

## 🚀 本地运行

```bash
npm install
npm run dev      # 启动开发服务器（默认 http://localhost:5173）
```

> 注：本地沙箱环境对 Vite CLI 有兼容限制，开发 / 构建脚本已改用编程 API（`scripts/dev.mjs`、`scripts/build.mjs`）绕开。

### 生产构建

```bash
npm run build    # 输出到 dist/
npm run preview  # 本地预览构建产物
```

## 🌐 在线预览

部署在 GitHub Pages：**https://changjiantian.github.io/portfolio-site/**

推送 `main` 分支即触发 GitHub Actions 自动构建并发布（详见 `.github/workflows/deploy.yml`）。
部署到项目子路径 `/portfolio-site/`，由 `GITHUB_PAGES=true` 控制 `base`。

## 📁 目录结构

```
portfolio/
├── public/                 # 静态资源（简历 PDF、头像、项目图片）
│   ├── resume.pdf
│   ├── images/avatar.png
│   └── assets/projects/    # 各项目截图
├── src/
│   ├── components/          # Nav / Hero / About / Projects / Strengths / Contact 等
│   ├── data/profile.js      # 个人资料与项目数据
│   ├── index.css            # 全局样式与色板
│   └── main.jsx
├── scripts/                # 编程 API 启动 / 构建脚本
└── vite.config.js
```

---

© 2026 常传建 — 以设计驱动产品价值
