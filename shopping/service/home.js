// 基于 network request 方法
import request from './network.js'
// getMultiData 向外暴露
export function getMultiData() {
    return request({
      url: '/home/multidata'
    })
  } 