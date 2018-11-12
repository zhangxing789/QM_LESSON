1. wx.getSetting
    用户授权范围里查询基本信息使用权力 scope.userInfo
    因为接着要做别的事情 使用高阶函数
    success fail 

2. 未授权 弹出授权询问框 分支一
    已授权  分支二
        归并 去登录 this.getUserInfo