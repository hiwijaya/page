import React, { Component } from 'react';
import './Board.css';
import Button from '../Button';
import * as Lib from '../../utils/Lib';
import menu from '../../images/menu.svg';


export default class Board extends Component {

    render() {
        return (
            <div className="board">
                <div className="title-box">
                    <span>Tools</span>
                    <img src={menu} alt="menu"/>
                </div>
                <p className="desc">
                    Epic tools for my daily work
                </p>
                <ul className="bookmarks">
                    {
                        this.props.bookmarks.map((bookmark, i) => (
                            <li key={i} className="bookmark">
                                <img className="favicon" src={Lib.getFaviconUrl(bookmark.url)} alt="favicon" />
                                <span className="title">{bookmark.title}</span>
                            </li>
                        ))
                    }
                </ul>
                <Button title={'+ Bookmark'} styled={Button.STYLED_OUTLINE}/>
            </div>
        );
    }
}
Board.defaultProps = {
    bookmarks: []
}

