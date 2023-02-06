# 使用vue3写商场
- 简历需要

- 商城应用npm包
    - vant  有赞，移动商城组件库
    - lib-flexible  移动端适配库
    - vue-router    路由 

- 架构（目录的意义）
    vite    工程化  项目模板
    - src 开发目录
        - assets 静态资源目录
            css image
            mian.css base.css @import 模块化
        - views  页面级别组件

- 全家桶
    - vue-router
        - redirect
            流程如下
            - path: '/'  ->  /
            - 假如 component: Home.vue  200  成功
            - 但是 redirect
                没有直接给浏览器响应
                给浏览器发送了一个跳转指令
                再次发送请求?   /home   发送3xx指令 跳转

- stylus
    css 全新写法，写起来更快，很多的高级功能
    - npm i stylus 
        安装stylus css 预编译器
        用全新的写法来写css，stylus，帮我们自动编译成css

    - .vue style lang="stylus"
    - 不用写{} : ; 快
        写了也没问题
    - 表达父子元素的元素    css 模块
        缩进 自动的加上父元素的限定

- main.js 入口文件，有哪些工作
    全局性的
    - 完整的vue 全家桶
        router spa
    - 组件库
        vant element3 element-plus
        按需加载
        css库文件
    - css 准备工作
        - main.css
            - reset
                - *, *::bedore, *::after 伪元素也要选中
                - 移动端box-sizing: border-box  IE盒模型 更利于布局
                - font-family   -apple-system   PC 微软雅黑     sans-serif
                - 高分辨率手机 抗锯齿 让文字更清晰
                    text-rendering
                    -webkit-font-smoothing: antialiased;
            - 全局css变量的声明 主题及样式的管理，复用
            - 图标字体库
                iconfont
                引入第三方 link

        - 移动应用 
            rem   适配 html fontSize 动态   1rem = 设计稿的多少? 750px  
            第三方框架 lib-flexible 
            Monile First 80%
            PC  工作 管理 后台