import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// es6模块化
import { resolve } from 'path'
// 文件 路径 属于哪个板块？  os  IO模块
// alias
console.log(__dirname, resolve(__dirname, 'src'));
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 路径别名
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '~': resolve(__dirname, 'components')
    }
  }
})
