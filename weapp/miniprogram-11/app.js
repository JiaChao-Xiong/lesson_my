// app.js
App({
  onLaunch() {
    wx.getStorage({
      key: 'cart',
      success: (res) => {
        this.globalData.cartList = res.data
      }
    })
  
  },
  addToCart(obj) {
    // 之前买过不？ 数量加 + 1
    // 加入cartList 
    //  es6 
    const oldInfo = this.globalData.cartList
      .find(item => item.iid === obj.iid );
    console.log(oldInfo, '????');
    if (oldInfo) {
      oldInfo.count++;
    } else {
      obj.count = 1
      obj.checked = true // 默认勾选
      this.globalData.cartList.push(obj)
    }
    wx.setStorage({
      key: 'cart',
      data: this.globalData.cartList
    })
  },
  globalData: {
    cartList: []
  }
})
