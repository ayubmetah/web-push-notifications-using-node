self.addEventListener('push', function(event) {
    console.log('Received a push message', event);
    self.ServiceWorkerRegistration.sendNotification('test message', {});
});