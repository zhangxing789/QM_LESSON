function Parent (name) {
    this.name = name;
}

let p = new Parent('zx');
console.log(Parent.prototype);
console.log(p.__proto__);
console.log(Parent.__proto__);