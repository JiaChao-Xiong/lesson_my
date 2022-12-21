// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    active: 0,
    products:[
      {
        "type": "0",
        "title": "【郭聪明同款】Corade 大恐龙短袖T恤 情侣款",
        "price": "￥139",
        "doh": "81559人付款",
        "pic": "https://cdn.poizon.com/source-img/origin-img/20201205/b9b4c1ae79704617ae76125f76ad09b7.jpg?x-oss-process=image/format,webp"
      },
      {
        "type": "0",
        "title": "【七夕礼物】SK-II 神仙水精华护肤套装 5件",
        "price": "￥429",
        "doh": "66082人付款",
        "pic": "https://cdn.poizon.com/pro-img/origin-img/20210715/74ecf57107eb4d53a51ba9172e55ab7d.jpg?x-oss-process=image/resize,m_lfit,w_300/format,webp"
      },
      {
        "type": "0",
        "title": "【七夕礼物】CASIO 卡西欧 BABY-G 冰激淋",
        "price": "￥329",
        "doh": "28913人付款",
        "pic": "https://cdn.poizon.com/source-img/origin-img/20201224/503e2864a66f4bd0b2faea6e882ab4d6.jpg?x-oss-process=image/resize,m_lfit,w_300/format,webp"
      },
      {   
        "type": "0",
        "title": "【七夕礼物】Vans Classic Slip-On 黑白棋盘",
        "price": "￥309",
        "doh": "292450人付款",
        "pic": "https://cdn.poizon.com/source-img/origin-img/20201225/4a194f476de947efbe65d19510a52f6c.jpg?x-oss-process=image/resize,m_lfit,w_300/format,webp"
      },
      {
        "type": "0",
        "title": "【七夕礼物】【Jennie 同款】Converse Chuck",
        "price": "￥379",
        "doh": "254547人付款",
        "pic": "https://cdn.poizon.com/pro-img/origin-img/20210504/08ba158fea0648fba8ec7a93edf6cef7.jpg?x-oss-process=image/resize,m_lfit,w_300/format,webp"
      },
      {
        "type": "0",
        "title": "【七夕情侣款】SSURPLUS x PCMY 联名款",
        "price": "￥129",
        "doh": "110346人付款",
        "pic": "https://cdn.poizon.com/pro-img/origin-img/20210701/79eba8225c2b46538b00b5ed79816af8.jpg?x-oss-process=image/resize,m_lfit,w_300/format,webp"
      },
      {
        "type": "0",
        "title": "【七夕礼物】Disney 迪士尼 草莓熊 毛绒玩具",
        "price": "￥109",
        "doh": "17478人付款",
        "pic": "https://cdn.poizon.com/pro-img/origin-img/20210713/b75acb6dc5c541d2a91d2b913c5e46d4.jpg?x-oss-process=image/resize,m_lfit,w_300/format,webp"
      },
      {
        "type": "0",
        "title": "【七夕礼物】tokidoki 淘奇多奇 独角兽 TD02",
        "price": "￥169",
        "doh": "17727人付款",
        "pic": "https://cdn.poizon.com/pro-img/origin-img/20210524/1a0a9993cdb0494da84c4e5b0b718f98.jpg?x-oss-process=image/resize,m_lfit,w_300/format,webp"
      }
    ]
  },
  gotoSearch() {
    wx.navigateTo({
      url: '/pages/search/search'
    })  
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
