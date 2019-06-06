//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  //页面加载完毕，页面周期回调函数
  onLoad: function () {
    console.log("页面加载完毕...");
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
      //getUserInfo,在当前小程序可以使用,那么就在小程序对象上绑定一个userInfoReadyCallback回调方法
      //userInfoReadyCallback是自定义的
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.getUserInfoCallback = res => {
        console.log("在授权界面，将getUserInfoCallback注册到app小程序上，然后再将授权后的用户信息，显示出来");
        // this.setData({
        //   userInfo: res.userInfo,
        //   hasUserInfo: true
        // })
        this.goToHome();
      }



      //箭头函数:res -->{}
      //等价于:如下代码:

      // app.getUserInfoCallback = founction(res){
      //   this.setData({
      //     userInfo:res.userInfo,
      //     hasUserInfo:true
      //   })

      // }




    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {

          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  onShow() {
    console.log("页面提示-onShow");

  },

  tap: function (e) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },
  onReady() {
    console.log("组建渲染完毕,执行-onReady");
  },
  //获取用户信息的方法:组件中的方法
  // 对于在模板上的代码：bindgetUserInfo=getUserInfo
  //执行异步请求，从网络上后去用户信息
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    // this.setData({
    //   userInfo: e.detail.userInfo,
    //   hasUserInfo: true
    // })

    //注意：没有授权的状态
    //如果授权成功则默认跳转首页
    //注意这里如果使用navigateTo就无效
    this.goToHome();
  },

  goToHome() {

    wx.switchTab({

      url: "../../pages/goods/goods",

    })


  }
})
