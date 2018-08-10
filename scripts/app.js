if ('serviceWorker' in navigator) {
  navigator.serviceWorker
           .register('/service-worker.js', {scope: '.'})
           .then(() => console.log('[App] Service Worker Registered'));
}
else {
  console.log('[App] ERROR: Service Worker not found');
}