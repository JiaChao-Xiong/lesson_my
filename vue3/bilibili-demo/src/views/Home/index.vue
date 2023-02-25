<template>
  <div>
    <!-- 一屏半左右 -->
    <!-- 头部组件 -->
    <AppHeader/>
    <!-- 频道组件 -->
    <HomeChannel/>
    <!-- 轮播图 -->
    <HomeSwipe/>
    <!-- 视频组件 容器组件-->
    <HomeVideoList/>
    <!-- 底部导航 -->
    <NavBar/>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { getSwiperList, getVideosList } from '@/service/home.js'
import AppHeader from '@/components/AppHeader.vue'
import HomeChannel from '@/components/HomeChannel.vue'
import HomeSwipe from '@/components/HomeSwipe.vue'
import HomeVideoList from '@/components/HomeVideoList.vue'
import  NavBar from '@/components/NavBar.vue';
import axios from 'axios'

// onMounted(async () => {
//     const swiperData = await getSwiperList()
//     console.log(swiperData);
//     const videosListData = await getVideosList()
// })

onMounted(() => {
  fetch('/swiperList')
    // .then(response => response.json())
    .then(data => {
      console.log(data);
    })
})
// // onMounted(() => {
// //   axios({
// //     url: '/swiperList',
// //     method: 'get'
// //   })
// //   .then((res) => console.log(res))

// //   axios({
// //     url: '/videosList',
// //     method: 'get'
// //   })
// //   .then((res) => console.log(res))
// // })
</script>

<style scoped>

</style>