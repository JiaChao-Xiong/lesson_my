- 请介绍下 var let const
    1. es6以前 用var声明变量，那时没有常量
        let const是 es6（2015）的变量和常量
    2. var let 声明变量
        const常量 如果是复杂数据类型，值还能变
    3. let 支持块级作用域
    4. var 声明的变量会挂载在window 全局对象上，会污染
        let 不会
    5. var 声明的变量会提升到所在作用域最上面（声明的提升，undefined）不会报错
        影响代码可读性
        let 不会提升
        function 声明的函数，会提升，值也会提升
        const func = function() {}