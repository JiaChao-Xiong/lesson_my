// pages/cart/cart.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cartList: [],
    totalPrice: 0,
    totalCounter: 0,
    isSelectAll: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log('load', app.globalData.cartList);
    this.setData({
      cartList: app.globalData.cartList
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
  changeData() {
    let cartList = app.globalData.cartList;
    // 计算机
    // 代码的可读性更强
    // for (let item of cartList) {
    //   totalPrice += item.price * item.count
    // }
    // 累加和
    let totalCounter = 0;
    let totalPrice = cartList.reduce(
      (pre, cur) =>　{
        totalCounter++
        return pre + cur.price * cur.count
    }
    , 0)
    
    const selectAll = !cartList.find(item => !item.checked);

    this.setData({
      cartList,
      totalPrice,
      totalCounter,
      isSelectAll: selectAll
    })
  },
  onShow() {
    // console.log(app.globalData, '////');
    this.changeData();

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
    console.log('unload, cart');
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