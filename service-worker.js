if(!self.define){let e,i={};const d=(d,a)=>(d=new URL(d+".js",a).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(a,s)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let r={};const f=e=>d(e,c),n={module:{uri:c},exports:r,require:f};i[c]=Promise.all(a.map((e=>n[e]||f(e)))).then((e=>(s(...e),r)))}}define(["./workbox-b77dd8d1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"04e6ebcb5f8ceacbc986f4cfe5a435be"},{url:"about/index.html",revision:"b0ecc26d0ffae87b1d14a303d635a5f3"},{url:"archives/2022/01/index.html",revision:"2f5c0b61a0f76357084648e9a35c00f8"},{url:"archives/2022/02/index.html",revision:"61eab2b274eca8b209eb37b3272a6d98"},{url:"archives/2022/03/index.html",revision:"c6b2beb8501e3ca1f5708717d6f848dd"},{url:"archives/2022/04/index.html",revision:"05081fe3f44b34d6649c7aa338e069e4"},{url:"archives/2022/index.html",revision:"5bd2dfbbadfa6bf300115ef146105651"},{url:"archives/index.html",revision:"fab9660981720b053a391a2b49e05402"},{url:"bangumis/index.html",revision:"7f006b952c6a5debb436cd5a7fa1ec89"},{url:"categories/🍊魔法橙子/index.html",revision:"6d23e9652fe58ecd789b9f684cbaf47e"},{url:"categories/🎃魔法南瓜/index.html",revision:"de98c313475e8ea3b07f17a39cac9d29"},{url:"categories/🐇魔法兔兔/index.html",revision:"84a5f3882d9ddc4e447762110c9d9f0e"},{url:"categories/📜魔法卷轴/index.html",revision:"24f5596cab21f703393d89c3433ec282"},{url:"categories/🔔魔法铃铛/index.html",revision:"13593830783a803b79bdc4b2101d7429"},{url:"categories/🧹魔法扫帚/index.html",revision:"9702e5bd4f316d12fc60e72220a7b402"},{url:"categories/index.html",revision:"ab134d22fe4837157ea66e6d0326d59c"},{url:"comments/index.html",revision:"d0a57c986aa40f4734e9460cc2d9d2c8"},{url:"css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"css/coin.css",revision:"477e787ff380ad5d051caecdd5544637"},{url:"css/commentsbar.css",revision:"8c96783d5283b210aefe915dda110fc1"},{url:"css/index.css",revision:"9ada3bad04d978601dad1c1943484986"},{url:"css/index.min.css",revision:"9198830e6c884e9c71d74ac89a530a58"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"image/404.png",revision:"48679feeebd98000c8843517f382ac75"},{url:"image/bg.jpg",revision:"285690e9719e698727369015d231bb70"},{url:"image/comment_bg.png",revision:"70884b3f858d20f425a132f746e9aa8e"},{url:"image/friend_404.gif",revision:"cb626f0ff72a7aba9c253b503cf8563e"},{url:"image/icon.jpg",revision:"c5ef22237454def3d23e54ac2df5802d"},{url:"image/reward/alipay.png",revision:"c0c664a07e8dc394694b687e34fcc5e6"},{url:"image/reward/wechat.png",revision:"1ddc80edbf3b0b395cd8446daa4b83c8"},{url:"image/social/qq.jpg",revision:"7b808b9a205637791afe912c86f73804"},{url:"image/social/wechart.jpg",revision:"712d7c0aaece6a636933dace4bb465bd"},{url:"image/top/1.jpg",revision:"74d9a1f65fdcadf9c1ccd4de3a47b514"},{url:"image/top/2.jpg",revision:"fc0a3d331950d378cdedae39a72c8907"},{url:"image/top/3.jpg",revision:"3ba26739a0a203b1b2514e6e75b2f953"},{url:"image/top/4.jpg",revision:"6dc6fc5fdef0b60aed3905d5a0097278"},{url:"image/top/5.jpg",revision:"91f63947c293211cae743cfd2b542a6d"},{url:"image/top/6.jpg",revision:"42be3e24d676ed27504c5cbc2763080e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"18cbc0cb04c30e4ef316ede8f3e77106"},{url:"js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"js/coin.js",revision:"16be4711da8cbe57c0be5a9c107b237c"},{url:"js/custom/fixed_card_widget.js",revision:"a24afaa30705e754b4f322a2f638ad15"},{url:"js/diytitle.js",revision:"6fe80aa7ab470ce4be3f325ce58d5578"},{url:"js/F12.js",revision:"c844293fc917c0d6665f5297c907f058"},{url:"js/fixed_card_widget.js",revision:"02eeacd95bff79855f204fe9d4aa35e7"},{url:"js/grayscale.js",revision:"f514db2dd97feecb52f6f0e24b67de61"},{url:"js/ip_content.js",revision:"2d297dae70c7eca256baf144ad62a763"},{url:"js/main.js",revision:"f10f9dcc8ed11d1bfb0378c80a6e9508"},{url:"js/Meting.min.js",revision:"08f5ae78a1e909aee8bf75122dea5475"},{url:"js/rightmenu.js",revision:"6005627ce3a9584fee3b657691563cb1"},{url:"js/runtime.js",revision:"273e7a33a8dfdcc18e300e0bc6ba683d"},{url:"js/SAO_ranklist.js",revision:"8251b2565fd81016418269be6b9db5e9"},{url:"js/search/algolia.js",revision:"d36a279469bce7854189f9481d3d0860"},{url:"js/search/local-search.js",revision:"1685cd43da0de7abd4a649dd5b2d81db"},{url:"js/sun_moon.js",revision:"a4e43ec9df5df0f5db20e910b5a3ab1e"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"9f465e7dd29ec62dbc6af321882c2b59"},{url:"js/wow_init.js",revision:"9a6048b8a3aecb9b1604235a436db960"},{url:"kernel.html",revision:"039d1f99950a19085723b35ed42f1fd7"},{url:"live2d-widget/assets/screenshot-1.png",revision:"30b70e6cd9be9812adcb347536f0da85"},{url:"live2d-widget/assets/screenshot-2.png",revision:"1295844e29a6d6dc3a4aa0db8faa7da7"},{url:"live2d-widget/assets/screenshot-3.png",revision:"4aa1995daf77bc19803648fe6a65c33e"},{url:"live2d-widget/autoload.js",revision:"f8b9e985cced56f6959f7a51722aec01"},{url:"live2d-widget/demo/demo.html",revision:"4e44fb2ad2a93c6c1aac66575fc760dc"},{url:"live2d-widget/demo/login.html",revision:"2cf31a9b088cbc5e3c7d4ecf190ff7ae"},{url:"live2d-widget/live2d.min.js",revision:"ee7efff8ff5d1d4bd4a0ff99affd3ec7"},{url:"live2d-widget/waifu-tips.js",revision:"eb09df3dceb58761dd3aa8edde21a551"},{url:"live2d-widget/waifu.css",revision:"b6c89745f105483217c3e63a0c590992"},{url:"page/2/index.html",revision:"d6e1ba7e96b1e13e11651b402a48f87f"},{url:"posts/bwc3b8/index.html",revision:"648d0a01ec82bd5f76bce6a003deb636"},{url:"posts/cm90dg/index.html",revision:"8fe8a355e8cb445ccbb236e68e88e6b5"},{url:"posts/cp5lo3/index.html",revision:"98da5179a7dceeddadbefcae7c5e67b7"},{url:"posts/cubnfn/index.html",revision:"7bf18fa04f9c32f6b8248618224b4f56"},{url:"posts/dgdfmq/index.html",revision:"70951fa8812388d010e40f3bad0ec5c0"},{url:"posts/dn9gd2/index.html",revision:"6f7917e1d4eba57d205ffd570cdcce52"},{url:"posts/dw9ocy/index.html",revision:"322fa095f2bfea1f736362414fc91e0e"},{url:"posts/hat8zc/index.html",revision:"dcc2ff403388c59d3079b5124f6e6617"},{url:"posts/hexcsn/index.html",revision:"3af5aeae47acb9ac347e66705d1ee5b4"},{url:"posts/mhbbc6/index.html",revision:"a2307d5ee7bbb789cec819de5765fccf"},{url:"posts/mhhzac/index.html",revision:"0b21b9312d3def90fd4a0f684e301ecc"},{url:"posts/oirlsf/index.html",revision:"51f2608397fee20a39783022c2927419"},{url:"posts/omwx46/index.html",revision:"cfd5f430f9524c7788c281f613423848"},{url:"posts/pqy51r/index.html",revision:"0e7eeef81cbb2fc9cb14cd97b79f6958"},{url:"posts/qpht7q/index.html",revision:"482c695756abaffe21a3b0b1f27345fe"},{url:"posts/tmt5y4/index.html",revision:"857ccfed37291fafb9e94482cb38edbc"},{url:"posts/xg6rkw/index.html",revision:"2f9f3f55fb54a2777ef0ad26209bde73"},{url:"posts/xxz26y/index.html",revision:"39b141f0a4587439546cbb191db489e9"},{url:"posts/zf108d/index.html",revision:"07a5adc28ac3957130fc0819c2a9b3c0"},{url:"random/index.html",revision:"cddef0e354b7e5d79356239f6bd0d6fd"},{url:"shuoshuo/index.html",revision:"e585e95a1104cd08f1d4e7751c28f388"},{url:"tags/butterfly/index.html",revision:"2290e10e10ecf556a864d8668ab40631"},{url:"tags/Butterfly/index.html",revision:"4b57fad0fbdf203b9c9736b169f3ef9b"},{url:"tags/c/index.html",revision:"7a9ed479ac97fdc840b4ee48b00fe0b8"},{url:"tags/go-cqhttp/index.html",revision:"496a93cc8069732e2d34c855090af104"},{url:"tags/hexo/index.html",revision:"051bae34d9a5bf9083754c151aa5e035"},{url:"tags/Hexo/index.html",revision:"708f7513bc3708d5b415e2d38041f38d"},{url:"tags/index.html",revision:"4de58d590266ddecec087a3698734e81"},{url:"tags/kali/index.html",revision:"182e7d44f55434aefc51ebd9cdbeb374"},{url:"tags/kms/index.html",revision:"be6eb1ca639db954888c53d329100fc3"},{url:"tags/Linux/index.html",revision:"b6dbb8e9de83134b4ce5fafeab3d8efa"},{url:"tags/office/index.html",revision:"489aaaad9397349f3eb18d7f251ed375"},{url:"tags/php-tp5/index.html",revision:"7676b039081a041527afb6c3f60b2284"},{url:"tags/phpstudy/index.html",revision:"cd8631d141ce5831bc2c814d4a811610"},{url:"tags/shodan/index.html",revision:"ff044a4ab03bd434ec1a2763c9e2c550"},{url:"tags/sql/index.html",revision:"b4223bd04ed8105885204633c88da0b3"},{url:"tags/Twikoo/index.html",revision:"f3cf2246c0f0d5b456e9523c28aaaaf6"},{url:"tags/v2ray/index.html",revision:"bd0bf59cd78f48145d9adba5ed5e0622"},{url:"tags/vscode/index.html",revision:"7aa9739e6f4235100ee8f0bb0bedce1e"},{url:"tags/windows/index.html",revision:"d5a5d9e5cae840c0a918aacba2889b11"},{url:"tags/大学物理/index.html",revision:"491f21c5e735db5b3ce29f18b744f953"},{url:"tags/数据结构/index.html",revision:"19260235827ffb3d23d13e67118fc94a"},{url:"tags/网安/index.html",revision:"3cf61767d0057d551fd459c2d15c21ee"},{url:"tags/计算机组成原理/index.html",revision:"7c99b0ce1744a619db3fd48ba9c42754"},{url:"tags/语雀/index.html",revision:"fbf5c10aaad8872b1f85e5b524481141"}],{}),e.registerRoute(/^https:\/\/cheng\.cjic\.xyz\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
