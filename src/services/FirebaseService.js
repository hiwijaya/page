import firebase from 'firebase/app';
import 'firebase/auth';

export default class FirebaseService {

    constructor(){

        // singleton
        if(!firebase.apps.length){
            const firebaseConfig = {
                apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
                authDomain: "com-hiwijaya-page.firebaseapp.com",
                databaseURL: "https://com-hiwijaya-page.firebaseio.com",
                projectId: "com-hiwijaya-page",
                storageBucket: "com-hiwijaya-page.appspot.com",
                messagingSenderId: "157919075979",
                appId: process.env.REACT_APP_FIREBASE_APP_ID,
                measurementId: "G-J3XVWHDKHB"
            };

            firebase.initializeApp(firebaseConfig);
        }
        
        
        this.auth = firebase.auth();

    }

    async signup(username, email, password){
        try{
            const response = await this.auth.createUserWithEmailAndPassword(email, password);
            console.log(response);

            // TODO: add more logic here

        }
        catch(err){
            console.log(err);
        }
    }

}