const CACHE_NAME = 'images-cache-v1';
const urlsToCache = [
    '/images/front_page.jpg',
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) =>
                // Cache initial set of URLs
                cache.addAll(urlsToCache)
            )
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // Return response from cache if available
                if (response) {
                    return response;
                }
                // Fetch from network and cache the response
                return fetch(event.request).then((networkResponse) => {
                    // Check if we received a valid response
                    if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
                        return networkResponse;
                    }

                    // Clone the response to cache it
                    const responseToCache = networkResponse.clone();

                    caches.open(CACHE_NAME)
                        .then((cache) => {
                            console.log(event.request);
                            cache.put(event.request, responseToCache);
                        });

                    return networkResponse;
                });
            })
    );
});

self.addEventListener('activate', (event) => {
    const cacheWhitelist = [CACHE_NAME];

    event.waitUntil(
        caches.keys().then((cacheNames) => Promise.all(
            cacheNames.map((cacheName) => {
                if (cacheWhitelist.indexOf(cacheName) === -1) {
                    // Delete caches that are not in the whitelist
                    return caches.delete(cacheName);
                }
            })
        ))
    );
});
