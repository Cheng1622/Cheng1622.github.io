// if(PublicSacrificeDay()){
//     document.getElementsByTagName("html")[0].setAttribute("style","filter:gray !important;filter:grayscale(100%);-webkit-filter:grayscale(100%);-moz-filter:grayscale(100%);-ms-filter:grayscale(100%);-o-filter:grayscale(100%);");
//   }
  
//   function PublicSacrificeDay(){
//       // 4.4 清明节
//       // 4.14 青海玉树地震
//       // 5.12 汶川大地震
//       // 7.7 卢沟桥事变
//       // 8.7 甘肃舟曲泥石流
//       // 8.14 世界慰安妇纪念日
//       // 9.9 毛主席逝世
//       // 9.18 九一八事变
//       // 9.30 烈士纪念日
//       // 10.25 抗美援朝纪念日
//       // 12.13 南京大屠杀
//       var PSFarr=new Array("0403","0404","0405","0406","0414","0512","0707","0807","0814","0909","0918","0930","1025","1213");
//       var currentdate = new Date();
//       var str = "";
//       var mm = currentdate.getMonth()+1;
//       if(currentdate.getMonth()>9){
//         str += mm;
//       }else{
//         str += "0" + mm;
//       }
//       if(currentdate.getDate()>9){
//         str += currentdate.getDate();
//       }else{
//         str += "0" + currentdate.getDate();
//       }
//       if(PSFarr.indexOf(str)>-1){
//           return 1;
//       }else{
//           return 0;
//       }
//   }
  