const app = getApp()
const globalData = app.globalData

Page({
  data: {
    auth: -1
  },
  onLoad (options) {
    //高阶函数 scope 小程序获得用户许可的整个 
    this.getScope(this.getUserInfo, () => {
      this.setData({
        auth: 0 
      })
    });

  },
  getUserInfo (data) {
    //console.log(data);
    //两种情况执行此函数 一种是 未授权点击了按钮的 data里应该由userinfo
    //一种是之前已经授权 globaldata
    if (!globalData.nickname || globalData.avatarUrl) {
      wx.getUserInfo({
        success: (res) => {
          this.setData({
            nickname: res.userInfo.nickName,
            avatarUrl: res.userInfo.avatarUrl
          })
          globalData.nickname = res.nickname
          globalData.avatarUrl = res.avatarUrl
          let openid = wx.getStorageSync('openid');
          if (openid) {

          } else {
            this.getUserOpenId(() => {

              }, () => {
                this.setData({
                auth: 0
              })
          })
          }
 
          
          
        }
      })
    }
  },
  getUserOpenId (success, fail) {
    console.log('getUserOpenId');
    wx.login({
      success: (res) => {
        console.log(res);
        wx.cloud.callFunction({
          name: 'jscode2session',
          data: {
            code: res.code
          },
          success: (res) => {
            //console.log(res);
            let { openid= '', session_key= ''} = res.result

            wx.setStorage({
              key: 'openid',
              data: openid,
            })
          }
        })
        /* jscode2session(res.code)
          .then(res => {
            console.log(res);
          }) */
      }
    })
  },
  //获取用户许可范围， 得到范围 该干嘛干嘛
  //success type function fail function
  //es6 
  getScope (success, fail, name = 'scope.userInfo') {
    //success('admin');
    wx.getSetting({
      success: (res) => {
        console.log(res);
        if (res.authSetting[name]) {
          //用户允许获取基本信息
          typeof success === 'function' && success();
        } else {
          typeof fail === 'function' && fail();
        };
         
      }
    })
  }

})