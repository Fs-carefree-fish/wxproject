Page({
 
  onLoad: function () {
  console.log("日志登陆")
    var that = this;
    wx.request({

      url: 'http://127.0.0.1/wxdb/wxdb_return.php',

      data: {},

      method: 'POST',

      header: { //"content-type": "application/x-www-form-urlencoded"
        'content-type': 'application/json'
      },

      success: function (res) {
        console.log(res.data),
          that.setData({ arry: res.data, })
      }
    })

    
   
   },

   onShow:function() { 
    this.onLoad()
    console.log('页面显示！！！！！！！！！！！！！！')
   },

  data: {
    arry:[]
  },

  
  delMemo:function(e){

          //删除数据库内容
          var id = e.target.dataset.id
          console.log(id)
          var that = this;
          wx.request({
            url: 'http://127.0.0.1/wxdb/wxdb_deldata.php',
            data: { id: id },
            method: 'POST',
            header: { "content-type": "application/x-www-form-urlencoded" },
            success: function (res) {
              console.log(res.data)
              wx.showToast({
                title: '删除成功！',
                icon: 'error',
                duration: 2000
              })
            }
          })
        // 延迟调用 重新获取数据库内容
        setTimeout(function () {
          console.log("延迟调用====重新获取数据库内容")
          wx.request({

            url: 'http://127.0.0.1/wxdb/wxdb_return.php',

            data: {},

            method: 'POST',

            header: {  'content-type': 'application/json'},

            success: function (res) {
              console.log(res.data),
                that.setData({ arry: res.data, })
            }
          })
        }, 1000)

         }



})

  

  
