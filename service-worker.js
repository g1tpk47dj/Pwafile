const CACHE_NAME = 'bakery-cache-v1';
const urlsToCache = [
  'https://www.bayarqris.my.id/p/produk-1.html',
  'https://pwa-files.vercel.app/icons/icon-192.png',
  'https://pwa-files.vercel.app/icons/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
