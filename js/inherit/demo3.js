function Parent (name) {
    this.name = name; //必须传
    this.colors = ['red', 'pink', 'green'];

}

Parent.prototype.getName = function () {
    console.log(this.name);
}

function Child (name, age) {
    Parent.call(this, name); // =super
    this.age = age;
    
}
Child.prototype = new Parent();
Child.prototype.constructor = Child;
Child.prototype.sayHello = function () {
    console.log(`Hi, I an ${this.name}, I am ${this.age} years old`);
}

//var child2 = new Parent('zx');
var child1 = new Child('zx', '18');
child1.colors.push('black');
var person1 = new Parent('zx');
child1.getName();
child1.sayHello();
console.log(child1.colors);
console.log(person1.colors);
console.log(Child.prototype.constructor);

