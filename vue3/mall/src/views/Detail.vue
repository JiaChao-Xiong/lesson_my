<template>
  <div class="product-detail">
    <simple-header name="商品详情"></simple-header>
  </div>
</template>

<script setup>
import { onMounted, reactive } from 'vue';
import { useRoute } from 'vue-router';
import { getDetail } from '@/service/detail'
import SimpleHeader from '@/components/SimpleHeader.vue'
// router 是所有route的集合

const route = useRoute(); // 拿到当前的路由
const state = reactive({
  detail: {}
})

onMounted(async () => {
    // console.log(route);
    const {id} = route.params
    const { data } = await getDetail(id) // 异步
    state.detail = data
})
</script>

<style lang="stylus" scoped>

</style>