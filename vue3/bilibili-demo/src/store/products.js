import { defineStore } from 'pinia'
import { getProducts } from '@/service/shop'; // alias 架构的想法
// 创建一个子仓
export const useProductsStore = defineStore('products', {
    state: () => ({ // 中央状态
        all: []
    }),
    actions: {
      // 走接口
        async loadAllProducts () {
            const { result } = await getProducts()
            // console.log(result);
            this.all = result
        }
    },
    getters: {

    }
})