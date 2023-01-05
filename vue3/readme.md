# Vue的世界
    可以从小程序迁移过来
    - 组件思想 components
        wxml + wxss + js 可复用组件
        页面由组件构成，比标签高一个级别
    - 数据驱动思想 不需要找DOM结点，setData()   自动更新?
    wx:for 指令   v-for
    - 路由
        /pages + app.json + tabber  目录下就是页面路由
        wx.navigator({
            url:''
        })
        vue ? vue-router

- 现代web App单页应用   SPA Single Page Application
    vue  https://unpkg.com/vue@next
    - 根节点 启动Web App

- Vue
    1. 现代当红的前端框架   好学，简单
    2. 组件化思想，数据驱动  思想
    3. Vue 是命名空间
        Vue.
    4. Vue.version vue 最新版 vue3
    5. 对照小程序，迁移学习

- v-on:click    @click 代替
    this,content = '' this 直接引用 data 里的数据
    this.$data.content = ''
    vue ? 比react 更友好，方便入门，学习成本低
    API 设计人性化

- Vue 底层源码
    1. data  {}  如何被监听  重新编译模板? Proxy es6
    2. Vue 世界为什么要杜绝DOM编程 #app ?
        DOM 编程慢...

- 占位符与数据绑定的区别
    普通的html 里输出的 占位符  {{}}
    标签的属性 或组件的props 里  数据绑定
    - v-bind:value     :value  单向数据绑定
      v-on:input  绑定事件      v-on  简写为 @
    - 单向数据
        v-bind:value + v-on:input   复杂 出现在 表单元素中
    - 双向数据绑定
        v-model = v-bind:value + v-on:input
        api更友好

- 生命周期    MVVM
    Model View 
    - create 创建阶段，在内存中
        创建之前会先监听事件和生命周期钩子函数 beforeCreate
        数据的绑定和响应式 get  set defineProperty    created

    - mount 从内存中 去到页面真实DOM上
        template 编译成 dom string beforeMount
        dom string -> app.mount('#app')   mounted
    
    - update 组件不是静态的
        事件
        数据请求
        thihs.$data.counter
        this.counter     beforeUpdate   new dom string
        new dom string -> DOM 显示 update

    - unmount
        命令 卸载 beforeUnmount
        ummouunted 已经卸载，DOM removeChild

- vue 数据模型 除了data   props
    data 私有数据
    props 传参
    computed 属性

- 父子组件间的生命周期
    局部和整体的概念来处理