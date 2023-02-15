import request from './network.js'

export const getMultiData = () => {
  // 返回一个什么东西， 上面有then 方法
  // 解决js 异步的良药
  return request({
    url: '/home/multidata',
  })
}
// http://152.136.185.210:7878/api/hy66
// /home/data?page=${page}&type=${type}
export const getProduct = (type, page) => {
  return request({
    url: '/home/data',
    data: {
      type, 
      page
    }
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