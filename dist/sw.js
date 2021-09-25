const CacheName = 'Cache:v1'

// self = service worker
self.addEventListener('install', (event) => {  
    console.log('ServiceWorker install:', event)  
  })  
    
  self.addEventListener('activate', (event) => {  
    console.log('ServiceWorker activate:', event)  
  })

const networkFallingBackToCache = async (request) => {
  const cache = await caches.open(CacheName)
  try {
    const response = await fetch(request)
    await cache.put(request, response.clone())
    return response
  } catch (err) {
    console.error(err)
    return cache.match(request)
  }
}

  // fetch とはネットワークなどを経由してリソースを取得するために使用するAPIです。 ここにサービスワーカーは介入できるので、リソース取得に対して様々な処理を挟むことができます。
self.addEventListener('fetch', (event) => {
  event.respondWith(networkFallingBackToCache(event.request))
})