const VERSION = 'v1'

self.addEventListener('install', event => {
    event.waitUntil(precache())
})

self.addEventListener('fetch', event => {
    const request = event.request; 
    // Only on gets 
    if(request.method !== 'GET'){
        return; 
    }

    // search in cache
    event.respondWith(cachedResponse(request)); 

    // catch and network (update cache)
    event.waitUntil(updateCache(request)); 
})

async function precache(){
    const cache = await caches.open(VERSION); 
    return cache.addAll([
        '/',
        '/index.html',
        '/assets/index.js',
        '/assets/MediaPlayer.js',
        '/assets/plugins/AutoPlay.js',
        '/assets/plugins/AutoPause.js',
        '/assets/index.css',
        '/assets/tristan.mp4',
    ]); 
}

async function cachedResponse(request){
    const cache = await caches.open(VERSION); 
    const response = await cache.match(request); 
    
    // If response is not empty, we have the resourse in the cache, else we respond with the fetch return value
    return response || fetch(request); 
}

async function updateCache(request){
    const cache = await caches.open(VERSION); 
    const response = await fetch(request); 
    return cache.put(request, response); 
}