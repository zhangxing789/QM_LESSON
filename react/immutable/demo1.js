const Immutable = require('immutable');

let obj1 = Immutable.Map({ a: 1, b: 2, c: 3 });// preState 上一个状态
let obj2 = obj1; // nextState
obj2 = obj2.set("b", 4);
// 传统的对象操作引用式赋值就不行，浅拷贝或深拷贝来处理，不用太大阵仗
console.log(obj1);
console.log(obj2);
console.log(obj1 == obj2);