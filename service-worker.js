// Contoh minimal service-worker.js
self.addEventListener('install', (event) => {
  console.log('Service Worker: installed');
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker: activated');
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Sederhanakan: selalu fetch dari jaringan
  event.respondWith(fetch(event.request));
});
