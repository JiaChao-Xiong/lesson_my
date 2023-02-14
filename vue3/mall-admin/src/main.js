import { createApp } from 'vue'
import './style.css'
import App from './App.vue' // 根组件 
import router from '@/router' // 路由的配置 模块化

// 启用路由 路由接管项目
// 引入组件库 按需加载
import { 
    ElAside,
    ElContainer, 
    ElMenu,
    ElMenuItem,
    ElMenuItemGroup,
    ElSubMenu
} from 'element-plus'
import 'element-plus/dist/index.css'
// css reset
// 全局要做的 在这做

const app =  createApp(App) // web app

app
    .use(router)
    // 声明为全局组件
    .use(ElContainer)
    .use(ElAside)
    .use(ElMenu)
    .use(ElMenuItemGroup)
    .use(ElMenuItem)
    .use(ElSubMenu)
    .mount('#app') // 挂载
