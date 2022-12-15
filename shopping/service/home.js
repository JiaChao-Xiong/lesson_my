import request from './network.js'

export const getMultiData = () => {
  // 返回一个什么东西， 上面有then 方法
  // 解决js 异步的良药
  return request({
    url: '/home/multidata',
  })
}

export const getProducts = (type, page) => {
  console.log(getProducts)
  return request({
    url: '/home/data',
    data: {
      type,
      page
    }
  })
}