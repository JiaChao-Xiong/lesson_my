# 从代码到能力的转变
- 把一个项目完整的走一遍 
  不写代码  读代码 理解小程序完整项目开发

- pages
  - components 
    组成页面的组件 
    把一部分页面的功能分离， 有利于以后的复用
  - 标签  view  div p。。。。 

- component  语法重点
  1. 思想
    组件看过去复杂， 封装一次， 多次复用， 到处使用 
  2. 地位
    组件仅次于页面，是高级使用技巧 
  3. 创建
    和页面差不多 
  4. 引入
    页面要使用组件， 需要引入 usingComponents   / 根目录
  5. properties  属性  
    page  和components 通信的约定    {
      type:   Array  类型
      value: []  默认值
    } 
      <w-tab-control  title="" bind:/>
      bind: 绑定事件 
  6. 私有属性
    data    自己的运转  
  7. 向外通信
    this.triggerEvent('event_name', {index: 1});

- scroll-view
  1. 移动端页面 优先考虑scroll-view 
    可滚动内容的容器
  2. scroll-top   0
    回到顶部
  3. bindscroll
    滚动事件 频繁
  4. bindscrolltolower  滚动底部 加载更多  
    bindscrolltoupper  滚动顶部   
  5. scroll-with-animation 配合 scroll-top 0 

- 数据请求事项
  1. 找到生命周期
    onLoad 最适合
  2. 不要在onLoad 写太多代码， 有可能有很多事情要做， 用函数封装
    取数据的  getData  fetchData  。。。。。
  3. 高手还会把 数据请求 模块化独立于Page 
    service 网络服务 新的目录 
  4. 模块化  import    from ''

- 列表数据渲染
  1. scroll-view 
    bindscroll  回到首页？ 
    bindscrolltolower="loadMore"  底部， 加载更多
    concat 分页   ?page=1
    切换tab ?type=

- 小程序的架构
  - components  组件 
    细化界面开发， 复用
  - service 跟api 接口相关  
    直接wx.request 缺点？ 不易管理
    统一管理

- 接入接口
  page  home 不直接调用wx.request 
  从service 提供  
  映入模块
  import {
    getMultiData
  } from '../../service/home.js'

  getMultiData  得是支持then  函数
  函数返回值是Promise 实例就可以
  // 向外提供了getMultiData 方法   service/home.js 
  <!-- return new Promise(() => {
    // network.js 会提供一个通用的 request 方法给我们

  }) -->
  return request({
    url: '/home/multidata'
  })

  request 函数 必须返回promise 实例  
  异步， 请求完成 success timeout 解决掉 promise 

- 页面开发， 新思路
  页面不在由标签构成  , 而由组件构成
  把一个页面任务， 分成若干组件开发任务， 
  - 共享， 多个页面  /components
  - 不共享，只在特定的页面上出现， 页面简洁， 就放到page目录下