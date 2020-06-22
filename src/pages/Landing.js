import React, { Component } from 'react';
import Brand from '../components/Brand';
import Button from '../components/Button';

export default class Landing extends Component {

    render() {
        return (
            <div className="page">
                <div className="landing-header">
                    <Brand />
                    <div className="landing-menu">
                        <a href="/about">About</a>
                        <a href="/signin">Sign In</a>
                        <Button title={'Register'} />
                    </div>
                </div>
            </div>
        );
    }
}
