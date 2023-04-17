try {
  const PRECACHE = "precache-v2";
  const RUNTIME = "runtime";

  const PRECACHE_URLS = [
    '/',
    '/admin',
    '/admin/candidate-list',
    '/_next/static/chunks/main.js',
    '/_next/static/chunks/pages/_app.js',
    '/_next/static/chunks/pages/index.js',
    '/_next/static/chunks/webpack.js',
    '/_next/static/css/styles.chunk.css',
    '/_next/static/runtime/main.js',
    '/_next/static/runtime/webpack.js',
    '/_next/static/images/favicon.ico',
    '/favicon.ico',
    '/manifest.json',
  ];

  self.addEventListener("install", (event) => {
    console.log("installing sw");
    event.waitUntil(
      caches
        .open(PRECACHE)
        .then((cache) => cache.addAll(PRECACHE_URLS))
        .then(self.skipWaiting())
    );
  });

  self.addEventListener("activate", (event) => {
    const currentCaches = [PRECACHE, RUNTIME];
    console.log("activate cache");
    event.waitUntil(
      caches
        .keys()
        .then((cacheNames) => {
          return cacheNames.filter(
            (cacheName) => !currentCaches.includes(cacheName)
          );
        })
        .then((cachesToDelete) => {
          console.log("cache is deleting");
          return Promise.all(
            cachesToDelete.map((cacheToDelete) => {
              return caches.delete(cacheToDelete);
            })
          );
        })
        .then(() => self.clients.claim())
    );
  });



  self.addEventListener("fetch", (event) => {
    if (event.request.url.startsWith(self.location.origin)) {
      event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          return caches.open(RUNTIME).then((cache) => {
            return fetch(event.request, {
            }).then((response) => {
              return cache.put(event.request, response.clone()).then(() => {
                return response;
              });
            });
          });
        })
      );
    }
  });
} catch (e) {
  console.log("ERROR LOL")
  console.log(e);
}
