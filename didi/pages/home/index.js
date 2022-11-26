// pages/home/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      movies: []
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
      wx.showLoading({
        title: '加载中...',
      });
      this.loadData();
    },
    loadData() {
      wx.request({
        url: 'https://www.fastmock.site/mock/53cc5567312023f233e4dec977f5c347/weipiao/home',
        success: (res) => {
        //   console.log(res);
          if (res.statusCode === 200) {
            // es6 解构
            let { movies } = res.data.data
            this.setData({
              movies: movies
            })
            wx.hideLoading();
          }
        }
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