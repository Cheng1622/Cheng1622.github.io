document.addEventListener("copy",(function(e){new Vue({data:function(){return this.$notify({title:"你的剪切板已经被橙子占领了！",message:"若要转载请务必保留原文链接！",position:"top-center",offset:50,showClose:!1,type:"error"}),{visible:!1}}})})),document.onkeydown=function(){if(window.event&&123==window.event.keyCode)return event.keyCode=0,event.returnValue=!1,new Vue({data:function(){return this.$notify({title:"你干嘛！不准扒橙子！",message:"哼，坏人！怎么能随随便便橙子的底裤呢！",position:"top-center",offset:50,showClose:!1,type:"error"}),{visible:!1}}}),!1};