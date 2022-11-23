// 构造函数
// js没有class，不是传统面向对象OOP
// constructor
// js function 代替 class类的封装
// 基于对象
function Person(name,age) {
    this.name = name;
    this.age = age;
}
// 实例化
const xlz = new Person('小玲子', 16);
console.log(xlz.name);
