console.log('Hello from service-worker.js');
self.addEventListener('push', function(event) {
    console.log('Received a push message', event);
	var title = 'Test Message from Ayub.';
	var body = "This is a test programe from Ayub";
	var icon = './images/qmatic.png';	
	var tag = 'Qmatic-push-demo-notification-tag';
	var data = {
    data: {
      url: '127.0.0.1:8080/'
    }
    };
	
	event.waitUntil(
    self.ServiceWorkerRegistration.sendNotification('title', {
		body: body,
      icon: icon,
      tag: tag,
      data: data
		
	});
});