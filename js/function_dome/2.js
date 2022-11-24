// class Person {
//     constructor(name,age) {
//         this.name = name;
//         this.age = age;
//     }
// }
// 构造函数 对象添加属性,
// 共享 类的方法
// 构造函数
'use strict';

var name = '张三';
var age = 17;

function Person(name,age) {
    this.name = name;
    this.age = age;
}
Person.prototype.sayHellow = function(){
    console.log(`hi,我是${this.name},今年${this.age}`)
    // console.log("hi,我是" + this.name + ',今年' + this.age);
}
// 
const jay  = new Person('杰',18);//构造函数被运行
jay.sayHellow();//对象函数的方法被运行
const hu  = new Person('胡',18);
hu.sayHellow();
console.log(jay.name);

const fn = jay.sayHellow;
fn(); //普通函数被调用