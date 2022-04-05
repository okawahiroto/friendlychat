/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  apiKey: "AIzaSyDF7kLcoSPiEf0pFG9coJH1cD88aXKT6Ss",
  authDomain: "friendlychat20220405.firebaseapp.com",
  projectId: "friendlychat20220405",
  storageBucket: "friendlychat20220405.appspot.com",
  messagingSenderId: "426968828600",
  appId: "1:426968828600:web:9520240d39e4bdbc4a424d",
  measurementId: "G-JF915B8V4S"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}