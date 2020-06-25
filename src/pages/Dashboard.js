import React, { Component } from 'react';
import Brand from '../components/Brand';
import Button from '../components/Button';
import avatar from '../images/avatar.png';


export default class Dashboard extends Component {

    constructor(props){
        super(props);

        this.state = {
            signedInMode: true
        }

    }

    renderHeaderOption() {
        if(this.state.signedInMode){
            return (
                <div className="option">
                    <a href="/dashboard">hiwijaya</a>
                    <span className="separator" />
                    <a href="#" className="signout">Sign Out</a>
                </div>
            );
        }
        else{
            return (
                <div className="option">
                    <a href="/dashboard">hiwijaya</a>
                    <span className="separator" />
                    <Button title={'REGISTER'}/>
                </div>
            );
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
                            {this.renderHeaderOption()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
