importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');
// js,css 缓存
workbox.routing.registerRoute(
    new RegExp('\\.(?:js|css)$'), // 路由匹配正则
    new workbox.strategies.CacheFirst({ // 缓存优先策略
        cacheName: 'JsCssCache',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 50, // 设置最大请求条数
                maxAgeSeconds: 7 * 24 * 60 * 60, // 设置最长请求时间7天
            }),
        ],
    })
);

// // json 缓存
// workbox.routing.registerRoute(
//     new RegExp('\\.(?:json)$'), // 路由匹配正则
//     new workbox.strategies.NetworkFirst({ // 先用网络再用缓存
//         cacheName: 'JsonCache', 
//         plugins: [
//             new workbox.expiration.ExpirationPlugin({
//                 maxEntries: 50, // 设置最大请求条数
//                 maxAgeSeconds: 7 * 24 * 60 * 60, // 设置最长请求时间7天
//             }),
//         ],
//         networkTimeoutSeconds: 10, // 设置网络超时时间为 5 秒
//     })
// );

// png , ico缓存
workbox.routing.registerRoute(
    new RegExp('\\.(?:png|ico)$'), // 路由匹配正则
    new workbox.strategies.CacheFirst({ // 缓存优先策略
        cacheName: 'PngIcoCache', 
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 50, // 设置最大请求条数
                maxAgeSeconds: 7 * 24 * 60 * 60, // 设置最长请求时间7天
            }),
        ],
    })
);