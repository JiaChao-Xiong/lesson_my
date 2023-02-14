# 商场管理后台 Admin

- mall
    用户用的  移动端
    vant + axios + 全家桶
    
- mall-admin
    同事(小编，运营)
    上架活动
    上架商品
    swiper  幻灯片内容
    权限
    同事

- 全家桶开发理解

- vite 是如何启动项目的  npm run dev  运行的流程
    1. package.json script脚本
        dev  development 开发工具      src 开发目录
        build  开发完了，打包上线做准备   dist 打包目录
    2. vite  最快的过程化工具
        index.html  作为首页 3000端口 http-sever启动
    3. src/main.js 作为单点入口文件
        vite 特别之处，script type="module" js 支持es6的模块化
        实例化  vue app
        并把app 挂载到 #app 节点上
    4. 基于模块依赖 代码组织起来

- redirect 细节
    1. locahost:3000/ 
        HTTP 请求响应式的
        - index.html 已发送到浏览器并显示
        - App.vue 已挂载
    2. router
        /  redirect
        302  /introduce

    header + main.content
    导航 nav App.vue + router-view 页面级别组件