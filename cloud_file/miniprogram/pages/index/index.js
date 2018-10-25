const db = wx.cloud.database();
const userInfo = db.collection('userInfo')
Page({
  data: {
    userList: []
  },
  getUserInfo: function(result) {
    console.log(result);
    //openId 用户独有，拿不到，云函数可以拿到，好几个接口
    //云函数权限就是超级管理员
    wx.cloud.callFunction({
      name: 'getOpenId',
      complete: res => {
        userInfo.add({
          data: result.detail.userInfo
        }).then(res => {
          console.log(res);
        })
        
      }
    })
  },
  onShareAppMessage: (res) => {
    return {
      title: 'zx',
      path: '/pages/index/index',
      imageUrl: 'https://636f-codingdream-74b4e5-1256758450.tcb.qcloud.la/687434.png',
      success: res => {
        console.log('转发成功')
      },
      fail: res => {
        console.log('转发失败')
      }
    }
  }
})