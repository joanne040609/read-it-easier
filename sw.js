const CACHE='rie-v1.4.1';
const ASSETS=['./','index.html','manifest.json','icons/app-192.png','icons/app-512.png','icons/app-maskable-512.png','icons/hero.png','vendor/pdf.min.js','vendor/pdf.worker.min.js','vendor/pdf-lib.min.js'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
  const req=e.request;
  if(req.method!=='GET'||new URL(req.url).origin!==location.origin)return;
  const fallback=()=>caches.match(req,{ignoreSearch:true}).then(r=>r||caches.match('index.html'));
  e.respondWith(fetch(req).then(r=>{
    if(!r.ok)return fallback().then(c=>c||r);
    const copy=r.clone();caches.open(CACHE).then(c=>c.put(req,copy));return r;
  }).catch(fallback));
});
