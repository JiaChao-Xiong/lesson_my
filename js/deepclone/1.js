let arr1 = [1,2,3,4];
// let arr2 = arr1; // 引用式赋值
let arr2 = arr1.slice(0);
let arr3 = arr1.concat()
// console.log(arr2);
arr2[1] = 6
arr3[2] = 9
console.log(arr1,arr2);