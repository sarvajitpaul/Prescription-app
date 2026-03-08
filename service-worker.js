self.addEventListener('install',function(e){

e.waitUntil(

caches.open('prescription-app').then(function(cache){

return cache.addAll([

'index.html',

'style.css',

'script.js'

]);

})

);

});