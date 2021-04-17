var push = require('web-push');

let vapidKeys = {
    publicKey: 'BPVMhgrOyXbzcthJ6J15H5t4J8pFa4_IJGeV8TyYOo2L4QitV8spo1h4YMdC1LDuGosSQAX8hIJUNwJ2ZuQcmuI',
    privateKey: 'emDznNmYQ5nAWqF8tNzQW7bZIEYVWkItWJALuhJeAKQ'
}

push.setVapidDetails('mailto: metta.job@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {};
push.sendNotification(sub, 'test message')