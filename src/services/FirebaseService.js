import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


const firebaseApp = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "com-hiwijaya-page.firebaseapp.com",
    databaseURL: "https://com-hiwijaya-page.firebaseio.com",
    projectId: "com-hiwijaya-page",
    storageBucket: "com-hiwijaya-page.appspot.com",
    messagingSenderId: "157919075979",
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: "G-J3XVWHDKHB"
});

export default firebaseApp;