import React, { Component } from 'react';
import Brand from '../components/Brand';
import Button from '../components/Button';
import illustration from '../images/illustration-1.png';

export default class Landing extends Component {

    navigateTo(path){

        this.props.history.push(path);

    }

    render() {
        return (
            <div className="page">
                <div className="landing-header">
                    <Brand />
                    <div className="landing-menu">
                        <a href="/about">About</a>
                        <a href="/signup">Sign In</a>
                        <Button title={'Register'} onClick={() => this.navigateTo('/signup')}/>
                    </div>
                </div>
                <div className="landing-content">
                    <div className="column center-vertically">
                        <h1>
                            Because <br/>
                            bookmark bar in <br/>
                            your browser is <br/>
                            not enough.
                        </h1>
                        <Button title={'Get Started'} onClick={() => this.navigateTo('/signup')}/>
                    </div>
                    <div className="column illustration">
                        <img src={illustration} alt="Illustration"/>
                        <span className="attribution">
                            Art by <a href="https://icons8.com" target="_blank" rel="noopener noreferrer">Ouch.pics</a>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
    
}
