// 作用域链
// scopeGlobal {}
var a = 1;
function foo() {
    // scope 有点像prototype
    // scopeFoo.a
    // scope 作用域
    // var a = 2;
    console.log(a);
}
foo();