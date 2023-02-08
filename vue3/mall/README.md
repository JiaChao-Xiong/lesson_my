# 使用vue3写商场
- 简历需要


- vue3 语法
    - 过滤器 filters  换了表现形式
        computed data -> 计算
        格式转化 进制转换 汇率 语言  
        入口可以配置多个过滤器
        app.config.globalProperties.$filters = {
            prefix(url) {
                if ()......
            }
        }

- 设计模式
    DRY  Dont repeat yourself
    代码在复制重复的时候  停下来
    组件 

- 工程化 vite
    前端工程化  运行在服务器端 node
    .vue    style lang="stylus"    css 工程 stylus|less
    stylus -> vite -> npm i stylus -> css -> 页面上的css
    vite.config.js  vite 配置文件 工程化定制

- 组件化思想
    state 状态对象，响应式 数据驱动界面
    常规的组件数据都放到state中 由reactive({...})
    子组件和state 诞生依赖关系  热更新  
    components 组件 有利于 页面级组件或大组件更好维护，template比较简洁
    维护好数据状态  正确
    - simple-header
        noback  props 组件的复用和应用场景

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
        - common    文件夹
            通用，和具体业务无关，可以在任何页面，任何项目
            style 通用样式
                - mixin.styl
                    专门放通用的混合函数的地方
        - service      api
            定义接口的地方
            方便统一管理接口  axios  baseURL
            每个页面的接口一个独一的文件  维护

- 异步解决方案
    - promise es6 pending -> fullfiled
    - 同步化    流程难控制
    - es8 asyns + await    当有多个异步任务要同步化时  thenable 要简化 


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
    - 混合mixin
        形式上是函数
        封装某个功能样式的集合
        混合到调用它的地方
    - 声明变量
    - scoped
        防止css 类名冲突 
        给组件加data-v-hash唯一值
        选择器加上属性选择器
    - $.active
        & 引用上一级选择器

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

- axios
    - 接口请求里的顺丰
        更专业
        接口返回的数据，再包一层   更好及更标准的使用，更丰富的请求信息
        http 了解更多
        axios 把接口返回的数据放在data中
    - 拦截器 interceptors
        axios request/response
        return res.data 

- 骨架屏方案 用户体验优化
    skeleton    vant 提供了这个组件
    <van-skeleton :row="3" :loading="state.loading">
        template 显示出来
    </van-skeleton>

- 图片懒加载
    第一等  减少http请求数
    - html 文件中 link src img script 启动新的http请求
        公路一样有限制
        请求并发数 越多的话 页面加载越慢
    - 可视区内图片加载
    - 非可视区内延迟加载，可视区滚动到哪里加载到哪
    - vant 内置了Lazyload
        vue directives  指令集 自定义指令 v-lazyload
        命令组件或标签做相应的事情
        更简单直观
    - base64相较于png/jpg    更小    可放到css js 文件中 不需要png 而外的文件， 有效的减少了并发数

- vue-router 细节考点
    - 懒加载
    - router-link 激活路由
        .router-link-active
    - 路由的跳转 
        - 全局对象 Router vue-router  useRouter() 组件里随时拿到
            push  go currentRoutr
        - 当前路由  Router,currentRoute()
            useRoute()  当前路由对象
            route,params
        - useRoute()  使用一下  hooks函数 编程
            use开头函数的称呼
            vue vue-router vuex .... useRoute  方便我们的使用， 函数的方式
            composition api 结合的很好
