const CACHE_NAME = `${process.env.NEXT_PUBLIC_PWA_SHORT_NAME}-v1`;
const urlsToCache = [
  '/',
  '/login',
  '/signup',
  '/home',
  '/plans',
  '/redeem',
  '/profile',
  '/admin',
  '/admin/dashboard',
  '/admin/profile',
  '/admin/redeem',
  '/admin/users',
  '/admin/members',
  '/manifest.json',
  '/mobile-icon.svg'
];

// Install event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      })
  );
});

// Activate event
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
