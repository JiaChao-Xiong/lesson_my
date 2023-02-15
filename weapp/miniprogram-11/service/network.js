// 所有请求的封装
import { baseURL, timeout } from './config.js'
function request(options) {
  wx.showLoading({
    title: '数据加载中...',
  })
  // 许愿
  return new Promise((resolve, reject) => {
    // 请求完成后把数据返回 thenable 
    // 耗时任务
    console.log(baseURL + options.url);
    // 请求发送出去了
    wx.request({
      url: baseURL + options.url,
      timeout,
      data: options.data || {},
      // 成功后？ 
      success: function(res) {
        resolve(res.data)
      },
      fail: function(err) {
        reject(err)
      },
      // 不管你成功或是失败， 完成了
      complete: function() {
        wx.hideLoading()
      }
    })
  })
}

export default request