// sw.js (Service Worker)

const CACHE_NAME = 'brand-pro-v3';
const ASSETS = [
    './index.html',
    './manifest.json',
    './core-engine.js',
    './content-generator.js'
];

self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
        })
    );
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    );
});
