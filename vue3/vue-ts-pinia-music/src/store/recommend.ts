import { ref } from "vue"
import { defineStore } from "pinia"
import { getBanners } from "@/service/recommend"

export const useRecommendStore = defineStore('recommend', () => {
    const banners = ref([])
    const getBannersData = async () => {
        const data = await getBanners()
        console.log(data)
        banners.value = data.banners
    }
    return {
        banners,
        getBannersData
    }
})