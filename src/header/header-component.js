import React, { Component } from 'react';
import QueryForm from '../query-form/query-form-container';
import logoImage from './images/logo.png';

class Header extends Component {
  render() {
    return(
      <header className="header">
        <div className="col-10 container--center container--flex">
          <div className="col-1 container--vertical-center">
            <img src={logoImage} alt="Mercado Livre" />
          </div>
          <QueryForm />
        </div>
      </header>
    );
  }
}

export default Header;
