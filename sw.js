// Version 0.5
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('applegal').then(cache => {
      return cache.addAll([
        '/',
        'index.html',
        'novo.html',
        'sobre.html',
        'contato.html',
        'styles.css',
        'js/material.min.js',
        'css/material.indigo-red.min.css',
        'css/styles.css',
        'images/001.jpg',
        'images/002.jpg',
        'images/003.jpg'
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