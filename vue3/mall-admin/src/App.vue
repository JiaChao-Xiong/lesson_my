<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { getPageTitle, getLocal } from '@/utils'

const state = reactive({
  defaultOpen: ['1','2'],
  showMenu: true,
  currentPath: '/'
})

const router = useRouter() 
// 使用vue-router的hooks 函数，直接拿到路由对象

// router -> change to from next 
// 路由守卫，
// 权限分明 登录 cookie   token 更短 更安全 
// cookie 可能被黑客截获 第三者 网络层拦截数据包 
// HTTP请求是明文 cookie 一段文本
// 路由的中间任何地方截获请求响应 cookie 伪装成你
// 服务器端解析cookie  
router.beforeEach((to, from, next) => {
  // 根据to.name 查出标题  
  document.title = getPageTitle(to.name)
  state.currentPath = to.path
  // if (to.path)
  if (to.path == '/login') { // 如果要去到login
    state.showMenu = false
    next()
  } else {
    // 需要鉴权的页面 
    if (to.meta.login && !getLocal('token')) {
      next({
        path: '/login'
      })
    } else {
      next()
    }
  }
})
</script>

<template>
  <!-- 单页应用， 导航 + router-view +  布局 -->
  <!-- <div>App</div> -->
  <div class="layout">
    <!-- 容器 -->
    <el-container class="container" v-if="state.showMenu">
      <!-- 侧边栏 -->
      <el-aside class="aside">
        <div class="head">
          <div>
            <img src="" alt="logo">
            <span>vue3 admin</span>
          </div>
        </div>  
        <div class="line"></div>
        <el-menu
          background-color="#222832"
          text-color="#fff"
          :router="true"
          :default-openeds="state.defaultOpen"
          :default-active="state.currentPath"
        >
          <el-sub-menu index="1">
            <template #title>
              <span>Dashboard</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/">首页</el-menu-item>
              <el-menu-item index="/add">添加商品</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
          <el-sub-menu index="2">
            <template #title>
              <span>首页配置</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/swiper">轮播图配置</el-menu-item>
              <el-menu-item index="/hot">热销商品配置</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
        </el-menu>
      </el-aside> 
      <el-container class="content">
        <div class="main">
          <router-view />
        </div>
      </el-container>
    </el-container>
    <el-container v-else class="container">
      <router-view/>
    </el-container>
  </div>
  
</template>

<style lang="stylus">
// css reset 
// 全局css 
body
  margin 0
  padding 0
  box-sizing border-box

a
  text-decoration none

.layout
  min-height 100vh
  background-color #fff
  .aside
    width 200px
    background-color #222832
  .content
    display flex
    flex-direction column
    min-height 100vh
    overflow hidden
    .main
      height calc(100vh - 100px)
      overflow auto
      padding 10px


</style>
