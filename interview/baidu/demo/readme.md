# 百度的前端基础一面是什么样的
    - 扎实的基础
    - 场景题
    - 灵活理解
    - 底层思想

    - 面试是当面展示自己

- 扎实的前端基础
    1. 新手引导功能实现
        实战能力，代码
        html + css + js 原生开发能力
    2. 添加遮罩层，在图片上方添加一张只用人脸的照片
        css position 居中
    3. echarts 动画实现原理
        canvas / SVG
        requestAnimationFrame + canvas 的绘图API
        黑板擦
        SVG  DOM 编程
    4. 了解canvas吗
        html5 绘图标签，有丰富的绘图api,游戏/数据可视化/AR/VR/WebGL方向的利器
        WebGL ？ 3D 方向
        - echarts 数据可视化 折线图那些
        vue 后台管理系统
        - canvas 绘图API结合requestAnimation 手写饼状图什么的，但是由于时间，去搞vue node 算法
        - html5 file 处理上传头像中canvas 图片压缩和剪裁
    5. 如何实现组件滑动切换效果？
        - vue 内置了transition组件
        - v-if v-show 组件的切换
        - 移动端的事件 pinch + tap   hammer.js
        - name 给我们css的钩子和事件钩子  wave
        wave-enter-active  wave-enter-to  wave-leave-active  wave-leave-to
    6. 语义化的理解
        - html5 有一些语义化标签
            header footer main aside nav section
            article
        - SEO 友好  百度的排名
            #root  MVC  template + data ssr
            SPA  前端render
        - 代码的可读性

    7. less stylus 多处用到px 转换为vw 如何实现
        - 兼容性的复用
            1. 公司的设计稿件 iphone 375pt  750px
                蓝湖 前端实际稿件
            2. mixin
                pxToVW($px, $attr=width)
                    $vw = ($px / 750) * 100
                    $attr {$vw}vw
                .box {
                    pxToVW(150, weight)
                }

    8. vue-router中router 和route的区别
        router 是前端路由管理对象
        routr 是当前路由对象

        router  push 等跳转操作
            路由守卫 meta  isLogin
        route 取 params  qs 等参数

    9. vue 单页应用无刷新更新组件怎么实现
        - vue router-view 组件
        - vue-router routes数组 配置  单页应用
        - app.use(router) 启用路由
            path -> 页面级别组件 显示到router-view 中
        - 单点击a标签等切换路由时，原组件卸载，匹配新路径的页面组件显示在router-view
            <Component is={component}>
            <router-view v-slot="{Component}">
                <component :is="Component" />
            </router-view>
        - hashChange # 兼容 和 history 后端路由一样好理解  两种模式 不需要刷新
        ie 时代已经过去了  PC 兼容

    10. vue 在页面中如何监听回到上一步的操作
        mounted() {
            // DOM ready   事件监听
            // 浏览器嗅探  history api
            if (window.history && window.history.pushState) {
                // 当前路由入栈
                history.pushState(null, null, document.URL);
                window.addEventListener('popstate', this.goBack, false)
            }
        }
        hashChange