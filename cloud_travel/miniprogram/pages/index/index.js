wx.cloud.init({
})
const db = wx.cloud.database();
Page({
  data: {
    ads: []
  },
  onLoad: function() {
    // console.log('fdfdf')
    db.collection("ads").get({
      success: res => {
        console.log(res)
        this.setData({
          ads: res.data
        })
        //云函数? 小程序的前端搞不定， openid 需要复杂计算
        //async await 三个数据库的综合查询
        //查询 select语句 mongodb no sql  只有find()
        //where 条件 orderby 排序 limit 限制条数 skip 忽略
        //取第二页数据 skip(10).limit(10)
        wx.cloud.database()
        wx.cloud.callFunction({
          name: "getTravelInfo",
          data: {
            count: 5,
            startIndex: 0
          }
        })
      },
      success: res => {
        console.log(res);
      }
    })
  }
})