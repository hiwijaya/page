import React, { Component } from 'react';
import Button from '../components/Button';
import illustration from '../images/illustration-2.png';
import logo from '../images/logo.png';

export default class Auth extends Component {

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
                    <div className="form">
                        <span>
                            <img src={logo} alt="logo"/> Sign up to page.
                        </span>
                        <form>
                            <div class="field">
                                <label>Username</label>
                                <input type="text" />
                            </div>
                            <div class="field">
                                <label>Email</label>
                                <input type="text" />
                            </div>
                            <div class="field">
                                <label>Password</label>
                                <input type="password" />
                            </div>
                            <div class="field">
                                <label>Confirm Password</label>
                                <input type="password" />
                            </div>
                            <p class="agree">
                                By clicking Sign Up you are agree to our&nbsp;
                                <a href="/terms">Terms and Conditions</a>.
                            </p>
                            <div class="chorizontal">
                                <Button title={'Sign Up'}/>
                                <a href="/signin">Have an account?</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
