import { defineConfig } from 'vite'
import svgr from '@svgr/rollup'
import { fileURLToPath } from 'url'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default (args: { mode: string }) => {
  // 開發環境時，使用local名稱：方便debug，提高可讀性
  // 正式環境時，使用hash值：減少檔案大小、提高效能與安全性
  const generateScopedName =
    args.mode === 'production' ? '[hash:base64:5]' : '[local]__[hash:base64:5]'

  return defineConfig({
    plugins: [react(), svgr()],
    server: {
      port: 3000,
      open: true,
      host: '0.0.0.0'
    },
    build: {
      rollupOptions: {
        treeshake: true
      },
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true, // 移除 console.log
          drop_debugger: true // 移除 debugger
        }
      }
    },
    base: '/',
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
        '@styles': fileURLToPath(new URL('./src/styles', import.meta.url)),
        '@components': fileURLToPath(new URL('./src/components', import.meta.url))
      }
    },
    css: {
      modules: {
        localsConvention: 'camelCase',
        generateScopedName: generateScopedName
      },
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/styles/abstracts/variables" as *;`
        }
      }
    }
  })
}
