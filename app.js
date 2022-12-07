// app.js
// require 关键字
const WXAPI = require('apifm-wxapi'); // 引入第三方模块
console.log(WXAPI);
const { subDomain, merchantId} = require('config.js'); // 引入自建模块
console.log(subDomain);
App({
  onLaunch() {
    // 刚启动时
    // 初始化 WXAPI
    WXAPI.init(subDomain);
    WXAPI.setMerchantId(merchantId);
    // 测试一下请求
    // 商品分类接口 异步
    // WXAPI.goodsCategory()
    //     // then 等http 请求完成后
    //     .then(data => {
    //         // 拿到数据并打印
    //         console.log(data);
    //     })
  },
  globalData: {
    userInfo: null
  }
})
