// 定义标题变量
var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        // 自定义离开时标题
        document.title = 'Σ(っ °Д °;)っ别走啊';
        clearTimeout(titleTime);
    }
    else {
        // 自定义返回时标题
        document.title = '(p≧w≦q)回来了' + OriginTitile;
        // 变为正常标题
        titleTime = setTimeout(function () {
            document.title = OriginTitile;
        }, 2000);
    }
});
