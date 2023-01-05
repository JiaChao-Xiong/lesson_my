- vue之前，js DOM 编程思想为主
    1. 查找DOM 元素 document.querySelector
    2. 对DOM 元素进行一些操作
    性能差  jQuery 优化了DOM api  仅此而已

- vue
    1. MVVM设计模式
    2. 组件思维
    3. 数据驱动思想


- todos 显示 所有和待完成数量
    {{todos.length}} {{......}}
    实现了功能，数据驱动
    可读性不好 可维护性排第一
    {{all}}  模板里view 应该尽量减少js 逻辑