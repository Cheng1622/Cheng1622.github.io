document.onkeydown=function(){if(window.event&&123==window.event.keyCode)return event.keyCode=0,event.returnValue=!1,new Vue({data:function(){return this.$notify({title:"你干嘛！不准扒橙子！",message:"哼，坏人！怎么能随随便便橙子的底裤呢！",position:"bottom-right",offset:50,showClose:!1,type:"error"}),{visible:!1}}}),!1};