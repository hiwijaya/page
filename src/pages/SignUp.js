import React, { useState } from 'react';
import Button from '../components/Button';
import firebaseApp from '../services/FirebaseService';
import * as Lib from '../utils/Lib';

import illustration from '../images/illustration-2.png';
import logo from '../images/logo.png';


const SignUp = ({history}) => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');


    const validInput = () => {
        if(username === ''){
            setMessage('Username is required.');
            return false;
        }
        if (email === '') {
            setMessage('Email cannot be empty');
            return false;
        }
        if (!Lib.isValidEmail(email)) {
            setMessage('Email is not valid.');
            return false;
        }
        if (password === '') {
            setMessage('Password is required');
            return false;
        }
        if (password.length < 6) {
            setMessage('Password is too weak.')
            return false;
        }
        if (password !== confirmPassword) {
            setMessage('Password is not match');
            return false;
        }
        
        return true;
    }

    const onSignUp = async () => {

        if (!validInput()) {
            return;
        }

        try {
            const response = await firebaseApp.auth().createUserWithEmailAndPassword(email, password);
            
            const uid = response.user.uid;

            await firebaseApp.database().ref(`users/${uid}`).set({
                username: username,
                email: email,
                profile_picture: ''
            });

            await firebaseApp.database().ref('usernames').set({
                [username]: uid
            });

            history.push('/dashboard');
        }
        catch (e) {
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
                        <img src={logo} alt="logo" /> Sign up to page.
                    </span>
                    <p className="error-message">{message}</p>
                    <form>
                        <div className="field">
                            <label>Username</label>
                            <input type="text" value={username}
                                onChange={(e) => setUsername(e.target.value) } />
                        </div>
                        <div className="field">
                            <label>Email</label>
                            <input type="text" value={email}
                                onChange={(e) => setEmail(e.target.value) } />
                        </div>
                        <div className="field">
                            <label>Password</label>
                            <input type="password" value={password}
                                onChange={(e) => setPassword(e.target.value) } />
                        </div>
                        <div className="field">
                            <label>Confirm Password</label>
                            <input type="password" value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value) } />
                        </div>
                        <p className="agree">
                            By clicking Sign Up you are agree to our&nbsp;
                                <a href="/terms">Terms and Conditions</a>.
                            </p>
                        <div className="buttons">
                            <Button title={'Sign Up'} onClick={onSignUp} />
                            <a href="/signin">Have an account?</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );

}
export default SignUp;
