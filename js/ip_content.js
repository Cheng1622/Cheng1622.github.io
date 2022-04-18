function getBrowserInfo() {
  var agent = navigator.userAgent.toLowerCase();
  var regStr_ie = /msie/;
  var regStr_ff = /firefox/;
  var regStr_chrome = /chrome/;
  var regStr_saf = /safari/;
  //IE
  if (agent.indexOf("msie") > 0) {
    return agent.match(regStr_ie);
  }
  //firefox
  if (agent.indexOf("firefox") > 0) {
    return agent.match(regStr_ff);
  }
  //Chrome
  if (agent.indexOf("chrome") > 0) {
    return agent.match(regStr_chrome);
  }
  //Safari
  if (agent.indexOf("safari") > 0 && agent.indexOf("chrome") < 0) {
    return agent.match(regStr_saf);
  }

}

// $.ajax({
//   type:"get",
//   url:"https://ip.cjic.ga:444/",
//   // async:true,
//   // /*使用jsonp解决跨域请求*/
//   // dataType: "jsonp",
//   // jsonp: "callback",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(一般默认为:callback)
//   //jsonpCallback:"?",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名，也可以写"?"，jQuery会自动为你处理数据
//   success:(data)=>{
//               document.write(data.ip)
//     console.log(data)
//   }
// });
$.get("https://ip.cjic.ga:444/", function (data, status) {
  // alert(data.ip + "big pig cjie")
  // console.log(data)
  var ip_content = document.querySelector(".ip_content");
  
  if (ip_content != null ) {
    ip_content.innerHTML = '欢迎来自 <span style="color:#970038;">' + data.city + "</span> 的小伙伴<br>" + "访问IP为： <span style='color:#0a6094'>" + data.ip + "</span><br>浏览器版本：<span style='color:#350683'>" + getBrowserInfo() + '</span>';
  }
});


if ('serviceWorker' in navigator) {
  // load 事件完成之后才注册 service worker
  window.addEventListener('load', function () {
      // 注册 sw.js
      navigator.serviceWorker.register('/sw.js')
          .then(function (registration) {
              // 注册成功
              console.log('sw.js 注册成功', registration.scope);
          })
          .catch(function (err) {
              // 注册失败:(
              console.log('sw.js 注册失败 ', err);
          });
  });
}

