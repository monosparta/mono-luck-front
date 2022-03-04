/*
 * @Author: your name
 * @Date: 2022-03-04 09:39:41
 * @LastEditTime: 2022-03-04 09:39:42
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \mono-luck-front\public\serviceWorker.js
 */
this.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('v1').then(function(cache) {
        return cache.addAll(['../*.*']);
      }),
    );
  });

  this.addEventListener('activate', function(event) {
    console.log('activated!');
  });

  this.addEventListener('fetch', function (event) {
    // it can be empty if you just want to get rid of that error
});