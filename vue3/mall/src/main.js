import { createApp } from 'vue'
import App from './App.vue'
import {
    Swipe
} from 'vant'
import 'vant/lib/index.css'
import './assets/main.css' // reset
import 'lib-flexible/flexible' // 移动端适配就做好了
import router from './router' // 启用路由
// 启用全家桶
//     router
//     store
// 按需加载vant 组件
// rest? 准备
// html fontSize? rem 自适应
const app = createApp(App)
app
    .use(Swipe)
    .use(router) // 当我们在做SPA 路由接管一切  pages -> 组件
app
    .mount('#app')
