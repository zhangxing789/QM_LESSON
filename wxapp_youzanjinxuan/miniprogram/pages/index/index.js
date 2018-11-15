const app = getApp()

Page({
    data: {
        index_swipe: [],
        indicator_dots:true,
        indicator_active_color:"#ff4444",
        autoplay:true,
        interval:2000,
        duration:1000
    },
    onLoad () {
        const index_swipe = app.globalData.index_swipe;
        this.setData ({
            index_swipe
        })
        
    }
})