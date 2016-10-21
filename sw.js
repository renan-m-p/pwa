// Version 0.10
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('applegal').then(cache => {
      return cache.addAll([
        'index.html',
        'novo.html',
        'sobre.html',
        'contato.html',
        'js/material.min.js',
        'js/camera.js',
        'js/install.js',
        'css/styles.css',
        'css/material.indigo-red.min.css',
        'images/001.jpg',
        'images/002.jpg',
        'images/003.jpg',
        'images/logo.png'
      ])
      .then(() => self.skipWaiting());
    })
  )
});

self.addEventListener('activate',  event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});