if(!self.define){let e,i={};const d=(d,a)=>(d=new URL(d+".js",a).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(a,c)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let r={};const n=e=>d(e,s),b={module:{uri:s},exports:r,require:n};i[s]=Promise.all(a.map((e=>b[e]||n(e)))).then((e=>(c(...e),r)))}}define(["./workbox-b77dd8d1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"about/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"archives/2022/01/index.html",revision:"42180bb939cf1bf475c7841c50dd0053"},{url:"archives/2022/02/index.html",revision:"3164e5287dc7bbc6a4b1b0f43fca3c8b"},{url:"archives/2022/03/index.html",revision:"4eae09ffa2ae0fcc6566728ac1ac2a70"},{url:"archives/2022/04/index.html",revision:"fa4e2cf98a6220327e40a2e298472597"},{url:"archives/2022/index.html",revision:"b4a44849a0da3e2f99fd4caa1b469cc3"},{url:"archives/index.html",revision:"2d861ca2c1f131c26f0a390c2ae79a03"},{url:"bangumis/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"categories/🍊魔法橙子/index.html",revision:"7574bfba2dc1cb0c5dc7bc9b7033022a"},{url:"categories/🎃魔法南瓜/index.html",revision:"ca6acfb2ee228c4126529725e286759c"},{url:"categories/🐇魔法兔兔/index.html",revision:"87b45cec2adee7bb0e25644dda639b96"},{url:"categories/📜魔法卷轴/index.html",revision:"ed5f5d82b62ca5b66e10c3150b54ed2f"},{url:"categories/🔔魔法铃铛/index.html",revision:"0d55273cf8e60b3ba4141b4b403b5ae3"},{url:"categories/🧹魔法扫帚/index.html",revision:"c2a9a348ef7bd0abffea1d3b404be121"},{url:"categories/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"comments/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/coin.css",revision:"477e787ff380ad5d051caecdd5544637"},{url:"css/commentsbar.css",revision:"8c96783d5283b210aefe915dda110fc1"},{url:"css/index.css",revision:"7d0bd6a540d35eb71b8bf26c8ef0154a"},{url:"css/index.min.css",revision:"f429a53bf786e1889241b83e030f6d5b"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"image/404.png",revision:"48679feeebd98000c8843517f382ac75"},{url:"image/bg.jpg",revision:"285690e9719e698727369015d231bb70"},{url:"image/comment_bg.png",revision:"70884b3f858d20f425a132f746e9aa8e"},{url:"image/friend_404.gif",revision:"cb626f0ff72a7aba9c253b503cf8563e"},{url:"image/icon.jpg",revision:"c5ef22237454def3d23e54ac2df5802d"},{url:"image/reward/alipay.png",revision:"c0c664a07e8dc394694b687e34fcc5e6"},{url:"image/reward/wechat.png",revision:"1ddc80edbf3b0b395cd8446daa4b83c8"},{url:"image/social/qq.jpg",revision:"7b808b9a205637791afe912c86f73804"},{url:"image/social/wechart.jpg",revision:"712d7c0aaece6a636933dace4bb465bd"},{url:"image/top/1.jpg",revision:"74d9a1f65fdcadf9c1ccd4de3a47b514"},{url:"image/top/2.jpg",revision:"fc0a3d331950d378cdedae39a72c8907"},{url:"image/top/3.jpg",revision:"3ba26739a0a203b1b2514e6e75b2f953"},{url:"image/top/4.jpg",revision:"6dc6fc5fdef0b60aed3905d5a0097278"},{url:"image/top/5.jpg",revision:"91f63947c293211cae743cfd2b542a6d"},{url:"image/top/6.jpg",revision:"42be3e24d676ed27504c5cbc2763080e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"c598cfe945a2d71e74dccdc086009c9a"},{url:"js/bber.js",revision:"431c60d64c774df077e1130e9aab15db"},{url:"js/category.js",revision:"9c3d062d193559b9bad3b3376f65ad35"},{url:"js/coin.js",revision:"16be4711da8cbe57c0be5a9c107b237c"},{url:"js/custom/fixed_card_widget.js",revision:"a24afaa30705e754b4f322a2f638ad15"},{url:"js/diytitle.js",revision:"6fe80aa7ab470ce4be3f325ce58d5578"},{url:"js/F12.js",revision:"c844293fc917c0d6665f5297c907f058"},{url:"js/fixed_card_widget.js",revision:"02eeacd95bff79855f204fe9d4aa35e7"},{url:"js/grayscale.js",revision:"f514db2dd97feecb52f6f0e24b67de61"},{url:"js/ip_content.js",revision:"44470de8afd6358f0c9dd9583138bd40"},{url:"js/main.js",revision:"f10f9dcc8ed11d1bfb0378c80a6e9508"},{url:"js/rightmenu.js",revision:"6005627ce3a9584fee3b657691563cb1"},{url:"js/runtime.js",revision:"273e7a33a8dfdcc18e300e0bc6ba683d"},{url:"js/SAO_ranklist.js",revision:"8251b2565fd81016418269be6b9db5e9"},{url:"js/search/algolia.js",revision:"d36a279469bce7854189f9481d3d0860"},{url:"js/search/local-search.js",revision:"1685cd43da0de7abd4a649dd5b2d81db"},{url:"js/sun_moon.js",revision:"a4e43ec9df5df0f5db20e910b5a3ab1e"},{url:"js/timeago.min.js",revision:"76015a756fcf0b6993f21a5f3dad12a6"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"9f465e7dd29ec62dbc6af321882c2b59"},{url:"js/wow_init.js",revision:"9a6048b8a3aecb9b1604235a436db960"},{url:"kernel.html",revision:"039d1f99950a19085723b35ed42f1fd7"},{url:"live2d-widget/assets/screenshot-1.png",revision:"30b70e6cd9be9812adcb347536f0da85"},{url:"live2d-widget/assets/screenshot-2.png",revision:"1295844e29a6d6dc3a4aa0db8faa7da7"},{url:"live2d-widget/assets/screenshot-3.png",revision:"4aa1995daf77bc19803648fe6a65c33e"},{url:"live2d-widget/autoload.js",revision:"f8b9e985cced56f6959f7a51722aec01"},{url:"live2d-widget/demo/demo.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"live2d-widget/demo/login.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"live2d-widget/live2d.min.js",revision:"ee7efff8ff5d1d4bd4a0ff99affd3ec7"},{url:"live2d-widget/waifu-tips.js",revision:"eb09df3dceb58761dd3aa8edde21a551"},{url:"live2d-widget/waifu.css",revision:"c0b987bdddfa732f8505a8d139bdb69b"},{url:"page/2/index.html",revision:"2286ac84d2d3d9bae170b0f338cc9e68"},{url:"posts/bwc3b8/index.html",revision:"bb6c7cc8a35a92c9d14fa2838600256b"},{url:"posts/cm90dg/index.html",revision:"59dd7873891a1a003f93e31cdb502357"},{url:"posts/cp5lo3/index.html",revision:"7473aeac8bf00ed54369858f25e1a45b"},{url:"posts/cubnfn/index.html",revision:"0edfea737c04ca7860317a475283fb31"},{url:"posts/dgdfmq/index.html",revision:"cd76944a7f73004fe1a9ae7ce361a7a1"},{url:"posts/dn9gd2/index.html",revision:"568433dd65c23705ae5c31728570095b"},{url:"posts/dw9ocy/index.html",revision:"512a03cb2bee3824d8be1096fb90dd6c"},{url:"posts/hat8zc/index.html",revision:"fb37f3106a742b0c54373a6bce626b89"},{url:"posts/hexcsn/index.html",revision:"6e965874e7c4bee220083314d58b7905"},{url:"posts/mhbbc6/index.html",revision:"f63437a9ebb89a65023c68651a65b725"},{url:"posts/mhhzac/index.html",revision:"e8e3b8e6ec5ec6d95aa049e765b84bb9"},{url:"posts/oirlsf/index.html",revision:"d3181bc24ed5a899f9eb2ccf5754bb54"},{url:"posts/omwx46/index.html",revision:"72916165fe36371dcaeaa920ec514527"},{url:"posts/pqy51r/index.html",revision:"0220459c324a3a6c3b425bf289c3e1ad"},{url:"posts/qpht7q/index.html",revision:"041693a9ade33be3fb270607de23a362"},{url:"posts/tmt5y4/index.html",revision:"d73a227e7d49c1ccf7f1612d2a6bb6e3"},{url:"posts/xg6rkw/index.html",revision:"73c1989884dc74bc1caeab1bfc0a8f3c"},{url:"posts/xxz26y/index.html",revision:"7e09759101cb074aa6ab1612b87473a0"},{url:"posts/zf108d/index.html",revision:"b3aac3b18a13d55ee945ae7e7da64198"},{url:"random/index.html",revision:"cddef0e354b7e5d79356239f6bd0d6fd"},{url:"shuoshuo/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"tags/butterfly/index.html",revision:"40347227f885b800a87eb2aaea3dc7e7"},{url:"tags/Butterfly/index.html",revision:"c71a52a40266f445c239dce2e416118c"},{url:"tags/c/index.html",revision:"1810d4b7c6c888bef9d97d0b758e30de"},{url:"tags/go-cqhttp/index.html",revision:"9f40c8de1be9bf98fb94e0a1cded6640"},{url:"tags/hexo/index.html",revision:"eef681ad60566c53aa1965a6c19b80e1"},{url:"tags/Hexo/index.html",revision:"21dfe4c229b4247e7c4c71835c2ab11f"},{url:"tags/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"tags/kali/index.html",revision:"e149d6cadfbae63d016865e986c3886b"},{url:"tags/kms/index.html",revision:"a98fff8c1e262de7f11a7508e24f642a"},{url:"tags/Linux/index.html",revision:"b9757da957934095e801e0f758102b68"},{url:"tags/office/index.html",revision:"5073a116366375778e43d067c3f2634f"},{url:"tags/php-tp5/index.html",revision:"e81a1b5291a3173abcd91b2b0f5d4b70"},{url:"tags/phpstudy/index.html",revision:"88871b8b53667890cea68bdad97df88f"},{url:"tags/shodan/index.html",revision:"539ccf587d0172b43c3bb9f3415b552e"},{url:"tags/sql/index.html",revision:"380d40bb6869b72a297bd1e671efdaeb"},{url:"tags/Twikoo/index.html",revision:"e42d1a7728d0963ed87cc68b3ddee817"},{url:"tags/v2ray/index.html",revision:"8fcc63422288035fb84a72859701439e"},{url:"tags/vscode/index.html",revision:"4922a4503c3d61e339cb4537ce676c25"},{url:"tags/windows/index.html",revision:"659dfa651318a9cfc5ac17e80d82a94e"},{url:"tags/大学物理/index.html",revision:"b0d399cd0302cec59dd411a895d54f56"},{url:"tags/数据结构/index.html",revision:"3864d54e5bf534b72e1ab0a3c4e1a92a"},{url:"tags/网安/index.html",revision:"6e15935d8e2d97603e5658b58ac651b0"},{url:"tags/计算机组成原理/index.html",revision:"cbce8df3b548edff7d5d92ed8d5e204f"},{url:"tags/语雀/index.html",revision:"cba89291f2ea1fcabd5b85961c65cefe"}],{}),e.registerRoute(/^https:\/\/cheng\.cjic\.xyz\/.*/,new e.CacheFirst,"GET")}));