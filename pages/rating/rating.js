// pages/rating/rating.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
        toView: '0',
        status: 0,
        all:"99+",
        good:"88",
        bad:"1",

        ratings:[
          {
            "name": "1**********8",
            "date":"2018-11-24",
            "ratingss":"挺好吃的，不错挺好。"
          },
          {
            "name": "1**********9",
            "date": "2018-11-21",
            "ratingss": "味道一如既往的好吃。"
          },
          {
            "name": "1**********5",
            "date": "2018-11-19",
            "ratingss": "准时送达，态度很好，配送快"
          },
          {
            "name": "1**********7",
            "date": "2018-11-19",
            "ratingss": "第一次吃就爱上了你们家粥的味道"
          },
          {
            "name": "1**********6",
            "date": "2018-11-18",
            "ratingss": "味道正宗，口味纯正"
          },
          {
            "name": "1**********3",
            "date": "2018-11-15",
            "ratingss": "很好吃"
          }
        ]
        
  },


  selectMenu: function (e) {
    var index = e.currentTarget.dataset.itemIndex;
    this.setData({
      toView: 'order' + index.toString()
    })
    console.log(this.data.toView);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})