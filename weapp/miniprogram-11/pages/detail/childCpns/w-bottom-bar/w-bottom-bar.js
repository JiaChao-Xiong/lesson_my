// pages/detail/childCpns/w-bottom-bar/w-bottom-bar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 为啥要向页面汇报？
    onAddCart() {
      this.triggerEvent('addcart')
    }
  }
})
