import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
    // 当前沙箱环境不支持 fs 事件监听，关闭 watch 保证 dev server 稳定运行；
    // 源码修改后刷新浏览器即可看到最新效果（Vite 按请求实时编译）。
    watch: null,
  },
})
