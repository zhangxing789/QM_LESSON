Function.prototype.bind2 = function (context) {
    // console.log('bind2');
    // 1. 如何返回被绑定的函数
    // 2. 如何让新函数在运行的时候， this指向 context
    var self = this;
    var args = Array.prototype.slice.call(arguments, 1);
    return function () {
        var bindArgs = Array.prototype.slice.call(arguments);
        self.apply(context, args.concat(bindArgs));
    }
}
var obj = {
    val: 1
}
const foo = function (name, age) {
    console.log(this.val);
    console.log(name);
    console.log(age);
}
const fooBar = foo.bind2(obj, 'zx');
fooBar(110);