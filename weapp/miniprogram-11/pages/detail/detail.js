// pages/detail/detail.js
import { 
  getDetail,
  getRecommends
} from '../../service/detail.js'
const app = getApp();

import { 
  GoodsBaseInfo, 
  GoodsShopInfo,
  ParamInfo
} from '../../models/detail.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    iid: 0,
    topImages: [],
    baseInfo: {},
    shopInfo: {},
    commentInfo: {},
    recommends: []
  },
  // 被组件调用
  onAddCart() {
    // console.log('111');
    const obj = {}
    obj.iid = this.data.iid
    obj.imageURL = this.data.topImages[0];
    obj.title = this.data.baseInfo.title;
    obj.desc = this.data.baseInfo.desc;
    obj.price = this.data.baseInfo.realPrice;
    app.addToCart(obj);
    wx.showToast({
      title: '加入购物车成功'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log('onload from detail');
    // 1. 解构参数
    const iid = options.iid;
    this.setData({
      iid
    })
    // 请求页面数据
    this._getDetailData();
    this._getRecommendsData();
  },
  _getRecommendsData() {
    getRecommends()
      .then(res => {
       this.setData({
         recommends: res.data.list
       })
      })
  },
  _getDetailData() {
    getDetail(this.data.iid)
      .then(res => {
        console.log(res);
        const data = res.result;
        const topImages = data.itemInfo.topImages;
        // 建模
        const baseInfo = new GoodsBaseInfo(data.itemInfo,
           data.columns, data.shopInfo.services);
        const shopInfo = new GoodsShopInfo(data.shopInfo);
        const detailInfo = data.detailInfo;
        const paramInfo = new ParamInfo(data.itemParams.info, 
        data.itemParams.rule)
        let commentInfo = {}
        if (data.rate && data.rate.cRate > 0) {
          commentInfo = data.rate.list[0];
        }

        this.setData({
          topImages,
          baseInfo,
          shopInfo,
          detailInfo,
          paramInfo,
          commentInfo
        })
      })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    console.log('unload, detail');
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})