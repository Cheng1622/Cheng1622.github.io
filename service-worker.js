if(!self.define){let e,i={};const d=(d,a)=>(d=new URL(d+".js",a).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(a,c)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let r={};const n=e=>d(e,s),f={module:{uri:s},exports:r,require:n};i[s]=Promise.all(a.map((e=>f[e]||n(e)))).then((e=>(c(...e),r)))}}define(["./workbox-b77dd8d1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"83a4f750e606917bce211287b30593e9"},{url:"about/index.html",revision:"faccb1e818b04b248b39b7a83bd0cfce"},{url:"archives/2022/01/index.html",revision:"ea753e66f19eccb7381b5158ec5a3aa0"},{url:"archives/2022/02/index.html",revision:"2ad9c6b5243b5a9d6a670579c95eb6bd"},{url:"archives/2022/03/index.html",revision:"59884a24108683e6be9d6272c1ad20e3"},{url:"archives/2022/04/index.html",revision:"31a62dc16e6f8658fbb45cad5677baba"},{url:"archives/2022/index.html",revision:"9609938f4981ec3dd4a988206c3cd915"},{url:"archives/index.html",revision:"f5ec182cc3678201102166e4b352bd04"},{url:"bangumis/index.html",revision:"f3192b1d4af37161bcc7e381eaec124e"},{url:"categories/🍊魔法橙子/index.html",revision:"d548c97a980997bbdf2ee823409c0266"},{url:"categories/🎃魔法南瓜/index.html",revision:"d8f9c97cded69561827359cc8374503e"},{url:"categories/🐇魔法兔兔/index.html",revision:"00aa3831130b8a9dec3f0197748d38de"},{url:"categories/📜魔法卷轴/index.html",revision:"65dae67a2f2cda0bdf5292e99f3011d9"},{url:"categories/🔔魔法铃铛/index.html",revision:"7223a0693ded32d061021f90205175d6"},{url:"categories/🧹魔法扫帚/index.html",revision:"8f22d6ecd05139b2198e382519942c97"},{url:"categories/index.html",revision:"45b7f8fa61d1feb473d46d8d3d340a19"},{url:"comments/index.html",revision:"6836e9ef9caca7984161c176c799bf09"},{url:"css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"css/coin.css",revision:"477e787ff380ad5d051caecdd5544637"},{url:"css/commentsbar.css",revision:"8c96783d5283b210aefe915dda110fc1"},{url:"css/index.css",revision:"683946bd3329fc3c2047e271d578c9b1"},{url:"css/index.min.css",revision:"334844aa397eb836ceb30d5fd56224a6"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"image/404.png",revision:"48679feeebd98000c8843517f382ac75"},{url:"image/bg.jpg",revision:"285690e9719e698727369015d231bb70"},{url:"image/comment_bg.png",revision:"70884b3f858d20f425a132f746e9aa8e"},{url:"image/friend_404.gif",revision:"cb626f0ff72a7aba9c253b503cf8563e"},{url:"image/icon.jpg",revision:"c5ef22237454def3d23e54ac2df5802d"},{url:"image/reward/alipay.png",revision:"c0c664a07e8dc394694b687e34fcc5e6"},{url:"image/reward/wechat.png",revision:"1ddc80edbf3b0b395cd8446daa4b83c8"},{url:"image/social/qq.jpg",revision:"7b808b9a205637791afe912c86f73804"},{url:"image/social/wechart.jpg",revision:"712d7c0aaece6a636933dace4bb465bd"},{url:"image/top/1.jpg",revision:"74d9a1f65fdcadf9c1ccd4de3a47b514"},{url:"image/top/2.jpg",revision:"fc0a3d331950d378cdedae39a72c8907"},{url:"image/top/3.jpg",revision:"3ba26739a0a203b1b2514e6e75b2f953"},{url:"image/top/4.jpg",revision:"6dc6fc5fdef0b60aed3905d5a0097278"},{url:"image/top/5.jpg",revision:"91f63947c293211cae743cfd2b542a6d"},{url:"image/top/6.jpg",revision:"42be3e24d676ed27504c5cbc2763080e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"b50b228094ae542c8c6b4ca4e92a334c"},{url:"js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"js/coin.js",revision:"16be4711da8cbe57c0be5a9c107b237c"},{url:"js/custom/fixed_card_widget.js",revision:"a24afaa30705e754b4f322a2f638ad15"},{url:"js/diytitle.js",revision:"6fe80aa7ab470ce4be3f325ce58d5578"},{url:"js/F12.js",revision:"c844293fc917c0d6665f5297c907f058"},{url:"js/fixed_card_widget.js",revision:"02eeacd95bff79855f204fe9d4aa35e7"},{url:"js/grayscale.js",revision:"f514db2dd97feecb52f6f0e24b67de61"},{url:"js/ip_content.js",revision:"2d297dae70c7eca256baf144ad62a763"},{url:"js/main.js",revision:"f10f9dcc8ed11d1bfb0378c80a6e9508"},{url:"js/Meting.min.js",revision:"08f5ae78a1e909aee8bf75122dea5475"},{url:"js/rightmenu.js",revision:"6005627ce3a9584fee3b657691563cb1"},{url:"js/runtime.js",revision:"273e7a33a8dfdcc18e300e0bc6ba683d"},{url:"js/SAO_ranklist.js",revision:"8251b2565fd81016418269be6b9db5e9"},{url:"js/search/algolia.js",revision:"d36a279469bce7854189f9481d3d0860"},{url:"js/search/local-search.js",revision:"1685cd43da0de7abd4a649dd5b2d81db"},{url:"js/sun_moon.js",revision:"a4e43ec9df5df0f5db20e910b5a3ab1e"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"9f465e7dd29ec62dbc6af321882c2b59"},{url:"js/wow_init.js",revision:"9a6048b8a3aecb9b1604235a436db960"},{url:"kernel.html",revision:"039d1f99950a19085723b35ed42f1fd7"},{url:"live2d-widget/assets/screenshot-1.png",revision:"30b70e6cd9be9812adcb347536f0da85"},{url:"live2d-widget/assets/screenshot-2.png",revision:"1295844e29a6d6dc3a4aa0db8faa7da7"},{url:"live2d-widget/assets/screenshot-3.png",revision:"4aa1995daf77bc19803648fe6a65c33e"},{url:"live2d-widget/autoload.js",revision:"f8b9e985cced56f6959f7a51722aec01"},{url:"live2d-widget/demo/demo.html",revision:"1ec4015c01f9e503d4812c8457c9ed98"},{url:"live2d-widget/demo/login.html",revision:"fff6814498ae250c3434b6f408147b1d"},{url:"live2d-widget/live2d.min.js",revision:"ee7efff8ff5d1d4bd4a0ff99affd3ec7"},{url:"live2d-widget/waifu-tips.js",revision:"eb09df3dceb58761dd3aa8edde21a551"},{url:"live2d-widget/waifu.css",revision:"b6c89745f105483217c3e63a0c590992"},{url:"notice/index.html",revision:"fd0a117fcc0770afab2519063ca753da"},{url:"page/2/index.html",revision:"d7a7e05c9a41fe3f84f360638b7631ec"},{url:"posts/bwc3b8/index.html",revision:"7b8657cc39579cfa6874c58242bdfa06"},{url:"posts/cm90dg/index.html",revision:"34463b471d9d6682d568ac39331b9b90"},{url:"posts/cp5lo3/index.html",revision:"0dfa15c25723db1e2d3bfbcfd1634353"},{url:"posts/cubnfn/index.html",revision:"ea49400d317c04ac85b9fbd6a0c87171"},{url:"posts/dgdfmq/index.html",revision:"a753ad4385d31a0247d58089dbcbe060"},{url:"posts/dn9gd2/index.html",revision:"7963e14ce4f5a4c26952a91284bf1078"},{url:"posts/dw9ocy/index.html",revision:"ced2f34711c0dd73d9c0a9444250d7ba"},{url:"posts/hat8zc/index.html",revision:"ad7a0050e72f465c4cd5bb1ea22b0356"},{url:"posts/hexcsn/index.html",revision:"63489bd8a2ca3e22d3334933b3a9e3a0"},{url:"posts/mhbbc6/index.html",revision:"0561fa967e5ab7adbd160ec1ecee80f2"},{url:"posts/mhhzac/index.html",revision:"4728f5ad5bf895252c73a344c445448d"},{url:"posts/oirlsf/index.html",revision:"24cf07f6cca5b9fef517451e08557f85"},{url:"posts/omwx46/index.html",revision:"22f3b468abeb94797b9cc8e90c512183"},{url:"posts/pqy51r/index.html",revision:"8a66bb6de256dd870de4dd5483deabfc"},{url:"posts/qpht7q/index.html",revision:"76e3718e960d788b7bd778dcb066bee4"},{url:"posts/tmt5y4/index.html",revision:"0cf72233750e5f30ea84725735c05c08"},{url:"posts/xg6rkw/index.html",revision:"65fcbf8b1742fed239c367f5a2b2cf34"},{url:"posts/xxz26y/index.html",revision:"4fa8801dfa076740c08e1bee8217fb53"},{url:"posts/zf108d/index.html",revision:"f9c250458976daf98858eefaff6b0d51"},{url:"random/index.html",revision:"cddef0e354b7e5d79356239f6bd0d6fd"},{url:"shuoshuo/index.html",revision:"75d137071eb3dbc4b24559de2f26daad"},{url:"tags/butterfly/index.html",revision:"cbf5a8c653a06aa0aacc23fdb8f93a65"},{url:"tags/Butterfly/index.html",revision:"062a68368644c8e31fba06e95d2e6b39"},{url:"tags/c/index.html",revision:"154d592c6898e94132a8791ae966d632"},{url:"tags/go-cqhttp/index.html",revision:"50a0dd8c488e7aeeafc46fae5e902f3e"},{url:"tags/hexo/index.html",revision:"cb2176d0ea63aaa9bef25f012ccdfc73"},{url:"tags/Hexo/index.html",revision:"2fd350d29d8c4c63265d009d1c99fce5"},{url:"tags/index.html",revision:"998917390f365b5ec36c91e2bc1f9470"},{url:"tags/kali/index.html",revision:"4f810d6b1c19218129188670dc724d91"},{url:"tags/kms/index.html",revision:"10f395c5ebeeea4cfc7a5b6540e8bc12"},{url:"tags/Linux/index.html",revision:"d7473e6781ea9c114c84a8a887598e8a"},{url:"tags/office/index.html",revision:"52eb675db27692e303f5ef298f0c0db5"},{url:"tags/php-tp5/index.html",revision:"40b15b8b42e71677c7c3df547b11ced2"},{url:"tags/phpstudy/index.html",revision:"0a9dd28bd261f9cc015f328f999fa4f0"},{url:"tags/shodan/index.html",revision:"c8ce06c91416c621ba8481edf8952cc4"},{url:"tags/sql/index.html",revision:"d6eb513181c23a37760bad13c210a560"},{url:"tags/Twikoo/index.html",revision:"6139747fe3c749332a44c172e5c50452"},{url:"tags/v2ray/index.html",revision:"9a42bc23e56bb80d466adeb98225e0e7"},{url:"tags/vscode/index.html",revision:"8d31fe94f3d40fb6fe1d9928b56e8ff6"},{url:"tags/windows/index.html",revision:"57d9c184a45aabfcb17683c810a39961"},{url:"tags/大学物理/index.html",revision:"af8cc36b5d7333b860557ca91207aedd"},{url:"tags/数据结构/index.html",revision:"c8d6e4bf6828599b53509a961f4e7a2b"},{url:"tags/网安/index.html",revision:"b8fd3eb742ce8482ba7231796313d1be"},{url:"tags/计算机组成原理/index.html",revision:"3c98091ed04afacd9232a6199440f3f7"},{url:"tags/语雀/index.html",revision:"fea2b2571fc2119ae888aa4582a7c5c8"}],{}),e.registerRoute(/^https:\/\/cheng\.cjic\.xyz\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
