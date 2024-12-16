// sw.js

const CACHE_NAME = 'my-site-cache-v2';
const DATA_CACHE_NAME = 'data-cache-v2';

// Seznam statickĂ˝ch souborĹŻ k uloĹľenĂ­ do cache bÄ›hem instalace
const FILES_TO_CACHE = [
  '/',
  '/index.html',
  '/app.js',
  '/style.css',
  '/icon-192.png',
  '/icon-512.png',
  '/manifest.json',
  '/images'
];

// Instalace Service Workera a uloĹľenĂ­ statickĂ˝ch souborĹŻ do cache
self.addEventListener('install', function(evt) {
  evt.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Soubory jsou uklĂˇdĂˇny do cache');
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Aktivace Service Workera a odstranÄ›nĂ­ starĂ˝ch cache
self.addEventListener('activate', function(evt) {
  evt.waitUntil(
    caches.keys().then(keyList => {
      return Promise.all(
        keyList.map(key => {
          if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
            console.log('OdstraĹovĂˇnĂ­ starĂ© cache', key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});