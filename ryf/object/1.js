// 对象就是属性和方法的集合
// OOP(Oibject Oriented Programming)
let obj = {
    name:'张三',
    sayHi() {
        console.log('hello');
    }
}
obj.name
// 对象
const zs = new Object();//js Object 函数 也是对象 一切对象的原型
// 对象字面量都是基于Object来构造，原型式面向对象
zs.name = '张三'
zs.sayHi = function() {
    console.log('hello');
}
console.log(zs)