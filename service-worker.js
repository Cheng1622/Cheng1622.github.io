if(!self.define){let e,d={};const i=(i,a)=>(i=new URL(i+".js",a).href,d[i]||new Promise((d=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=d,document.head.appendChild(e)}else e=i,importScripts(i),d()})).then((()=>{let e=d[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,s)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(d[r])return;let c={};const f=e=>i(e,r),n={module:{uri:r},exports:c,require:f};d[r]=Promise.all(a.map((e=>n[e]||f(e)))).then((e=>(s(...e),c)))}}define(["./workbox-b77dd8d1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"about/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"archives/2022/01/index.html",revision:"aaabffc4d3455475901172b19273b14f"},{url:"archives/2022/02/index.html",revision:"d4da0638cf4bd47c3bcefc5454c95272"},{url:"archives/2022/03/index.html",revision:"d84861c5be5cfb73b3fad49503dbad66"},{url:"archives/2022/04/index.html",revision:"548ebb0ccbf7f0d6f822c5626d09a266"},{url:"archives/2022/index.html",revision:"264b3e72775fdd22ed7b2782ea6a7a90"},{url:"archives/index.html",revision:"9a415b84e4e05522451e979aee61ff77"},{url:"bangumis/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"categories/🍊魔法橙子/index.html",revision:"28e0858d3cdc471bdee3f7f276836209"},{url:"categories/🎃魔法南瓜/index.html",revision:"ab45a69c8442ad77d7f3b3d09d5dbf81"},{url:"categories/🐇魔法兔兔/index.html",revision:"d6c41f63d7dcedf6b80f4d24223b66b2"},{url:"categories/📜魔法卷轴/index.html",revision:"485c67a9c293957078c0faaf54e0a5c4"},{url:"categories/🔔魔法铃铛/index.html",revision:"03d1c1de947b94ffb175f7f4a4d8cc15"},{url:"categories/🧹魔法扫帚/index.html",revision:"950e941b0e14e75ecca3be7a574272a0"},{url:"categories/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"comments/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/coin.css",revision:"477e787ff380ad5d051caecdd5544637"},{url:"css/commentsbar.css",revision:"8c96783d5283b210aefe915dda110fc1"},{url:"css/index.css",revision:"7d0bd6a540d35eb71b8bf26c8ef0154a"},{url:"css/index.min.css",revision:"f429a53bf786e1889241b83e030f6d5b"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"image/404.png",revision:"48679feeebd98000c8843517f382ac75"},{url:"image/bg.jpg",revision:"285690e9719e698727369015d231bb70"},{url:"image/comment_bg.png",revision:"70884b3f858d20f425a132f746e9aa8e"},{url:"image/friend_404.gif",revision:"cb626f0ff72a7aba9c253b503cf8563e"},{url:"image/icon.jpg",revision:"c5ef22237454def3d23e54ac2df5802d"},{url:"image/reward/alipay.png",revision:"c0c664a07e8dc394694b687e34fcc5e6"},{url:"image/reward/wechat.png",revision:"1ddc80edbf3b0b395cd8446daa4b83c8"},{url:"image/social/qq.jpg",revision:"7b808b9a205637791afe912c86f73804"},{url:"image/social/wechart.jpg",revision:"712d7c0aaece6a636933dace4bb465bd"},{url:"image/top/1.jpg",revision:"74d9a1f65fdcadf9c1ccd4de3a47b514"},{url:"image/top/2.jpg",revision:"fc0a3d331950d378cdedae39a72c8907"},{url:"image/top/3.jpg",revision:"3ba26739a0a203b1b2514e6e75b2f953"},{url:"image/top/4.jpg",revision:"6dc6fc5fdef0b60aed3905d5a0097278"},{url:"image/top/5.jpg",revision:"91f63947c293211cae743cfd2b542a6d"},{url:"image/top/6.jpg",revision:"42be3e24d676ed27504c5cbc2763080e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"ce63d8b199d5842f7251a1c126056147"},{url:"js/bber.js",revision:"431c60d64c774df077e1130e9aab15db"},{url:"js/category.js",revision:"9c3d062d193559b9bad3b3376f65ad35"},{url:"js/coin.js",revision:"16be4711da8cbe57c0be5a9c107b237c"},{url:"js/custom/fixed_card_widget.js",revision:"a24afaa30705e754b4f322a2f638ad15"},{url:"js/diytitle.js",revision:"6fe80aa7ab470ce4be3f325ce58d5578"},{url:"js/F12.js",revision:"c844293fc917c0d6665f5297c907f058"},{url:"js/fixed_card_widget.js",revision:"02eeacd95bff79855f204fe9d4aa35e7"},{url:"js/grayscale.js",revision:"f514db2dd97feecb52f6f0e24b67de61"},{url:"js/ip_content.js",revision:"44470de8afd6358f0c9dd9583138bd40"},{url:"js/main.js",revision:"f10f9dcc8ed11d1bfb0378c80a6e9508"},{url:"js/rightmenu.js",revision:"6005627ce3a9584fee3b657691563cb1"},{url:"js/runtime.js",revision:"273e7a33a8dfdcc18e300e0bc6ba683d"},{url:"js/SAO_ranklist.js",revision:"8251b2565fd81016418269be6b9db5e9"},{url:"js/search/algolia.js",revision:"d36a279469bce7854189f9481d3d0860"},{url:"js/search/local-search.js",revision:"1685cd43da0de7abd4a649dd5b2d81db"},{url:"js/sun_moon.js",revision:"a4e43ec9df5df0f5db20e910b5a3ab1e"},{url:"js/timeago.min.js",revision:"76015a756fcf0b6993f21a5f3dad12a6"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"9f465e7dd29ec62dbc6af321882c2b59"},{url:"js/wow_init.js",revision:"9a6048b8a3aecb9b1604235a436db960"},{url:"kernel.html",revision:"039d1f99950a19085723b35ed42f1fd7"},{url:"live2d-widget/assets/screenshot-1.png",revision:"30b70e6cd9be9812adcb347536f0da85"},{url:"live2d-widget/assets/screenshot-2.png",revision:"1295844e29a6d6dc3a4aa0db8faa7da7"},{url:"live2d-widget/assets/screenshot-3.png",revision:"4aa1995daf77bc19803648fe6a65c33e"},{url:"live2d-widget/autoload.js",revision:"f8b9e985cced56f6959f7a51722aec01"},{url:"live2d-widget/demo/demo.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"live2d-widget/demo/login.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"live2d-widget/live2d.min.js",revision:"ee7efff8ff5d1d4bd4a0ff99affd3ec7"},{url:"live2d-widget/waifu-tips.js",revision:"eb09df3dceb58761dd3aa8edde21a551"},{url:"live2d-widget/waifu.css",revision:"c0b987bdddfa732f8505a8d139bdb69b"},{url:"page/2/index.html",revision:"2d94fd64409b6aa944becc357e0413ad"},{url:"posts/bwc3b8/index.html",revision:"2352a86203c51d037968b72a585bc5bb"},{url:"posts/cm90dg/index.html",revision:"ad05b2df4b8379741d7058ad40e0fd83"},{url:"posts/cp5lo3/index.html",revision:"485c40a87cb9ab9d652f3f2ea121be09"},{url:"posts/cubnfn/index.html",revision:"c270a5004d8a1b4b6bfbf19a0fe028f6"},{url:"posts/dgdfmq/index.html",revision:"d8521766df7225e21cd13eda253d7f93"},{url:"posts/dn9gd2/index.html",revision:"d9cdbec6d7776171012b7382992164de"},{url:"posts/dw9ocy/index.html",revision:"529d7aaea4f87290b697150d65141cfa"},{url:"posts/hat8zc/index.html",revision:"8362080da8bc1bbf92a4020c82951aa1"},{url:"posts/hexcsn/index.html",revision:"48e751d3380ca17a3779f4fbef591758"},{url:"posts/mhbbc6/index.html",revision:"af186e98d9be537292547054eb489b9d"},{url:"posts/mhhzac/index.html",revision:"040393de4ba7f5ec247fc07272798d7b"},{url:"posts/oirlsf/index.html",revision:"80cbc6dba5554ad958dd12c61ed8eed0"},{url:"posts/omwx46/index.html",revision:"a627bc26170ca1dcc3b9e1cf67b0ed77"},{url:"posts/pqy51r/index.html",revision:"1136b50870c80ec1b59df8ac46c96262"},{url:"posts/qpht7q/index.html",revision:"0ada500dfe3f078c0e3b9abfed136ef3"},{url:"posts/tmt5y4/index.html",revision:"09b2280f2f1788238ce89140bc714573"},{url:"posts/xg6rkw/index.html",revision:"7db076845f82a028c13fe079e325fd26"},{url:"posts/xxz26y/index.html",revision:"9fd7dcef825b866f05b9b220245a8c5e"},{url:"posts/zf108d/index.html",revision:"448e4a9fdb74bcfd50663ee62d186b70"},{url:"random/index.html",revision:"cddef0e354b7e5d79356239f6bd0d6fd"},{url:"shuoshuo/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"tags/butterfly/index.html",revision:"1572faecb6b1e99ed9e66d5516e08e10"},{url:"tags/Butterfly/index.html",revision:"36ccf06135713ec6fe054d28310b9e85"},{url:"tags/c/index.html",revision:"cbdf4da63c7b5ac6975efd972801b830"},{url:"tags/go-cqhttp/index.html",revision:"685d5d76ee59b2ba7ea0dcf99d9e76cb"},{url:"tags/hexo/index.html",revision:"7a35becfe4aa0a32b8bb359ec4301a29"},{url:"tags/Hexo/index.html",revision:"0e6d2654b14849684b7257c7bfc9a177"},{url:"tags/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"tags/kali/index.html",revision:"74dbe91b3c5e184bfd3d1a4120ab2aba"},{url:"tags/kms/index.html",revision:"16383ed85ff7ea43f6988ce1a090177a"},{url:"tags/Linux/index.html",revision:"29a5124a08b7357046dc3af70c7d38f4"},{url:"tags/office/index.html",revision:"32419fe18086fd483c5a1a6de28fe00a"},{url:"tags/php-tp5/index.html",revision:"4f43a326c7f19ea944aed47f7a9736ab"},{url:"tags/phpstudy/index.html",revision:"377a04096b1e220d8fdee07ef2762cad"},{url:"tags/shodan/index.html",revision:"9d613711f6cb19a3bca924b5108733e3"},{url:"tags/sql/index.html",revision:"1f8164f8b21147de08468eeba3b41a8e"},{url:"tags/Twikoo/index.html",revision:"2a4f2dc3a63d7fb454949dea497077cb"},{url:"tags/v2ray/index.html",revision:"dfd7ba22a946e0d29406ba0eb1e7d6b5"},{url:"tags/vscode/index.html",revision:"6c6abc409ed1f1972c5f13ed2c1e8473"},{url:"tags/windows/index.html",revision:"c08daeacc397cf95d3ce9df03334d69f"},{url:"tags/大学物理/index.html",revision:"0d9db146b650b1ee40077f4bdd1db157"},{url:"tags/数据结构/index.html",revision:"8dd301eb77b1e48ff65e3bf77f1fb3fc"},{url:"tags/网安/index.html",revision:"0c866ac47828d3cec88bf41bf4104ca5"},{url:"tags/计算机组成原理/index.html",revision:"8e4e0169d072f9fce4aad6943eed745b"},{url:"tags/语雀/index.html",revision:"c53ddf9107b055c200f6260e413fa92e"}],{}),e.registerRoute(/^https:\/\/cheng\.cjic\.xyz\/.*/,new e.CacheFirst,"GET")}));