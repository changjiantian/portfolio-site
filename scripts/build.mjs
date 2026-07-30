/**
 * 生产构建脚本（编程 API 方式）。
 * 原因同 dev.mjs：沙箱拦截 esbuild bundle，绕开 CLI 的配置文件打包环节。
 */
import { build } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const vendor = (f) => resolve(root, 'vendor', f)

await build({
  root,
  configFile: false,
  logLevel: 'info',
  plugins: [react()],
  resolve: {
    alias: [
      { find: /^react\/jsx-dev-runtime$/, replacement: vendor('jsx-dev-runtime.mjs') },
      { find: /^react\/jsx-runtime$/, replacement: vendor('react-jsx-runtime.mjs') },
      { find: /^react-dom\/client$/, replacement: vendor('react-dom-client.mjs') },
      { find: /^react-dom$/, replacement: vendor('react-dom.mjs') },
      { find: /^react$/, replacement: vendor('react.mjs') },
    ],
  },
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0,
  },
})

console.log('\n  ➜  Build complete → dist/\n')
