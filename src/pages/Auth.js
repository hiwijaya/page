import React, { Component } from 'react';
import Button from '../components/Button';
import FirebaseService from '../services/FirebaseService';
import illustration from '../images/illustration-2.png';
import logo from '../images/logo.png';

export default class Auth extends Component {

    static SIGN_UP = 'SIGN_UP';
    static SIGN_IN = 'SIGN_IN';

    constructor(props){
        super(props);

        this.form = props.form;
        if (this.form === null){
            this.form = this.SIGN_UP;
        }

        this.firebaseService = new FirebaseService();
        
    }

    signup(){
        this.firebaseService.signup('hiwijaya', 'wijaya.jstation@gmail.com', 'mesosfer');
    }


    renderForm(){
        if(this.form === Auth.SIGN_IN){
            return(
                <div className="form">
                    <span>
                        <img src={logo} alt="logo" /> Sign in to page.
                        </span>
                    <form>

                        <div className="field">
                            <label>Email</label>
                            <input type="text" />
                        </div>
                        <div className="field">
                            <label>Password</label>
                            <input type="password" />
                        </div>
                        <p className="agree">
                            By clicking Sign In you are agree to our&nbsp;
                                <a href="/terms">Terms and Conditions</a>.
                            </p>
                        <div className="buttons">
                            <Button title={'Sign In'} />
                            <a href="/signup">Not a member?</a>
                        </div>
                    </form>
                </div>
            );
        }
        else{
            return(
                <div className="form">
                    <span>
                        <img src={logo} alt="logo" /> Sign up to page.
                        </span>
                    <form>
                        <div className="field">
                            <label>Username</label>
                            <input type="text" />
                        </div>
                        <div className="field">
                            <label>Email</label>
                            <input type="text" />
                        </div>
                        <div className="field">
                            <label>Password</label>
                            <input type="password" />
                        </div>
                        <div className="field">
                            <label>Confirm Password</label>
                            <input type="password" />
                        </div>
                        <p className="agree">
                            By clicking Sign Up you are agree to our&nbsp;
                                <a href="/terms">Terms and Conditions</a>.
                            </p>
                        <div className="buttons">
                            <Button title={'Sign Up'} onClick={() => this.signup()}/>
                            <a href="/signin">Have an account?</a>
                        </div>
                    </form>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="auth">
                <div className="side">
                    <h1>
                        Now your <br/>
                        bookmark <br/>
                        available <br/>
                        everywhere.
                    </h1>
                    <img src={illustration} alt="Illustration" />
                    <span className="attribution">
                        Art by <a href="https://icons8.com" target="_blank" rel="noopener noreferrer">Ouch.pics</a>
                    </span>
                </div>
                <div className="content center">
                    {this.renderForm()}
                </div>
            </div>
        );
    }
}
