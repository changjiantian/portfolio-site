/**
 * 开发服务器启动脚本（编程 API 方式）。
 *
 * 当前运行环境的沙箱会拦截 vite CLI 的配置文件加载环节（esbuild 打包
 * vite.config.js 时挂起），因此这里通过 createServer + configFile:false
 * 内联配置启动，等价于标准 vite dev。
 *
 * 另外本环境不支持 fs 事件监听，watch 已关闭 —— 修改源码后刷新浏览器即可。
 */
import { createServer } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const port = Number(process.env.PORT) || 5173

/** 强制给 HTML 响应头加上 charset=utf-8，避免浏览器猜错编码导致中文乱码 */
const forceUtf8 = {
  name: 'force-utf8-charset',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      const setHeader = res.setHeader.bind(res)
      res.setHeader = (name, value) => {
        if (
          typeof name === 'string' &&
          name.toLowerCase() === 'content-type' &&
          typeof value === 'string' &&
          value.includes('text/html') &&
          !value.includes('charset')
        ) {
          value = 'text/html; charset=utf-8'
        }
        return setHeader(name, value)
      }
      next()
    })
  },
}

const server = await createServer({
  root,
  configFile: false,
  logLevel: 'info',
  plugins: [forceUtf8, react()],
  server: {
    port,
    strictPort: true,
    host: true,
    watch: null,
  },
})

await server.listen()
server.printUrls()
console.log(`\n  ➜  Portfolio dev server ready at http://localhost:${port}/\n`)
