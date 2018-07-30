// Modified code of Google's 2016 PWA Weather app's service worker
var dataCacheName = 'mgData';
var cacheName = 'mgPWA';
var shell = [
  '/',
  '/index.html',
  '/styles/index.css',
  '/scripts/app.js'
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(shell);
    })
  );
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName && key !== dataCacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  // Fixes a corner case in which the app wasn't returning the latest data.
  return self.clients.claim();
});
