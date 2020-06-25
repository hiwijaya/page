import React, { Component } from 'react';
import './Button.css';

export default class Button extends Component {

    static STYLED_SHADOW = 'button-shadow';
    static STYLED_OUTLINE = 'button-outline';

    render() {
        return (
            <button type="button" className={this.props.styled} onClick={() => this.props.onClick()}>
                {this.props.title}
            </button>
        );
    }

}
Button.defaultProps = {
    title: '',
    styled: Button.STYLED_SHADOW,
    onClick: () => {}
}
