const CACHE='foscolo-blocco1-v1';
const ASSETS=['./','./index.html','./styles.css','./app.js','./manifest.webmanifest','./assets/originali/Copertina.PNG','./assets/originali/1.PNG','./assets/originali/2.PNG','./assets/originali/3.PNG','./assets/originali/4.PNG','./assets/originali/5.PNG'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
