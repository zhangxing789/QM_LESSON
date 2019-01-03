var arr = ['old', 1, true, null, undefined];
var new_arr = arr.slice(); //concat slice 数组里面少数返回新数组的方法 浅拷贝
new_arr[0] = 'new';
console.log(new_arr, arr);

// reducer 纯函数 输入一个参数结果一定确定