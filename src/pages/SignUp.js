import React, { Component } from 'react';
import Button from '../components/Button';
import FirebaseService from '../services/FirebaseService';
import * as Lib from '../utils/Lib';
import illustration from '../images/illustration-2.png';
import logo from '../images/logo.png';

export default class SignUp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            message: ''
        }

        this.firebaseService = new FirebaseService();

    }

    signup() {

        if(!this.validInput()){
            return;
        }

        this.firebaseService.signup(
            this.state.username, this.state.email, this.state.password,
            (res) => {
                console.log('SIGNUP SUCCEED');
                console.log(res);

                // redirect
            },
            (err) => {
                this.setState({
                    message: err.message
                });
                console.log(err);
            }
        );
    }

    validInput(){

        if(this.state.username === ''){
            this.setState({message: 'Username cannot be empty.'});
            return false;
        }
        if(this.state.email === ''){
            this.setState({ message: 'Email cannot be empty.' });
            return false;
        }
        if(!Lib.isValidEmail(this.state.email)){
            this.setState({ message: 'Email is not valid.' });
            return false;
        }
        if(this.state.password === ''){
            this.setState({ message: 'Password cannot be empty.' });
            return false;
        }
        if(this.state.password.length < 6){
            this.setState({ message: 'Your password is weak.' });
            return false;
        }
        if(this.state.password !== this.state.confirmPassword){
            this.setState({ message: 'Password is not match.' });
            return false;
        }

        return true;

    }


    renderForm() {
        return(
            <div className="form">
                <span>
                    <img src={logo} alt="logo" /> Sign up to page.
                    </span>
                <p className="error-message">{this.state.message}</p>
                <form>
                    <div className="field">
                        <label>Username</label>
                        <input type="text" value={this.state.username}
                            onChange={(e) => this.setState({ username: e.target.value })} />
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="text" value={this.state.email}
                            onChange={(e) => this.setState({ email: e.target.value })} />
                    </div>
                    <div className="field">
                        <label>Password</label>
                        <input type="password" value={this.state.password}
                            onChange={(e) => this.setState({ password: e.target.value })} />
                    </div>
                    <div className="field">
                        <label>Confirm Password</label>
                        <input type="password" value={this.state.confirmPassword}
                            onChange={(e) => this.setState({ confirmPassword: e.target.value })} />
                    </div>
                    <p className="agree">
                        By clicking Sign Up you are agree to our&nbsp;
                                <a href="/terms">Terms and Conditions</a>.
                            </p>
                    <div className="buttons">
                        <Button title={'Sign Up'} onClick={() => this.signup()} />
                        <a href="/signin">Have an account?</a>
                    </div>
                </form>
            </div>
        );
    }

    render() {
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
                    {this.renderForm()}
                </div>
            </div>
        );
    }
}
