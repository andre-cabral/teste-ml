import React, { Component } from 'react';
import QueryForm from '../query-form/query-form-container';
import logoImage from './images/logo.png';

class Header extends Component {
  render() {
    return(
      <header className="header">
        <div className="col-10 container--center container--flex">
          <a className="col-1 container--vertical-center" href="/">
            <img src={logoImage} alt="Mercado Livre" />
          </a>
          <QueryForm />
        </div>
      </header>
    );
  }
}

export default Header;
