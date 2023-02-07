<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#1baeae">
    <van-swipe-item v-for="(item, index) in list" :key="index">
        <img :src="item.carouselUrl" alt="" />
    </van-swipe-item>
  </van-swipe>
</template>

<script setup>
// vue 渐进式的开发框架
const props = defineProps({
    list: {
        type: Array,
        value: []
    }
})
</script>

<style lang="stylus" scoped>
.my-swipe
  img
    width 100%
    height 100%
</style>