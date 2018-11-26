function Parent () {
    this.name = 'kevin';


}
//原型链对象{ } prototype ？ 任何函数可以有的一个属性而已
Parent.prototype.getName = function () {
    console.log(this.name);
}


function Child () {

}

//原形链继承
Child.prototype = new Parent();
var child1 = new Child();
// child1.name.push('zx');
//child1.getName();

console.log(child1.name);



//父类 子类 prototype 属性 原型式继承
//Person 函数? 运行 内部有个this指针 -> new ?  Object js本没有类 只有对象
//

//Person.prototype.