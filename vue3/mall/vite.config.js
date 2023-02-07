import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 运行环境 node 内置路径模块
import { resolve } from 'path'
// console.log('vite 配置文件');
// https://vitejs.dev/config/
// node 超级变量  __dirname 项目根目录的物理路径
console.log(__dirname, resolve(__dirname, 'src'));
export default defineConfig({
  plugins: [vue()],
  // 路径字符串 resolve? 解析有效的路径 文件系统是否有这个文件
  // vite 介入路径功能 
  resolve: {
    // 短路径 别名 快捷方式
    alias: {
      '@': resolve(__dirname, 'src'), // @ -> src 目录所在的物理绝对位置
      '~': resolve(__dirname, 'src/components')
    }
  }
})
