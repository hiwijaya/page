import React, { Component } from 'react';
import Brand from '../components/Brand';
import Button from '../components/Button';
import avatar from '../images/avatar.png';


export default class Dashboard extends Component {

    constructor(props){
        super(props);

        this.state = {
            signedInMode: false
        }

    }

    render() {
        return (
            <div className="dashboard">
                <div className="header-box">
                    <div className="header-wrapper">
                        <img src={avatar} className="avatar" alt="avatar" />
                        <div className="header">
                            <Brand />
                            <div className="option">
                                <a href="/dashboard">hiwijaya</a>
                                <span className="separator" />
                                <a href="#" className="signout">Sign Out</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
