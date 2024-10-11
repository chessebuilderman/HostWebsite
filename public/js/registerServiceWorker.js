if ('serviceWorker' in navigator) {
    console.log('Service workers allowed');
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/images/service-worker.js')
            .then((registration) => {
                console.log('ServiceWorker registration successful with scope: ', registration.scope);
            })
            .catch((error) => {
                console.error('ServiceWorker registration failed: ', error);
            });
    });
} else {
    console.warn('Service Worker: Service workers are not supported');
}
console.log('Test');