var fs = require('fs');
var path = require('path');

var findLargest = (dir, cb) => {
    // console.log(dir);
    fs.readdir(dir, (err, files) => {

        if (err) {
            return cb(err);
            // 如何处理？ 要告诉cb 可能dir不存在 可能遍历文件时打开失败
        }
        // 找到最大文件？ 算法
        // [] 所有文件放入数组 再找到最大的一个
        var counter = files.length;
        var errored = false; // 未出错
        var stats = [];
        files.forEach((file, index) => {
            fs.stat(path.join(dir, file), (err, stat) => {
            
            // 文件的循环处理有先有后
            if(errored) return;
            if(err) {
                errored = true;
                return cb(err);
            }
            stats[index] = stat;
            if (--counter == 0) {
                //什么时候文件stat获取完
                var largest = stats
                    .filter(stat => stat.isFile())
                    .reduce((prev, next) => {
                        if (prev.size > next.size) 
                            return prev;
                        return next;
                    })
                cb(null, files[stats.indexOf(largest)]);
            }
        });
    })


    });
};

module.exports = findLargest;

