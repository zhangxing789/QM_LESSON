//Function {} 一切皆对象

function foo () {
    if (foo.t) return foo.t;
    foo.t = new Date();
    return foo.t;
}

console.log(foo());
setTimeout (() => {
   
    console.log(foo());
}, 2000)