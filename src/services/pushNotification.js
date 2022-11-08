import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC5LlxJ_4cN_INaI7Rw85fjYL6OWWMWocc",
    authDomain: "pluralcodeacademy-6a2d2.firebaseapp.com",
    projectId: "pluralcodeacademy-6a2d2",
    storageBucket: "pluralcodeacademy-6a2d2.appspot.com",
    messagingSenderId: "1002923808537",
    appId: "1:1002923808537:web:c65641034efbc098355788",
    measurementId: "G-1TTECNJK4K"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseapp);



export const AskForToken = async (setTokenFound) => {
    try {
        const currentToken = await getToken(messaging, { vapidKey: 'BKUP0TnWajCwB7fWgFqd3OQGSt4SWu295OneF1YdYn5Zgt4klKLGPfcrBObDp4Orv2eXkGmqYKK-ry20CnvpWVM' });
        if (currentToken) {
            console.log('current token for client: ', currentToken);
            setTokenFound(true);
        } else {
            console.log('No registration token available. Request permission to generate one.');
            setTokenFound(false);
        }
    } catch (err) {
        console.log('An error occurred while retrieving token. ', err);
    }
}

export const subscribeTopic = async (token) => {
    getMessaging().subscribeToTopic(token, "general")
        .then((response) => {
            // See the MessagingTopicManagementResponse reference documentation
            // for the contents of response.
            console.log('Successfully subscribed to topic:', response);
        })
        .catch((error) => {
            console.log('Error subscribing to topic:', error);
        });
};

export const onMessageListener = () =>
    new Promise((resolve) => {
        onMessage(messaging, (payload) => {
            resolve(payload);
        });
    });






export default firebaseapp;