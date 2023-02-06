import Home from '../pages/Home.vue' // 页面级别组件
// 当页面路由很多时，升级以下方案
// 首页加载时，没必要去引入并执行所有的页面的
// 当前会，性能慢
// 路由的懒加载
// import About from '../pages/About.vue'
// import Other from '../pages/Other.vue'
import { 
    createWebHashHistory,  // 前端路由形式之一hash history api
    createRouter // spa    路由实例  前端路由对象
} from 'vue-router'

const routes = [
    // 扩展性很好
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // component: About
        component: () => import('../pages/About.vue')
    },
    {
        path: '/other',
        name: 'Other',
        // component: Other
        component: () => import('../pages/Other.vue')
    }
]

const router = createRouter ({
    // 配置前端路由
    history: createWebHashHistory(),
    routes
})

export default router