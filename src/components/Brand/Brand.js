import React, { Component } from 'react';
import './Brand.css';
import logo from '../../images/logo.png';

export default class Brand extends Component {

  render() {
    return (
      <a href="/" className="brand">
          <img src={logo} alt="page."/>
          <span>page.</span>
      </a>
    );
  }

}
