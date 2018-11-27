// new? 实例化过程是怎么底层的？
// otaku类 抽象的概念 等待被new


// 宅
function Otaku(name, age) {
    this.name = name;
    this.age = age;
    this.habit = 'Games';
}

Otaku.prototype.strength = 60;
Otaku.prototype.sayYourName = function () {
    console.log(' I am ' + this.name);
}

// new
// 1. 返回一个实例{} 声明，拥有Otaku函数中 加的那些属性
// 2. 实例可以访问到Otaku.prototype 中的属性

// new ？ js 关键字
function objectFactor (fn, ...args) {
    console.log(arguments);
    var obj = new Object(), // 1 返回一个新的空的对象
    Constructor = [].shift.call(arguments);
    console.log(typeof Constructor);
    // 2 this 要指向新的对象
    // 3 让constructor 执行
    //obj 上拥有constructor 的属性和方法？
    //函数也是对象
    obj.__proto__ = Constructor.prototype;
    Constructor.apply(obj, arguments);
    return obj;
    //return 一个对象;
}
//1 构造函数 2 其余是构造函数需要的参数
const dd = objectFactor (Otaku, 'kevin', 18);
console.log(dd.name);
dd.sayYourName();