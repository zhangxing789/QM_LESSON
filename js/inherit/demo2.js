function Person (name) {
    this.names = ['kevin', 'daisy'];

}
function Child () {
    //得到Person 的属性？this 永远只和函数运行的方式有关
    Person.call(this);
}

var child1 = new Child();
child1.names.push('zx');
console.log(child1.names);
var child2 = new Child();
console.log(child2.names);
console.log(Person.prototype);
