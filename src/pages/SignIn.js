import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Button from '../components/Button';
import FirebaseService from '../services/FirebaseService';
import * as Lib from '../utils/Lib';
import illustration from '../images/illustration-2.png';
import logo from '../images/logo.png';

export class SignIn extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            message: ''
        }

        this.firebaseService = new FirebaseService();

    }

    signin() {

        if(!this.validInput()){
            return;
        }

        this.firebaseService.signin(
            this.state.email, this.state.password, 
            (res) => {
                console.log(res);
                this.props.history.push("/dashboard");
            },
            (e) => {
                this.setState({message: e.message});
            });
    }

    validInput() {

        if (this.state.email === '') {
            this.setState({ message: 'Email cannot be empty.' });
            return false;
        }
        if (!Lib.isValidEmail(this.state.email)) {
            this.setState({ message: 'Email is not valid.' });
            return false;
        }
        if (this.state.password === '') {
            this.setState({ message: 'Password cannot be empty.' });
            return false;
        }

        return true;

    }




    renderForm() {
        return (
            <div className="form">
                <span>
                    <img src={logo} alt="logo" /> Sign in to page.
                </span>
                <p className="error-message">{this.state.message}</p>
                <form>
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
                    <p className="agree">
                        By clicking Sign In you are agree to our&nbsp;
                                <a href="/terms">Terms and Conditions</a>.
                            </p>
                    <div className="buttons">
                        <Button title={'Sign In'} onClick={() => this.signin()} />
                        <a href="/signup">Not a member?</a>
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
export default withRouter(SignIn);