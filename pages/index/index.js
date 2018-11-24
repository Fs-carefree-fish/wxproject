const util = require('../../utils/util.js')
Page({
  data: {
    inputValue: '',
    inputTime:'',
  },
  //数据双向绑定 获取文本详细值
  bindKeyInput: function (e) {
   
    this.setData({
      value: e.detail.value
    })
  },
  onLoad:function(){
    console.log("首页登陆")

  },
  saveMemo: function () {
    //wx.setStorageSync('key', this.data.num)

    var that = this;
    var inputValue = that.data.value;
    var stamp = +new Date();  //获取时间戳
    var inputTime = util.format(stamp);  // 转换成标准时间格式
    var flag = true;

      //post至数据库保存
      //判断是否为空
    if (inputValue == '' || inputValue == undefined)
    {
      wx.showToast({
        title: '内容不能为空！',
        icon: 'none',
        duration: 2000})
        }else{
       //判断是否超过字长
      if (inputValue.length > 80){
        wx.showToast({
          title: '字数不能多于80！',
          icon: 'none',
          duration: 2000
        })
      }
      else{

      wx.request({
      url: 'http://127.0.0.1/wxdb/wxdb_savedata.php',
      //data: { value: inputValue,time: inputTime },
      data: { value: inputValue, time: inputTime },
      method: 'POST',
      header: { "content-type": "application/x-www-form-urlencoded" },
      success: function (res) {
        console.log(res.data)
        wx.showToast({
          title: '添加成功！',
          icon: 'error',
          duration: 2000
        })

        that.setData({ value: '', })
        that.setData({ inputValue: '', })
      
        
      }
      })
      }
     
    }
  }
})
