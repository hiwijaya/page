import React, { Component } from 'react';
import Brand from '../components/Brand';
import * as Lib from '../utils/Lib';
import Button from '../components/Button';
import avatar from '../images/avatar.png';


export default class Dashboard extends Component {

    constructor(props){
        super(props);

        this.state = {
            signedInMode: true
        }

    }

    async getFavicon(){

    }

    renderHeaderOption() {
        if(this.state.signedInMode){
            return (
                <div className="option">
                    <a href="/hiwijaya/setting" className="setting">hiwijaya</a>
                    <span className="separator" />
                    <a href="#">Sign Out</a>
                </div>
            );
        }
        else{
            return (
                <div className="option">
                    <a href="/hiwijaya">hiwijaya</a>
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
                <div className="content-wrapper">
                    <div className="content">
                        <div className="add-collection-box">
                            <span>Collections</span>
                            <Button title="New Collection" onClick={() => this.getFavicon()}/>
                        </div>
                        <div className="collection-grid">

                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
