import React, { useState, useEffect } from 'react';
import firebaseApp from '../services/FirebaseService';
import Brand from '../components/Brand';
import Board from '../components/Board';
import * as Lib from '../utils/Lib';
import Button from '../components/Button';
import avatar from '../images/avatar.png';


const Dashboard = () => {

    const [signedIn, isSignedIn] = useState(true);
    const [bookmarks, setBookmarks] = useState([]);


    useEffect(() => {
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

        setBookmarks(dummyBookmarks);
    });

    const onSignOut = async () => {
        await firebaseApp.auth().signOut();
    }

    let headerOption = null;
    if(signedIn){
        headerOption = (
            <div className="option">
                <a href="/hiwijaya/setting" className="setting">hiwijaya</a>
                <span className="separator" />
                <a href="#" onClick={onSignOut}>Sign Out</a>
            </div>
        );
    }
    else{
        headerOption = (
            <div className="option">
                <a href="/hiwijaya">hiwijaya</a>
                <span className="separator" />
                <Button title={'REGISTER'} />
            </div>
        );
    }


    return (
        <div className="dashboard">
            <div className="header-box">
                <div className="header-wrapper">
                    <img src={avatar} className="avatar" alt="avatar" />
                    <div className="header">
                        <Brand />
                        {headerOption}
                    </div>
                </div>
            </div>
            <div className="content-wrapper">
                <div className="content">
                    <div className="add-collection-box">
                        <span>Collections</span>
                        <Button title="New Collection" />
                    </div>
                    <div className="board-grid">
                        <Board bookmarks={bookmarks} />
                    </div>
                </div>
            </div>
        </div>
    );

}
export default Dashboard;