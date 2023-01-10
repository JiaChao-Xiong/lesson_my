// const people = new Set(); // 实例化了Set 内置数据结构
// people.add('Wes');
// people.add('世龙');
// people.add('世龙');
// console.log(people);
const people = new Set([1,2,3,1]); // Array  去重
console.log(people,people.size);
for (let person of people) {
    console.log(person);
}

const students = new Set(['Wes',''])