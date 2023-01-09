- vue 现代的
    开发方式也是现代 对应  html + script vue + mvvm  石器时代
    工程化的方式  vite 工程化工具
    npm init vite  生产工艺
    现代的 vue 项目模板
    - todos 项目文件夹，  vue 项目模板
    - npm i
    - npm run dev  启动项目

- vite 创建的项目模板 目录结构
    - todos 根目录
    - index.html  挂载点  #app 首页
        script 引入  src/main.js
    - src js开发目录  代码主要都在这个目录下
    - main.js 单点入口
    - App.vue 根组件
        1. .vue 后缀 超能力

- vue3 的语法变迁
    1. vue3 支持vue2 的传统命令式语法
        data  methods  computed  缺点是 大型项目  找来找去
    2. composition + setup 语法
        vue3 将功能逐个的提供出来，随意组合，开发组件
        import { reactive, ref, computed...} from vue3

    3. vite 工程化
        .vue 后缀的文件
        template   放模板
        script     放脚本
        style      放样式


        script setup
        变量 可以在template 里直接使用