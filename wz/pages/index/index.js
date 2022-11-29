// index.js
// 获取应用实例
const app = getApp()

Page({
//  数据，{{}} 驱动模板显示
data: {
   nav: [],
   heroList: []
  },
//   生命周期事件
  onLoad() {
    // 从客户端 去到 服务器端取数据
    // url https://www.fastmock.site/mock/3ddf189404196ed14cb6531bf3596081/vue/hero
    // js 主动的向api发送请求，把数据请求到本地来
    // 微信 request
    wx.showLoading({
      title: '加载中...',
    })
    wx.request({// api
        // 服务器数据url
        url: 'https://www.fastmock.site/mock/3ddf189404196ed14cb6531bf3596081/vue/hero',
        // 成功请求后 
        // 数据给res
        success: (res) =>{
         console.log(res)
         wx.hideLoading();
        // http statusCode  200 服务器端没有任何错误发生
        //  if(res.statusCode === 200)
        if (res.errMsg === 'request:ok'){
        // 解析res数据
        // let nav = res.data.nav;
        // console.log(nav);
        // let heroList = res.data.heroList;
        // console.log(heroList);
        // es6 语法 解构
        let data = res.data;
        // 解构
        let { nav, heroList } = data   // json
        // console.log(nav, heroList)
        // console.log(this,'///');
        // API 设置数据
        // this 指向Page对象
        // setDate 方法
        // this.data.nav = nav; 无法设置数据
        // 设置 data 数据，必须调用 小程序 this.setData({})
        // 设置的同时 自动重新渲染模板
        this.setData({
            nav:nav,
            heroList:heroList
        })
         }
        },
        // 失败后的回调
        // 箭头函数 es6 函数的新写法
        fail: () => {
            console.log('error');
        }
      })
  }
})
