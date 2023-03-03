import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
//  es6
import { resolve } from 'path'
// 文件 路径 属于哪个版块? os io模板
// alias
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 路径别名
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})
