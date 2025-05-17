self.addEventListener('install', function (event) {
    self.skipWaiting();
  });
  
  self.addEventListener('fetch', function (event) {
    // Futuro cache aqui se quiser offline
  });
  