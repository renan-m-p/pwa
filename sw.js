// Version 0.8
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('applegal').then(cache => {
      return cache.addAll([
        '/pwa/index.html',
        '/pwa/novo.html',
        '/pwa/sobre.html',
        '/pwa/contato.html',
        '/pwa/js/material.min.js',
        'js/camera.js',
        'js/install.js',
        '/pwa/css/styles.css',
        '/pwa/css/material.indigo-red.min.css',
        '/pwa/images/001.jpg',
        '/pwa/images/002.jpg',
        '/pwa/images/003.jpg',
        '/pwa/images/logo.png'
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