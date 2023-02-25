import Mock from 'mockjs'
import swiperList from './data/swiperList'
import videosList from './data/videosList'

// - 假接口满足什么? 数据 url
Mock.setup({
    timeout: '50-1000' // 随机的延迟时间, 模式请求耗时
})
// 轮播图 url /swiperList
Mock.mock(/\/swiperList/, 'get', () => {
    return {
      code: 0,
      result: swiperList
    }
})

Mock.mock(/\/videosList/, 'get', () => {
    return {
      code: 0,
      result: videosList
    }
})
