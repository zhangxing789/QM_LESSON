/* var str = 'Visit Microsoft';
console.log(str.replace('Microsoft','alibaba'));
var money = '$dfg$hjk$';
console.log(money.replace(/\$/g,'￥')); */

let html = `abc{{username}}qwesdfss`;
let reg = /\{\{(.*)\}\}/gm;
console.log(reg.test(html), RegExp.$1, html.replace(RegExp.$1, 'zx'));