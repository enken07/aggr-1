var serviceWorkerOption = {"assets":["/aggr/js/aggregator.17cf66bd.worker.js","/aggr/img/BINANCE.485a12cb.svg","/aggr/img/BITMEX.447dea38.svg","/aggr/img/BITFINEX.4a8ca8e7.svg","/aggr/img/OKEX.5d207793.svg","/aggr/img/BINANCE_FUTURES.450d1a4f.svg","/aggr/img/HUOBI.44809724.svg","/aggr/img/COINBASE.8a95d742.svg","/aggr/img/BINANCE_US.644dead4.svg","/aggr/img/BITSTAMP.31b40fd5.svg","/aggr/img/KRAKEN.97298844.svg","/aggr/img/HITBTC.c82e309c.svg","/aggr/img/POLONIEX.ba8cf03b.svg","/aggr/img/BYBIT.cd62d320.svg","/aggr/img/FTX.2bbe6ec8.svg","/aggr/img/DERIBIT.21f26f1e.svg","/aggr/img/PHEMEX.4a159b28.svg","/aggr/img/DYDX.4322608a.svg","/aggr/fonts/Barlow-SemiBold.6889c62c.woff2","/aggr/fonts/Barlow-Regular.61d84cc5.woff2","/aggr/fonts/Barlow-SemiBold.e969585c.woff","/aggr/fonts/Barlow-Medium.71bb6946.woff2","/aggr/fonts/Barlow-Regular.58589bb0.woff","/aggr/fonts/Barlow-Medium.a85515bc.woff","/aggr/fonts/icon.3cb77ba3.woff","/aggr/fonts/icon.795c2397.ttf","/aggr/img/icon.24ac0e17.svg","/aggr/css/app.e029c66e.css","/aggr/js/app.f41743fd.js","/aggr/js/chunk-2d0cc844.534b1991.js","/aggr/js/chunk-85145916.18c3a2ee.js","/aggr/js/chunk-vendors.41fa3a14.js","/aggr/index.html","/aggr/manifest.json","/aggr/android-chrome-192x192.png","/aggr/apple-touch-icon.png","/aggr/favicon-32x32.png","/aggr/android-chrome-512x512.png","/aggr/browserconfig.xml","/aggr/favicon-16x16.png","/aggr/img/icons/android-chrome-512x512.png","/aggr/favicon.ico","/aggr/img/icons/android-chrome-192x192.png","/aggr/img/icons/android-chrome-maskable-192x192.png","/aggr/img/icons/apple-touch-icon-152x152.png","/aggr/img/icons/apple-touch-icon-180x180.png","/aggr/img/icons/apple-touch-icon-120x120.png","/aggr/img/icons/apple-touch-icon-60x60.png","/aggr/img/icons/android-chrome-maskable-512x512.png","/aggr/img/icons/apple-touch-icon.png","/aggr/img/icons/apple-touch-icon-76x76.png","/aggr/img/icons/favicon-16x16.png","/aggr/img/icons/mstile-144x144.png","/aggr/img/icons/favicon.ico","/aggr/img/icons/favicon-32x32.png","/aggr/img/icons/mstile-310x150.png","/aggr/img/icons/msapplication-icon-144x144.png","/aggr/img/icons/mstile-150x150.png","/aggr/img/icons/mstile-310x310.png","/aggr/img/icons/safari-pinned-tab.svg","/aggr/mstile-144x144.png","/aggr/mstile-310x310.png","/aggr/mstile-70x70.png","/aggr/mstile-150x150.png","/aggr/img/icons/mstile-70x70.png","/aggr/site.webmanifest","/aggr/safari-pinned-tab.svg","/aggr/mstile-310x150.png","/aggr/precache-manifest.dcd5f3c6d27ee06224119b4c50b3b5a4.js","/aggr/service-worker.js"]};
        
        (function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/aggr/",n(n.s="249e")})({"249e":function(t,e,n){(function(t){self.addEventListener("fetch",(function(){})),self.addEventListener("install",(function(e){e.waitUntil(caches.open("airhorner").then((function(e){return e.addAll(t.serviceWorkerOption.assets)})))})),self.addEventListener("push",(function(t){var e=t.data.json(),n={body:e.body,data:{url:e.origin,price:e.price,market:e.market}};self.registration.showNotification(e.title,n),self.clients.matchAll({type:"window"}).then((function(t){t.forEach((function(t){t.postMessage({price:e.price,market:e.market})}))}))})),self.addEventListener("notificationclick",(function(t){t.notification.close();var e="https://charts.aggr.trade";t.notification.data.url&&(e=t.notification.data.url),t.waitUntil(clients.matchAll({type:"window"}).then((function(t){for(var n=0;n<t.length;n++){var r=t[n];if(r.url==e&&"focus"in r)return r.focus()}if(t.openWindow)return t.openWindow(e)})))}))}).call(this,n("c8ba"))},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n}});