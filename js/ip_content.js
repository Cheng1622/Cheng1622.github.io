function getBrowserInfo(){var e=navigator.userAgent.toLowerCase();return e.indexOf("msie")>0?e.match(/msie [\d.]+;/gi):e.indexOf("firefox")>0?e.match(/firefox\/[\d.]+/gi):e.indexOf("chrome")>0?e.match(/chrome\/[\d.]+/gi):e.indexOf("safari")>0&&e.indexOf("chrome")<0?e.match(/safari\/[\d.]+/gi):void 0}var ip_content=document.querySelector(".ip_content");null!=ip_content&&null!=typeof returnCitySN&&(ip_content.innerHTML='欢迎来自 <span class="p red">'+returnCitySN.cname+"</span> 的小伙伴<br>访问IP为： <span class='p cyan'>"+returnCitySN.cip+"</span><br>浏览器版本：<span class='p blue'>"+getBrowserInfo()+"</span>");