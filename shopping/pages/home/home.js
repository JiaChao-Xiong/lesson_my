// pages/home/home.js
// 模块化
import {
  getMultiData,
  getProducts
} from '../../service/home.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: [
    ],
    showTabControl: false,
    titles: ["流行", "新款", "精选"],
    topPosition: 0,
    page: 1,
    recommends: []
  },
  tabClick(e) {
    console.log(e);
  },
  loadMore() {
    console.log('到底了');
  },
  scrollPosition(e) {
    // console.log(e);
    const position = e.detail.scrollTop;
    if (position > 300) {
      this.setData({
        showTabControl: true
      })
    }
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 请求数据的封装
    this._getData();
  },
  _getData() {
    this._getMultiData();
    this._getGoods();
  },
  _getGoods() {
    getProducts('new', 1)
      .then(res => {
        console.log(res)
      })
  },
  _getMultiData() {
    // 耗时的http 请求任务
    getMultiData() // promise 拿到接口返回的数据
      // 拿到数据之后
      .then(res => {
        console.log(res)
        // const banners = [];
        // res.data.banner.list.forEach(item => {
        //   banners.push(item.image)
        // })
        // console.log(banners);
        // map 可以由一个数组得到一个新的数组 
        const banners = res.data.banner.list.map(item => {
          // 每一次都执行
          // 返回值会组成新的数组
          return item.image
        })
        this.setData({
          banners: banners,
          recommends: res.data.recommend.list
        });
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