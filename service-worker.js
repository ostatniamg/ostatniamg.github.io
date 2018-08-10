// Modified code of Google's 2016 PWA Weather app's service worker
var dataCacheName = 'mgPWAData';
var cacheName = 'mgPWA';
var shell = [
  '/',
  '/index.html',
  '/styles/shell.css',
  '/scripts/app.js'
];

self.addEventListener('install', (e) => {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(shell);
    })
  );
});

self.addEventListener('activate', (e) => {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
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

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then(() => { 
      return response || fetch(e.request)
    })
  );
});