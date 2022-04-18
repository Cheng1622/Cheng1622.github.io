/* copy */ 
document.addEventListener("copy",function(){
  new Vue({
    data:function(){
      this.$notify({
        title:"剪切板！吾的！",
        message:"你的剪切板已经被占领了！若要转载请务必保留原文链接！",
        position: 'top-center',
        offset: 50,
        showClose: false,
        type:"success"
      });
      return{visible:false}
    }
  })
})

/* 禁用F12按键并提醒 */
document.onkeydown = function () {
    if (window.event && window.event.keyCode == 123) {
      event.keyCode = 0;
      event.returnValue = false;
      new Vue({
        data:function(){
          this.$notify({
            title:"你干嘛！不准扒橙子！",
            message:"哼，坏人！怎么能随随便便打开橙子的控制台呢！",
            position: 'top-center',
            offset: 50,
            showClose: false,
            type:"error"
          });
          return{visible:false}
        }
      })
      return false;
    }
  };
