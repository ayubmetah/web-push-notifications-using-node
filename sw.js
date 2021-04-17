self.addEventListener('push', function(event) {
    console.log('Received a push message', event);
    self.registration.sendNotification('test message', {});
});