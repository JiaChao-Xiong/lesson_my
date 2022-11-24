# JS 考试重点之手写代码

- push
    数组的功能？
    哪两种数据结构的什么操作?
    线性和非线性
    [] 或链表   队列 FIFO/栈 FILO
    [{value: 1, next:}, {value:2, next:}]   不连续的
    [1, 2, 3]   初始地址，arr[0] arr[1] arr[2] 连续的，new Array(1000000) 初始分配内存空间太大造成浪费 内存溢出
    物理地址?
    arr[i] = &arr + (i-1)*2

- js和其他语言不同的地方
    原型的概念prototype
    [1,2,3](实例)   Array(类)
    1. 声明数组  在js里有多种方法
        [1,2,3]   new Array(1,2,3)
    2. 数组对象实例添加一个公有方法
        js里面，Array 类 prototype 对象 添加自定义的push2
        Array.prototype
    3. 在对象的方法中， this 关键字指向谁？
        指向调用该方法的对象
    4. arguments 代表函数的参数对象 

    