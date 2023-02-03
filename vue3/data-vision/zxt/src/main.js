import { createApp } from 'vue'
import App from './App.vue'
// js使用import 引入了css vite的功劳
// 更加好统一管理
import 'element-plus/dist/index.css'
// 全局引入
// 性能问题
import {
    // 按需加载
    ElCard,
    ElButton
} from 'element-plus'

const app = createApp(App)
// ElButton 全局组件引入？
app
    .use(ElButton) // 组件变成全局组件
    .use(ElCard)
app.mount('#app')
