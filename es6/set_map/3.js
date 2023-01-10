// 哈希表 O(1) key => val   {}

const dogs = new Map(); // {}

dogs.set('Snickers',3);
// dogs.Snickers = 3
dogs.set('Sunny',2);
dogs.set('Hugo',10);
let obj = {name: 'web bos'};
// 
dogs.set(obj,11)
// console.log(dogs);
dogs.forEach((val,key) => {console.log(val,key);})

for (const[key,val] of dogs) {
    console.log(key,val);
}