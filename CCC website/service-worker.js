const CACHE_NAME = 'ccc-cache-v2';
const urlsToCache = [
  '/',
  '/about/',
  '/activities/',
  '/dashboard/',
  '/404.html',
  '/offline.html',  
  '/login.html',
  '/assets/images/ccc-logo.png',
  '/assets/images/ccc-logo192x192.png',
  '/assets/images/favicon.ico',
  '/assets/images/img1.jpg',
  '/assets/images/img2.jpg',
  '/assets/images/img3.jpg',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(resp => resp || fetch(event.request))
      .catch(() => caches.match('/offline.html'))
  );
});
