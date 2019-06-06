//app.js
App({
  onPageNotFound() {
    //方法体，代码段
    console.log("页面没有找到");
  },
  onLaunch: function () {
    console.log("小程序已经初始化完毕");
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        console.log(res);
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息,访问微信服务器，获取用户信息
    wx.getSetting({
      success: res => {
        console.log(res);
        //如果res.authSetting时空的，说明用户没有授权
        //如果用户授权成功，小程序，将会把用户授权信息，保存在小程序缓存之中
        if (res.authSetting['scope.userInfo']) {
          console.log("授权成功！");
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          //从服务端拉去用户数据.前提是已经授权
          wx.getUserInfo({
            success: res => {
              console.log(res.userInfo);
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo//把用户信息保存在全局数据对象中

              // 由于 getUserInfo 是网络请求（网络延迟具有延迟性），可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.getUserInfoCallback) {
                console.log("执行自定义用户获取信息")
                this.getUserInfoCallback(res)
              }
            }
          })
        }
      }
    })
  },
  //小程序全局数据对象
  globalData: {
    userInfo: null//专门存放用户相关信息
  }
})