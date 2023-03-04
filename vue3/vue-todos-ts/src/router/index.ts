// index.js => index.ts
// typescript = js + 强类型 type 类型  script脚本 技术 超集
import {createRouter, createWebHistory, RouteRecordRaw, RouterOptions} from 'vue-router';
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(),
    // 每个route 配置 满足RouteRecordRaw 类型的约束
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        }
    ] as RouteRecordRaw[]
})
// 路由管理对象
export default router