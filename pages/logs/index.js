Page({
  data: { },
  onLoad: function () {

    console.log("日志登陆")
  
    wx.request({

      url: 'http://127.0.0.1/wxdb/wxdb_savedata.php',

      data: {
        value: inputValue,
        time: inputTime
      },

      method: 'POST',

      header: { "content-type": "application/x-www-form-urlencoded" },


      success: function (res) {
        console.log(res.data)
      }
    })

  }

 
})