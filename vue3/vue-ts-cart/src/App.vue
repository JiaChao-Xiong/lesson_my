<script setup lang="ts">
import { useProductStore, Product } from './store/products'

const productStore = useProductStore()
productStore.fetchAll()
</script>

<template>
<ul>
  <li v-for="product in productStore.all" :key="product.id">
    商品的名称{{ product.title }}
    商品的得分{{ product.rating.rate }}
    <img :src=" product.image" alt="" srcset="">
  </li>
</ul>
</template>

<style scoped>

</style>
