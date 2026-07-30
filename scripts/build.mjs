/**
 * 生产构建脚本（Vite 编程 API）。
 * 使用 configFile:false + 内联配置，绕开沙箱对 vite.config.js 的 esbuild 打包挂起。
 * 部署到 GitHub Pages 项目页时通过 GITHUB_PAGES=true 设置子路径 base。
 */
import { build } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const base = process.env.GITHUB_PAGES === 'true' ? '/portfolio-site/' : '/'

await build({
  root,
  configFile: false,
  base,
  logLevel: 'info',
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0,
  },
})

console.log('\n  ➜  Build complete → dist/\n')
