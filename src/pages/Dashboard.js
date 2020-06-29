import React, { Component } from 'react';
import Brand from '../components/Brand';
import Board from '../components/Board';
import * as Lib from '../utils/Lib';
import Button from '../components/Button';
import avatar from '../images/avatar.png';

import FirebaseService from '../services/FirebaseService';


export default class Dashboard extends Component {

    constructor(props){
        super(props);

        this.state = {
            signedInMode: true,
            bookmarks: []
        }

        this.firebaseService = new FirebaseService();

    }

    componentDidMount(){
        const dummyBookmarks = [
            {
                title: 'Color Picker',
                url: 'https://www.w3schools.com/colors/colors_picker.asp'
            },
            {
                title: 'WebGradients',
                url: 'https://webgradients.com/'
            },
            {
                title: 'Streamline Icons',
                url: 'https://app.streamlineicons.com/',
            },
            {
                title: 'Repulsor',
                url: 'https://repulsor.hiwijaya.com/',
            }
        ];

        this.setState({
            bookmarks: dummyBookmarks
        });
    }

    signOut(){
        this.firebaseService.signOut(() => {
            window.location.href= '/';
        });
    }


    renderHeaderOption() {
        if(this.state.signedInMode){
            return (
                <div className="option">
                    <a href="/hiwijaya/setting" className="setting">hiwijaya</a>
                    <span className="separator" />
                    <a href="#" onClick={() => this.signOut()}>Sign Out</a>
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
                            <Button title="New Collection" onClick={() => {
                                let isSignedIn = this.firebaseService.isSignedIn();
                                console.log("UDA SIGNED IN: " + isSignedIn)
                            }}/>
                        </div>
                        <div className="board-grid">
                            <Board bookmarks={this.state.bookmarks}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
