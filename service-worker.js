if(!self.define){let e,i={};const d=(d,s)=>(d=new URL(d+".js",s).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(s,a)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let c={};const f=e=>d(e,r),n={module:{uri:r},exports:c,require:f};i[r]=Promise.all(s.map((e=>n[e]||f(e)))).then((e=>(a(...e),c)))}}define(["./workbox-b77dd8d1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"about/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"archives/2022/01/index.html",revision:"d04f71bb7e5b51b0b85dedbfefa382a2"},{url:"archives/2022/02/index.html",revision:"12abe8c0aea325f3c5c0e5cccf059349"},{url:"archives/2022/03/index.html",revision:"b81fda3a4e3de209e4ecbf86bf234ca7"},{url:"archives/2022/04/index.html",revision:"f676743f578039bf574106cfb407f59f"},{url:"archives/2022/index.html",revision:"6052904291e53f737a30cd0253ab33ad"},{url:"archives/index.html",revision:"aedc0bb930bdac47c487f8abbe818e11"},{url:"bangumis/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"categories/🍊魔法橙子/index.html",revision:"3ac2b6f31e9b200a8d2b06ab0c0884ee"},{url:"categories/🎃魔法南瓜/index.html",revision:"01d0452ae6ab06bbca8ff362dd8f082b"},{url:"categories/🐇魔法兔兔/index.html",revision:"e3e7886c9ae6ef1afbdf5e876d4855f1"},{url:"categories/📜魔法卷轴/index.html",revision:"c1a9ca51ce1fa94b57d7da18dcd3eab4"},{url:"categories/🔔魔法铃铛/index.html",revision:"7be3264e636c78404977b8cf3718551e"},{url:"categories/🧹魔法扫帚/index.html",revision:"53143ee0a1f81d8173749172f9ceab70"},{url:"categories/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"comments/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/coin.css",revision:"477e787ff380ad5d051caecdd5544637"},{url:"css/commentsbar.css",revision:"8c96783d5283b210aefe915dda110fc1"},{url:"css/costom.css",revision:"538bb6523707165e5f4f63081b07628f"},{url:"css/index.css",revision:"7d0bd6a540d35eb71b8bf26c8ef0154a"},{url:"css/index.min.css",revision:"f429a53bf786e1889241b83e030f6d5b"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"image/404.png",revision:"48679feeebd98000c8843517f382ac75"},{url:"image/bg.jpg",revision:"285690e9719e698727369015d231bb70"},{url:"image/comment_bg.png",revision:"70884b3f858d20f425a132f746e9aa8e"},{url:"image/friend_404.gif",revision:"cb626f0ff72a7aba9c253b503cf8563e"},{url:"image/icon.jpg",revision:"c5ef22237454def3d23e54ac2df5802d"},{url:"image/reward/alipay.png",revision:"c0c664a07e8dc394694b687e34fcc5e6"},{url:"image/reward/wechat.png",revision:"1ddc80edbf3b0b395cd8446daa4b83c8"},{url:"image/social/qq.jpg",revision:"7b808b9a205637791afe912c86f73804"},{url:"image/social/wechart.jpg",revision:"712d7c0aaece6a636933dace4bb465bd"},{url:"image/top/1.jpg",revision:"74d9a1f65fdcadf9c1ccd4de3a47b514"},{url:"image/top/2.jpg",revision:"fc0a3d331950d378cdedae39a72c8907"},{url:"image/top/3.jpg",revision:"3ba26739a0a203b1b2514e6e75b2f953"},{url:"image/top/4.jpg",revision:"6dc6fc5fdef0b60aed3905d5a0097278"},{url:"image/top/5.jpg",revision:"91f63947c293211cae743cfd2b542a6d"},{url:"image/top/6.jpg",revision:"42be3e24d676ed27504c5cbc2763080e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"06eb6c2394ded0dedc370e547f85e2e0"},{url:"js/bber.js",revision:"431c60d64c774df077e1130e9aab15db"},{url:"js/category.js",revision:"9c3d062d193559b9bad3b3376f65ad35"},{url:"js/coin.js",revision:"16be4711da8cbe57c0be5a9c107b237c"},{url:"js/custom/fixed_card_widget.js",revision:"a24afaa30705e754b4f322a2f638ad15"},{url:"js/diytitle.js",revision:"6fe80aa7ab470ce4be3f325ce58d5578"},{url:"js/F12.js",revision:"c844293fc917c0d6665f5297c907f058"},{url:"js/fixed_card_widget.js",revision:"02eeacd95bff79855f204fe9d4aa35e7"},{url:"js/grayscale.js",revision:"f514db2dd97feecb52f6f0e24b67de61"},{url:"js/ip_content.js",revision:"44470de8afd6358f0c9dd9583138bd40"},{url:"js/main.js",revision:"f10f9dcc8ed11d1bfb0378c80a6e9508"},{url:"js/rightmenu.js",revision:"6005627ce3a9584fee3b657691563cb1"},{url:"js/runtime.js",revision:"273e7a33a8dfdcc18e300e0bc6ba683d"},{url:"js/SAO_ranklist.js",revision:"8251b2565fd81016418269be6b9db5e9"},{url:"js/search/algolia.js",revision:"d36a279469bce7854189f9481d3d0860"},{url:"js/search/local-search.js",revision:"1685cd43da0de7abd4a649dd5b2d81db"},{url:"js/sun_moon.js",revision:"a4e43ec9df5df0f5db20e910b5a3ab1e"},{url:"js/timeago.min.js",revision:"76015a756fcf0b6993f21a5f3dad12a6"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"9f465e7dd29ec62dbc6af321882c2b59"},{url:"js/wow_init.js",revision:"9a6048b8a3aecb9b1604235a436db960"},{url:"kernel.html",revision:"039d1f99950a19085723b35ed42f1fd7"},{url:"live2d-widget/assets/screenshot-1.png",revision:"30b70e6cd9be9812adcb347536f0da85"},{url:"live2d-widget/assets/screenshot-2.png",revision:"1295844e29a6d6dc3a4aa0db8faa7da7"},{url:"live2d-widget/assets/screenshot-3.png",revision:"4aa1995daf77bc19803648fe6a65c33e"},{url:"live2d-widget/autoload.js",revision:"f8b9e985cced56f6959f7a51722aec01"},{url:"live2d-widget/demo/demo.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"live2d-widget/demo/login.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"live2d-widget/live2d.min.js",revision:"ee7efff8ff5d1d4bd4a0ff99affd3ec7"},{url:"live2d-widget/waifu-tips.js",revision:"eb09df3dceb58761dd3aa8edde21a551"},{url:"live2d-widget/waifu.css",revision:"c0b987bdddfa732f8505a8d139bdb69b"},{url:"page/2/index.html",revision:"1268c13f6809c09959c0f3dd24e7ad07"},{url:"posts/bwc3b8/index.html",revision:"6011a12b3ce66067fb3ce13943a19ec7"},{url:"posts/cm90dg/index.html",revision:"ab1a9305a3b0d328972ff6d0af87c603"},{url:"posts/cp5lo3/index.html",revision:"6be5ff5b3d84401eca6b689eaf36164d"},{url:"posts/cubnfn/index.html",revision:"34ff8d175caf4bd4e7ebd0bebf2a22e1"},{url:"posts/dgdfmq/index.html",revision:"673fa56189af5dc3b6cbd768475168ef"},{url:"posts/dn9gd2/index.html",revision:"2fc9071e5c565101adef30b438893759"},{url:"posts/dw9ocy/index.html",revision:"0e6e4a753103273461b9955b38975b6d"},{url:"posts/hat8zc/index.html",revision:"f0585b15bd30eec66e67e9cf0249c7b4"},{url:"posts/hexcsn/index.html",revision:"631adb4eeddfc401e11a8ed321e2067f"},{url:"posts/mhbbc6/index.html",revision:"96fdc382071d314717d6cc8123b3e664"},{url:"posts/mhhzac/index.html",revision:"5abbf04a118e82fb6cec43a4c637db98"},{url:"posts/oirlsf/index.html",revision:"17066fd5a0bba620884430d72d2253e3"},{url:"posts/omwx46/index.html",revision:"1449ddc6de0502212b659ac6d3a6b191"},{url:"posts/pqy51r/index.html",revision:"2b8780828bdc73f2b412324831b2973a"},{url:"posts/qpht7q/index.html",revision:"82c71e0bf26a86abd1fcb460edb663df"},{url:"posts/tmt5y4/index.html",revision:"aa52195384a7f44c6341a278b65bfb23"},{url:"posts/xg6rkw/index.html",revision:"80d2a513956f27c71078789308a4a134"},{url:"posts/xxz26y/index.html",revision:"a89d7c63915b95b40f29692642600c5c"},{url:"posts/zf108d/index.html",revision:"13b4229c9cc946c6470c8ad9764c5bdd"},{url:"random/index.html",revision:"cddef0e354b7e5d79356239f6bd0d6fd"},{url:"shuoshuo/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"tags/butterfly/index.html",revision:"b6a6b54ed09de35ff0351437effe11d4"},{url:"tags/Butterfly/index.html",revision:"2b5fc12c7185a34efb10b9e0afec78ca"},{url:"tags/c/index.html",revision:"daa38fa24755f295faced167999bd9a6"},{url:"tags/go-cqhttp/index.html",revision:"2c1d1f54fe1eb5e5a4fde978bbe761bf"},{url:"tags/hexo/index.html",revision:"4ed11ee62136c80a1a95573e4f2c2c7c"},{url:"tags/Hexo/index.html",revision:"45876793394ce3b52bae9e7626fc88a7"},{url:"tags/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"tags/kali/index.html",revision:"688da92331521d230b4831682ee33ec8"},{url:"tags/kms/index.html",revision:"37aa5dd236531ed17bf380760d8ffff6"},{url:"tags/Linux/index.html",revision:"d7facabd1e64aa75d8ca51309f882820"},{url:"tags/office/index.html",revision:"100ebce46e02bf2d746d5c32da9a1472"},{url:"tags/php-tp5/index.html",revision:"36aed8498ff78514faa9448366bdb4d7"},{url:"tags/phpstudy/index.html",revision:"b280b858f5046e16214080040540c6b2"},{url:"tags/shodan/index.html",revision:"9a1c74923ab2c04d2df3bb6e79f1e3e6"},{url:"tags/sql/index.html",revision:"4c20d35cb511a388310a02e0a2b4dea5"},{url:"tags/Twikoo/index.html",revision:"4b1f3295017c346f1b50f02b7c831e97"},{url:"tags/v2ray/index.html",revision:"086764ffeea352e36f3df1055d1b7af3"},{url:"tags/vscode/index.html",revision:"aedae78921cacc55e91607c86502452c"},{url:"tags/windows/index.html",revision:"e5e36d5b2de2877dfb7c69e2a2571888"},{url:"tags/大学物理/index.html",revision:"c9a1ea632ccd0c29bdb236a3e4f860b8"},{url:"tags/数据结构/index.html",revision:"107826c8913b4d12dfc070ff47801689"},{url:"tags/网安/index.html",revision:"72e295312cfb276963099dd19a54ecb6"},{url:"tags/计算机组成原理/index.html",revision:"dad1880fea41f310f480f62f591d764a"},{url:"tags/语雀/index.html",revision:"85365bfc9e2f8a4cfb6779bf8840b457"}],{}),e.registerRoute(/^https:\/\/cheng\.cjic\.xyz\/.*/,new e.CacheFirst,"GET")}));