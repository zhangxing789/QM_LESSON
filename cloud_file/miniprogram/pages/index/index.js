const db = wx.cloud.database();
const userInfo = db.collection('userInfo')
Page({
  data: {
    userList: []
  },
  onLoad: function() {
    userInfo.get().then(res => {
      this.setData({
        userList: res.data
      })
    })
  },
  getUserInfo: function(result) {
    console.log(result);
    //openId 用户独有，拿不到，云函数可以拿到，好几个接口
    //云函数权限就是超级管理员
    wx.cloud.callFunction({
      name: 'getOpenId',
      complete: res => {
        //用户来了
        //一个用户生成多次记录 错误的
        //userInfo mysql _openid unique
        //userInfo 不要重复入库？
        //_openid 到userInfo里先查下，where 
        //true 不做
        //false add
        let openid = res.result._openId
        userInfo.where({
          _openid: openid
        }).count().then(res => {
          console.log(res);
        })


        userInfo.add({
          data: result.detail.userInfo
        }).then(res => {
          console.log(res);
          if(res.total == 0) {
            userInfo.add({
              data: result.detail.userInfo
            }).then(res => {
              console.log(res);
            })
          } else {
            wx.showToast({
              title: '不能重复添加'
            })
          }
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