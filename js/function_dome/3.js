'use strict' //严格模式
// 变量的作用域
var name = '龙' //全局变量 window
// this 指向 调用方式
// js 变量属于 作用域 
function func() {
    y = 2; //不加var 全局 window 但严格模式下无法获取，报错
    var name = 'jay' //func 内部 局部变量
    {//块级作用域
        let x = 1; 
        var z = 3; //es5 var不支持块级作用域
        let name = '滔' 
    }
    console.log(y, z);
}
func();
console.log(y);