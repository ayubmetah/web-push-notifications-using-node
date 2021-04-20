var push = require('web-push');

var vapidKeys = {
    publicKey: 'BPVMhgrOyXbzcthJ6J15H5t4J8pFa4_IJGeV8TyYOo2L4QitV8spo1h4YMdC1LDuGosSQAX8hIJUNwJ2ZuQcmuI',
    privateKey: 'emDznNmYQ5nAWqF8tNzQW7bZIEYVWkItWJALuhJeAKQ'
};

push.setVapidDetails('mailto: metta.job@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);

var sub = { "endpoint": "https://fcm.googleapis.com/fcm/send/fhjF05W5JLs:APA91bGJ4MR7_pcmBM81BvIkCxgjAbcZPunGW4lGzTBVjDJ09aIGQw4mY4W6pjbD8CiY5J02V88wopBkxowcV0uYWmHQMSTA-XEwCHdNuamA6GvUOphtAaMCLv1x6GakA2_I5ziWJ5pA", "expirationTime": null, "keys": { "p256dh": "BErmuS66PRW_ZLAKmq03yBshxHV5shcfHgcFCjBcil8qYOoYXS7jmmGcOVzAonTkwLloGRHjvo3NMchSjPVrZrk", "auth": "wkPHgfnIYYZSqQFXSta60g" } }
push.sendNotification(sub, 'test message');