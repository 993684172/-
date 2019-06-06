// pages/goods/goods.js
Page({
  data: {
    
  },
  selectMenu: function (e) {
    var index = e.currentTarget.dataset.itemIndex;
    this.setData({
      toView: 'order' + index.toString()
    })
    console.log(this.data.toView);
  },
  
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    this.setData({
      payDesc: this.payDesc()
    });
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})
