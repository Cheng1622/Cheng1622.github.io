let kk = {};
kk.showRightMenu = function (isTrue, x = 0, y = 0) {
    let $rightMenu = $('#rightMenu');
    $rightMenu.css('top', x + 'px').css('left', y + 'px');

    if (isTrue) {
        $rightMenu.show();
    } else {
        $rightMenu.hide();
    }
}
kk.switchDarkMode = function () {
    document.querySelector('body').insertAdjacentHTML('beforeend', '<div class="Cuteen_DarkSky"><div class="Cuteen_DarkPlanet"></div></div>'),
        setTimeout(function () {
            document.querySelector('body').classList.contains('DarkMode') ? (document.querySelector('body').classList.remove('DarkMode'), localStorage.setItem('isDark', '0'), document.getElementById('modeicon').setAttribute('xlink:href', '#icon-moon')) : (document.querySelector('body').classList.add('DarkMode'), localStorage.setItem('isDark', '1'), document.getElementById('modeicon').setAttribute('xlink:href', '#icon-sun')),
                setTimeout(function () {
                    document.getElementsByClassName('Cuteen_DarkSky')[0].style.transition = 'opacity 3s';
                    document.getElementsByClassName('Cuteen_DarkSky')[0].style.opacity = '0';
                    setTimeout(function () {
                        document.getElementsByClassName('Cuteen_DarkSky')[0].remove();
                    }, 1e3);
                }, 2e3)
        })
    const nowMode = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'
    if (nowMode === 'light') {
        activateDarkMode()
        saveToLocal.set('theme', 'dark', 2)
        GLOBAL_CONFIG.Snackbar !== undefined && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)
        document.getElementById('modeicon').setAttribute('xlink:href', '#icon-sun')
    } else {
        activateLightMode()
        saveToLocal.set('theme', 'light', 2)
        document.querySelector('body').classList.add('DarkMode'), document.getElementById('modeicon').setAttribute('xlink:href', '#icon-moon')
    }
    // handle some cases
    typeof utterancesTheme === 'function' && utterancesTheme()
    typeof FB === 'object' && window.loadFBComment()
    window.DISQUS && document.getElementById('disqus_thread').children.length && setTimeout(() => window.disqusReset(), 200)

};
kk.switchReadMode = function () {
    const $body = document.body
    $body.classList.add('read-mode')
    const newEle = document.createElement('button')
    newEle.type = 'button'
    newEle.className = 'fas fa-sign-out-alt exit-readmode'
    $body.appendChild(newEle)

    function clickFn() {
        $body.classList.remove('read-mode')
        newEle.remove()
        newEle.removeEventListener('click', clickFn)
    }

    newEle.addEventListener('click', clickFn)
}
// kk.switchTheme=function(load=false){
//     //??????????????????butterfly???????????????????????????css???
//     //FallGuys.css???????????????????????????????????????
//     let themes = ['FallGuys.css',''];
//     let vTheme = parseInt(localStorage.getItem('visitor-theme'));
//     if(!vTheme){
//         vTheme = load?0:1;
//     }else{
//         vTheme += load?0:1;
//         vTheme%=themes.length;
//     }
//     localStorage.setItem('visitor-theme',vTheme)
//     let themesrc = ''
//     if(themes[vTheme]){
//         themesrc += window.location.origin+'/css/dorakika/'+themes[vTheme];
//     }
//     //css?????????link??????????????????tag="theme"
//     $(document.head).find('[tag="theme"]')[0].href = themesrc;
// };

//??????????????????
kk.copySelect = function () {
    document.execCommand('Copy', false, null);
    //???????????????????????????????????? ?????????
}

//????????????
kk.scrollToTop = function () {
    btf.scrollToDest(0, 500);
}

//???????????????
kk.commentSelect = function(){
    console.log(document.getSelection().toString());
    window.location.href = window.location.href.split('#')[0]+"#post-comment"
    $("#twikoo>.tk-comments>.tk-submit textarea.el-textarea__inner").val("> "+document.getSelection().toString()+"\n\n").focus().change();
}

// ??????????????????
if (!(navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
    window.oncontextmenu = function (event) {
        $('.rightMenu-group.hide').hide();
        if (document.getSelection().toString()) {
            $('#menu-text').show();
        }

        console.log(event.target);
        let pageX = event.clientX + 10;
        let pageY = event.clientY;
        let rmWidth = $('#rightMenu').width();
        let rmHeight = $('#rightMenu').height();
        if (pageX + rmWidth > window.innerWidth) {
            pageX -= rmWidth + 10;
        }
        if (pageY + rmHeight > window.innerHeight) {
            pageY -= pageY + rmHeight - window.innerHeight;
        }



        kk.showRightMenu(true, pageY, pageX);
        return false;
    };

    window.addEventListener('click', function () { kk.showRightMenu(false); });
    // window.addEventListener('load',function(){kk.switchTheme(true);});
}