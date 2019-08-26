import React, { Component } from 'react';
import searchImage from './images/ic-search.png';

class Button extends Component {
  render() {
    const { classes = '', text = '', queryButton=false, type="submit", onClick = () => {} } = this.props;

    return(
      <button className={`button${classes !== '' ? ` ${classes}` : ''}`} onClick={onClick} type={type}>
        {text}
        {queryButton && 
          <img src={searchImage} alt="Buscar" />
        }
      </button>
    );
  }
}

export default Button;
