<template>
    <div id="home-wrapper">
        <header class="home-header wrap">
            <router-link to="/category">
                <i class="nbicon nbmenu2"></i>
            </router-link>
            <div class="header-search">
                <span class="app-name">新蜂商城</span>
                <i class="nbicon nbSearch"></i>
                <router-link 
                    class="search-title"
                    to="/product-list?from=home"
                >
                山河无恙，人间皆安
                </router-link>
            </div>
            <router-link class="login" to="/login">登录</router-link>
        </header>
        <nav-bar />
        <swiper :list="state.swiperList"/>
        <section class="category-list">
            <div v-for="item in state.categoryList" :key="item.categoryId">
                <img :src="item.imgUrl" alt="">
                <span>{{ item.name }}</span>
            </div>
        </section>
        <section class="goods">
          <header class="goods-header">新品上线</header>
          <van-skeleton title :row="3" :loading="state.loading">
            <!-- slot 插槽 -->
            <div class="goods-box">
              <goods-item 
                v-for="item in state.newGoodses" 
                :key="item.goodsId"  
                @click="gotoDetail(item.goodsId)"
                :goods="item"/>
            </div>
          </van-skeleton>
        </section>
        <section class="goods">
          <header class="goods-header">热销商品</header>
          <van-skeleton title :row="3" :loading="state.loading">
            <!-- slot 插槽 -->
            <div class="goods-box">
              <goods-item 
                v-for="item in state.hotGoodses" 
                :key="item.goodsId"  
                @click="gotoDetail(item.goodsId)"
                :goods="item"/>
            </div>
          </van-skeleton>
        </section>
        <section class="goods">
          <header class="goods-header">推荐商品</header>
          <van-skeleton title :row="3" :loading="state.loading">
            <!-- slot 插槽 -->
            <div class="goods-box">
              <goods-item 
                v-for="item in state.recommendGoodses" 
                :key="item.goodsId"  
                @click="gotoDetail(item.goodsId)"
                :goods="item"/>
            </div>
          </van-skeleton>
        </section>
    </div>
</template>

<script setup>
import { onMounted, reactive } from 'vue';
import {  useRouter } from 'vue-router'
import { getHomeData } from '../service/home'
import { showLoadingToast, closeToast } from 'vant';
import NavBar from '~/NavBar.vue'
import Swiper from '~/Swiper.vue'
import GoodsItem from '~/GoodsItem.vue'

const router = useRouter() // 把全局对象给我们
// import SubHeader from '../components/SubHeader.vue'
// es8 异步的高级能力 async await
// 挂载后再发送api请求，提升性能，不会去争抢挂载显示
// data 响应式的数据
// 数据的值对应当前的组件的状态
// 值会改变 对应新的状态
// 数据和组件1的状态是一一对应关系
const state = reactive({
    swiperList: [],
    newGoodses: [],
    hotGoodses: [],
    recommendGoodses: [],
    loading: true,
    categoryList: [
    {
      name: '新蜂超市',
      imgUrl: 'https://s.yezgea02.com/1604041127880/%E8%B6%85%E5%B8%82%402x.png',
      categoryId: 100001
    }, {
      name: '新蜂服饰',
      imgUrl: 'https://s.yezgea02.com/1604041127880/%E6%9C%8D%E9%A5%B0%402x.png',
      categoryId: 100003
    }, {
      name: '全球购',
      imgUrl: 'https://s.yezgea02.com/1604041127880/%E5%85%A8%E7%90%83%E8%B4%AD%402x.png',
      categoryId: 100002
    }, {
      name: '新蜂生鲜',
      imgUrl: 'https://s.yezgea02.com/1604041127880/%E7%94%9F%E9%B2%9C%402x.png',
      categoryId: 100004
    }, {
      name: '新蜂到家',
      imgUrl: 'https://s.yezgea02.com/1604041127880/%E5%88%B0%E5%AE%B6%402x.png',
      categoryId: 100005
    }, {
      name: '充值缴费',
      imgUrl: 'https://s.yezgea02.com/1604041127880/%E5%85%85%E5%80%BC%402x.png',
      categoryId: 100006
    }, {
      name: '9.9元拼',
      imgUrl: 'https://s.yezgea02.com/1604041127880/9.9%402x.png',
      categoryId: 100007
    }, {
      name: '领劵',
      imgUrl: 'https://s.yezgea02.com/1604041127880/%E9%A2%86%E5%88%B8%402x.png',
      categoryId: 100008
    }, {
      name: '省钱',
      imgUrl: 'https://s.yezgea02.com/1604041127880/%E7%9C%81%E9%92%B1%402x.png',
      categoryId: 100009
    }, {
      name: '全部',
      imgUrl: 'https://s.yezgea02.com/1604041127880/%E5%85%A8%E9%83%A8%402x.png',
      categoryId: 100010
    }
  ],
})

const gotoDetail = (id) => {
  // /detail/:id
  // console.log(id, 'gotoDeatils');
  router.push({
    path: `/detail/${id}`
  })
}

onMounted(async() => {
    showLoadingToast({
        message: '加载中...',
        forbidClick: true
    })
    const { data } = await getHomeData() // await  promise  api serverice
    console.log(data);
    state.swiperList = data.carousels
    state.newGoodses = data.newGoodses
    state.hotGoodses = data.hotGoodses
    state.recommendGoodses = data.recommendGoodses
    state.loading = false
    closeToast()
    // console.log(state.swiperList);
})
</script>

<style lang="stylus" scoped>
@import '../common/style/mixin'
// 可以一次性设置widht height 的mixin 混合
// stylus 提供的tab 缩进 css 提供了模块化的能力？  
#home-wrapper
    padding-bottom  2rem
.home-header
    position fixed
    top 0
    left 0    
    line-height 1.33333rem
    padding 0 .4rem
    font-size 0.4rem
    color #fff
    z-index 10000
    wh(100%, 1.33333rem)
    fj()
    .nbmenu2
        color $primary
    .header-search 
        display flex
        width 74%
        box-sizing content-box
        height 0.53333rem
        line-height 0.53333rem
        margin 0.26667rem 0
        padding 0.1333rem 0
        color #232326
        border-radius .53333rem
        background rgba(255, 255, 255, .7)
        .app-name
            padding 0 0.26667rem
            color $primary
            font-size 0.53333rem
            font-weight bold
            border-right .026667rem solid #666
        .icon-search
            padding 0 .26667rem
            font-size: .45333rem
        .search-title
            font-size .32rem
            color #666
            line-height 0.56rem
    .login
        color $primary
        line-height 1.38667rem
        
.category-list
    display flex
    flex-shrink 0
    flex-wrap wrap
    width 100%
    padding-bottom 0.34667rem
    div
        display flex
        flex-direction column
        width 20%
        text-align center
        img
            wh(.96rem, .96rem)
            margin .34667rem auto .213333rem auto
.goods
  .goods-header
    background #f9f9f9
    height 1.3333rem
    line-height 1.333rem
    text-align center
    color $primary
    font-size .426667rem
    font-weight 500
  .goods-box
    fj(flex-start)
    flex-wrap wrap
    
</style>