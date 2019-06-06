// common/components/menu/menu.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    //热销分块
    goods: [
      {
        "name": "热销：大家喜欢吃，才是真好吃",
        "type": -1,
        "foods": [
          {
            "name": "皮蛋瘦肉粥",
            "price": 13,
            "oldPrice": "20",
            "description": "",
            "sellCount": 229,
            "Count": 0,
            "rating": 100,
            "icon": "../../image/pdsrz.png",
            "image": "../../image/pdsrz.jpg"
          },



          {
            "name": "扁豆焖面",
            "price": 14,
            "oldPrice": "",
            "description": "",
            "sellCount": 188,
            "Count": 0,
            "rating": 96,
            "icon": "../../image/bdmm.png",
            "image": "../../image/bdmm.jpg"
          },



          {
            "name": "葱花饼",
            "price": 10,
            "oldPrice": "",
            "description": "",
            "sellCount": 124,
            "Count": 0,
            "rating": 85,
            "icon": "../../image/chb.png",
            "image": "../../image/chb.jpg"
          },



          {
            "name": "牛肉馅饼",
            "price": 14,
            "oldPrice": "",
            "description": "",
            "sellCount": 114,
            "Count": 0,
            "rating": 91,
            "icon": "../../image/nrxb.png",
            "image": "../../image/nrxb.jpg"
          },



          {
            "name": "招牌猪肉白菜锅贴/10个",
            "price": 17,
            "oldPrice": "",
            "description": "",
            "sellCount": 101,
            "Count": 0,
            "rating": 78,
            "icon": "../../image/bcgt.png",
            "image": "../../image/bcgt.jpg"
          },



          {
            "name": "南瓜粥",
            "price": 9,
            "oldPrice": "",
            "description": "甜粥",
            "sellCount": 91,
            "Count": 0,
            "rating": 100,
            "icon": "../../image/ngz.png",
            "image": "../../image/ngz.jpg"
          },



          {
            "name": "红豆薏米美肤粥",
            "price": 12,
            "oldPrice": "",
            "description": "甜粥",
            "sellCount": 86,
            "Count": 0,
            "rating": 100,
            "icon": "../../image/hd.png",
            "image": "../../image/hd.jpg"
          },



          {
            "name": "八宝酱菜",
            "price": 4,
            "oldPrice": "",
            "description": "",
            "sellCount": 84,
            "Count": 0,
            "rating": 100,
            "icon": "../../image/bbjc.png",
            "image": "../../image/bbjc.jpg"
          },



          {
            "name": "红枣山药糙米粥",
            "price": 10,
            "oldPrice": "",
            "description": "",
            "sellCount": 81,
            "Count": 0,
            "rating": 91,
            "icon": "../../image/hzsy.jpg",
            "image": "../../image/hzsy.jpg"
          },



          {
            "name": "糊塌子",
            "price": 10,
            "oldPrice": "",
            "description": "",
            "sellCount": 80,
            "Count": 0,
            "rating": 93,
            "icon": "../../image/thz.png",
            "image": "../../image/thz.jpg"
          }
        ]
      },


      //单人精彩套餐分块
      {

        "name": "单人精彩套餐",
        "type": 2,
        "foods": [
          {
            "name": "红枣山药粥套餐",
            "price": 29,
            "oldPrice": 36,
            "description": "红枣山药糙米粥,素材包,爽口莴笋丝,四川泡菜或八宝酱菜,配菜可备注",
            "sellCount": 17,
            "Count": 0,
            "rating": 100,
            "icon": "../../image/hzsytc.png",
            "image": "../../image/hzsytc.jpg"
          }
        ]
      },


      //冰爽饮品分块
      {
        "name": "冰爽饮品限时特惠",
        "type": 1,
        "foods": [
          {
            "name": "VC无限橙果汁",
            "price": 8,
            "oldPrice": 10,
            "description": "",
            "sellCount": 15,
            "Count": 0,
            "rating": 100,
            "icon": "../../image/by.png",
            "image": "../../image/by.jpg"
          }
        ]
      },


      //精选热菜分块
      {
        "name": "精选热菜",
        "type": -1,
        "foods": [
          {
            "name": "娃娃菜炖豆腐",
            "price": 17,
            "oldPrice": "",
            "description": "",
            "sellCount": 43,
            "Count": 0,
            "rating": 92,
            "icon": "../../image/wwc.png",
            "image": "../../image/wwc.jpg"
          },



          {
            "name": "手撕包菜",
            "price": 16,
            "oldPrice": "",
            "description": "",
            "sellCount": 29,
            "Count": 0,
            "rating": 100,
            "icon": "../../image/ssbc.png",
            "image": "../../image/ssbc.jpg"
          },



          {
            "name": "香酥黄金鱼/3条",
            "price": 11,
            "oldPrice": "",
            "description": "",
            "sellCount": 15,
            "Count": 0,
            "rating": 100,
            "icon": "../../image/hjy.png",
            "image": "../../image/hjy.jpg"
          }
        ]
      },


      //爽口凉菜分块
      {
        "name": "爽口凉菜",
        "type": -1,
        "foods": [
          {
            "name": "八宝酱菜",
            "price": 4,
            "oldPrice": "",
            "description": "",
            "sellCount": 84,
            "Count": 0,
            "rating": 100,
            "icon": "../../image/bbjc.png",
            "image": "../../image/bbjc.jpg"
          },



          {
            "name": "拍黄瓜",
            "price": 9,
            "oldPrice": "",
            "description": "",
            "sellCount": 28,
            "Count": 0,
            "rating": 100,
            "icon": "../../image/phg.png",
            "image": "../../image/phg.jpg"
          }
        ]
      },

      {
        "name": "精选套餐",
        "type": -1,
        "foods": [
          {
            "name": "红豆薏米粥套餐",
            "price": 37,
            "oldPrice": "",
            "description": "红豆薏米粥,三鲜干蒸烧卖,拍黄瓜",
            "sellCount": 3,
            "Count": 0,
            "rating": 100,
            "icon": "../../image/hdtc.jpg",
            "image": "../../image/hdtc.jpg"
          },

          {
            "name": "皮蛋瘦肉粥套餐",
            "price": 31,
            "oldPrice": "",
            "description": "",
            "sellCount": 12,
            "Count": 0,
            "rating": 100,
            "icon": "../../image/pdsrtc.png",
            "image": "../../image/pdsrtc.jpg"
          }
        ]
      },

      {
        "name": "果拼果汁",
        "type": -1,
        "foods": [
          {
            "name": "蜜瓜圣女萝莉杯",
            "price": 6,
            "oldPrice": "",
            "description": "",
            "sellCount": 1,
            "Count": 0,
            "rating": "",
            "icon": "../../image/mg.png",
            "image": "../../image/mg.jpg"
          },
          {
            "name": "加多宝",
            "price": 6,
            "oldPrice": "",
            "description": "",
            "sellCount": 7,
            "Count": 0,
            "rating": 100,
            "icon": "../../image/jdb.png",
            "image": "../../image/jdb.jpg"
          },

          {
            "name": "VC无限橙果汁",
            "price": 8,
            "oldPrice": 10,
            "description": "",
            "sellCount": 15,
            "Count": 0,
            "rating": 100,
            "icon": "../../image/by.png",
            "image": "../../image/by.jpg"
          }
        ]
      },
      {
        "name": "小吃主食",
        "type": -1,
        "foods": [
          {
            "name": "扁豆焖面",
            "price": 14,
            "oldPrice": "",
            "description": "",
            "sellCount": 188,
            "Count": 0,
            "rating": 96,
            "icon": "../../image/bdmm.png",
            "image": "../../image/bdmm.jpg"
          },
          {
            "name": "葱花饼",
            "price": 10,
            "oldPrice": "",
            "description": "",
            "sellCount": 124,
            "Count": 0,
            "rating": 85,
            "icon": "../../image/chb.png",
            "image": "../../image/chb.jpg"
          },
          {
            "name": "牛肉馅饼",
            "price": 14,
            "oldPrice": "",
            "description": "",
            "sellCount": 114,
            "Count": 0,
            "rating": 91,
            "icon": "../../image/nrxb.png",
            "image": "../../image/nrxb.jpg"
          },
          {
            "name": "招牌猪肉白菜锅贴/10个",
            "price": 17,
            "oldPrice": "",
            "description": "",
            "sellCount": 101,
            "Count": 0,
            "rating": 78,
            "icon": "../../image/bcgt.png",
            "image": "../../image/bcgt.jpg"
          },
          {
            "name": "糊塌子",
            "price": 10,
            "oldPrice": "",
            "description": "",
            "sellCount": 80,
            "Count": 0,
            "rating": 93,
            "icon": "../../image/thz.png",
            "image": "../../image/thz.jpg"
          }
        ]
      },
      {
        "name": "特色粥品",
        "type": -1,
        "foods": [
          {
            "name": "皮蛋瘦肉粥",
            "price": 10,
            "oldPrice": "",
            "description": "咸粥",
            "sellCount": 229,
            "Count": 0,
            "rating": 100,
            "icon": "../../image/pdsrz.png",
            "image": "../../image/pdsrz.jpg"
          },
          {
            "name": "南瓜粥",
            "price": 9,
            "oldPrice": "",
            "description": "甜粥",
            "sellCount": 91,
            "Count": 0,
            "rating": 100,
            "icon": "../../image/ngz.png",
            "image": "../../image/ngz.jpg"
          },
          {
            "name": "红豆薏米美肤粥",
            "price": 12,
            "oldPrice": "",
            "description": "甜粥",
            "sellCount": 86,
            "Count": 0,
            "rating": 100,
            "icon": "../../image/hd.png",
            "image": "../../image/hd.jpg"
          },
          {
            "name": "红枣山药糙米粥",
            "price": 10,
            "oldPrice": "",
            "description": "",
            "sellCount": 81,
            "Count": 0,
            "rating": 91,
            "icon": "../../image/hzsy.jpg",
            "image": "../../image/hzsy.jpg"
          },
          {
            "name": "鲜蔬菌菇粥",
            "price": 11,
            "oldPrice": "",
            "description": "咸粥",
            "sellCount": 56,
            "Count": 0,
            "rating": 100,
            "icon": "../../image/xsjg.png",
            "image": "../../image/xsjg.jpg"
          },
          {
            "name": "田园蔬菜粥",
            "price": 10,
            "oldPrice": "",
            "description": "咸粥",
            "sellCount": 33,
            "Count": 0,
            "rating": 100,
            "icon": "../../image/tysc.png",
            "image": "../../image/tysc.jpg"
          }
        ]
      }
    ],
    toView: '0',
    scrollTop: 100,
    foodCounts: 0,
    carArray: [],
    payDesc: '',
    deliveryPrice: 4,//配送費
    fold: true,
    selectFoods: [{ price: 20, count: 2 }],
    cartShow: 'none',
    status: 0,
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
