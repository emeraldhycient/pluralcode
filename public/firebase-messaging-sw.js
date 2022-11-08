// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
    apiKey: "AIzaSyC5LlxJ_4cN_INaI7Rw85fjYL6OWWMWocc",
    authDomain: "pluralcodeacademy-6a2d2.firebaseapp.com",
    projectId: "pluralcodeacademy-6a2d2",
    storageBucket: "pluralcodeacademy-6a2d2.appspot.com",
    messagingSenderId: "1002923808537",
    appId: "1:1002923808537:web:c65641034efbc098355788",
    measurementId: "G-1TTECNJK4K"
};


firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
    console.log('Received background message ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: "../src/assets/logo.png",
    };

    self.registration.showNotification(notificationTitle,
        notificationOptions);
});