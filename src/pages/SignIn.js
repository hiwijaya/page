import React, { useState } from 'react';
import Button from '../components/Button';
import firebaseApp from '../services/FirebaseService';
import * as Lib from '../utils/Lib';

import illustration from '../images/illustration-2.png';
import logo from '../images/logo.png';


const SignIn = ({history}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');


    const validInput = () => {
        if(email === ''){
            setMessage('Email cannot be empty');
            return false;
        }
        if (!Lib.isValidEmail(email)) {
            setMessage('Email is not valid.');
            return false;
        }

        return true;
    }

    const onSignIn = async () => {

        console.log('ON SIGNIN TRIGGERED!!!!');

        if(!validInput()){
            return;
        }

        try{
            const response = await firebaseApp.auth().signInWithEmailAndPassword(email, password);
            history.push('/dashboard');
        }
        catch(e){
            setMessage(e.message);
        }


    }

    return (
        <div className="auth">
            <div className="side">
                <h1>
                    Now your <br />
                        bookmark <br />
                        available <br />
                        everywhere.
                    </h1>
                <img src={illustration} alt="Illustration" />
                <span className="attribution">
                    Art by <a href="https://icons8.com" target="_blank" rel="noopener noreferrer">Ouch.pics</a>
                </span>
            </div>
            <div className="auth-content center">
                <div className="form">
                    <span>
                        <img src={logo} alt="logo" /> Sign in to page.
                </span>
                    <p className="error-message">{message}</p>
                    <form>
                        <div className="field">
                            <label>Email</label>
                            <input type="text" value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="field">
                            <label>Password</label>
                            <input type="password" value={password}
                                onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <p className="agree">
                            By clicking Sign In you are agree to our&nbsp;
                                <a href="/terms">Terms and Conditions</a>.
                            </p>
                        <div className="buttons">
                            <Button title={'Sign In'} onClick={onSignIn} />
                            <a href="/signup">Not a member?</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
    
}

export default SignIn;
