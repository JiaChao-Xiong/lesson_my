// 内存分配  放在栈内存  stack
let x = 1, y = 2; // 简单
let c = x;
    c = 5; // 值的拷贝
    console.log(x); // 1
// 内存分配   对象放在堆内存  heap
let o = {name: '叶'}; // 对象 引用
let b = o; // 并没有值的拷贝，引用
b.name = '飞飞';
console.log(o.name); // 飞飞
let z;
z = x;
x = y;
y = z;
console.log(x, y); 