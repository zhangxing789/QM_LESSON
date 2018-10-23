wx.cloud.init ({
  env: 'zx1997'
})

const db = wx.cloud.database()
const _ = db.command
const productsCollection = db.collection('Product')



Page({
  onPullDownRefresh: function() {
    productsCollection.get().then(res => {
      this.setData({
        products: res.data
      }, res => {
        console.log('数据更新完成')
        wx.stopPullDownRefresh();
      })
    })
  },
  onReachBottom: function() {
    console.log('上拉加载更多');
  },
  data: {
    page: 1,
    products: []
  },
  onLoad: function() {
    productsCollection
      .get()
      .then(res => {
        this.setData({
          products: res.data
        })
        console.log(res.data);
      })
  },
  click: function(event) {
    /* update view + 1 */

    productsCollection.doc(event.currentTarget.dataset.id)
      .update({
        data: {
          view: _.inc(1)
        }
      })
  }

}) 