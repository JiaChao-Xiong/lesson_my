# 项目实战开发的点位

- 写一个面试官喜欢的项目
- 路由配置安排好 5个页面
    首页 详情页  登录页面 搜索页  tab level 1
- 安排的能力点
    - 路由 懒加载 meta 路由守卫
    - 防抖节流 + localStorage 搜索
    - 组件化能力
    - mockjs 假接口

- vuex /pinia 难点  难以下手
    - 搭好架子 pinia 更直观
        1. 数据由中央管理
        本地组件onMounted + api + reactive
        (state) 私有状态
        pinia 全局状态
            root state -> modules -> defineStore 

- 项目的数据管理流程
    1. 接口请求不在属于页面
        状态不属于组件了
    2. mock 数据到位
    3. 定义好接口
    4. store 对象
        - store 建一个文件
        - defineStore  方法,  返回state 初始值
        - 页面上 读出来 从中央到本地
        - 请求接口数据