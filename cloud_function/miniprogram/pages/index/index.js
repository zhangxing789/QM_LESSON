Page({
  //云函数是独立的node环境，新建 安装依赖 上传
  //云开发能力，
  http: function() {
    //云函数的执行是异步的 main函数 async 在这个函数内部将发生耗时的事情 ajax请求，文件上传 index.js
    //同步写法
    wx.cloud.callFunction({
      name: 'http',
      data: { a: 1}
    }).then(res => {
      console.log(res.result);
    }) 
  }
})