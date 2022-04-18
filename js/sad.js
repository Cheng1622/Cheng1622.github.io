
if ('serviceWorker' in navigator) {
    // load 事件完成之后才注册 service worker
    window.addEventListener('load', function () {
        // 注册 sw.js
        navigator.serviceWorker.register('../sw.js')
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