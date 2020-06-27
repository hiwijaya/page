import React, { Component } from 'react';
import './Board.css';
import Button from '../Button';
import * as Lib from '../../utils/Lib';
import edit from '../../images/edit.svg';
import trash from '../../images/trash.svg';


export default class Board extends Component {

    render() {
        return (
            <div className="board">
                <div className="title-box">
                    <span className="title">Tools</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" stroke="#BDC3C7" stroke-width="2.5" class="edit-button"
                        fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" >
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                    </svg>
                </div>
                <p className="desc">
                    Epic tools for my daily work
                </p>
                <ul className="bookmarks">
                    {
                        this.props.bookmarks.map((bookmark, i) => (
                            <li key={i} className="bookmark">
                                <img className="favicon" src={Lib.getFaviconUrl(bookmark.url)} alt="favicon" />
                                <a href={bookmark.url} className="title" target="_blank" rel="noopener noreferrer">{bookmark.title}</a>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" stroke="#FFF" stroke-width="2.5" class="edit-button"
                                    fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" >
                                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                                </svg>
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

