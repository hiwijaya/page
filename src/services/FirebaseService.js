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

    async signUp(username, email, password, onSuccess, onError){
        try{
            const response = await this.auth.createUserWithEmailAndPassword(email, password);

            // TODO: add more logic here

            onSuccess(response);
        }
        catch(e){
            onError(e);
        }
    }

    async signIn(email, password, onSuccess, onError){
        try{
            const response = await this.auth.signInWithEmailAndPassword(email, password);
            onSuccess(response);
        }
        catch(e){
            onError(e);
        }
    }

    async signOut(onSuccess){
        try{
            await this.auth.signOut();
            onSuccess();
        }
        catch(e){
            console.log(e);
        }
    }

    isSignedIn(){
        const currentUser = this.auth.currentUser;
        console.log('CURRENT USER:');
        console.log(currentUser);

        if(currentUser){
            return true;
        }
        
        return false;

    }



}