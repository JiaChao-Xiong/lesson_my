# html5 拖拽效果

- github提供了 拖拽提交代码
    drag 文件件
    darg over 元素或区域的上空
    drag end 放开

- 资源加载的顺序
    1. css 放在头部，js 放置在尾部
        DOM树 + cssDOM  下载并执行 生成渲染树，快速显示页面
        优先
    2. js 执行会修改DOM  document.write
        下载和执行 堵塞 document.createElment
    3. script 又可以放在 head   defer/async


    - 浏览器 不是js js只是浏览器的一部分
        js 是单线程 
        defer   后台加载js 启用了多线程  不会阻塞文档下载
        async 推迟
    - js 要尽快执行，页面可以最快速度进入可交互状态\
        DOMContentLoaded 比 onload 更合适   img video 资源下载可能会延后onload

        async 和 defer 都不会影响静态页面的渲染， 但defer 可以很好的解决执行顺序问题，依赖问题
        async 如果不依赖，文件交互更快执行

- 盒子模型计算公式
    box-sizing  更改计算方式   标准盒子模型 IE模型
    box-sizing:border-box; 切换到IE盒模型的方式 w = 内容 + padding + border

    现代浏览器默认启用标准盒模型 chrome
    360 如果本地安转了Chrome webkit，标准盒模型，
    IE老版本 ，ie盒子模型
    edge 不再是老的IE   任然使用标准盒模型
    IE6/7/8老的，退出了历史舞台，IE盒模型

    IE盒模型 移动端动态分配内容， padding border 的列布局中
    相当简单

    没有小数点px 物理元器件，发光源 1排序 = 1 发光源

- drag效果
    1. 拖拽的元素，添加一个darfable="true" 鼠标的手型
        dragStart dragEnd 添加一些被拖拽的效果
    2. 容易元素