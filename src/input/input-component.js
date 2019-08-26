import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { id, classes = '', typeName = 'text', placeholder = '', onChange = (e) => {} } = this.props;

    return <input className={`input${classes !== '' ? ` ${classes}` : ''}`} id={id} type={typeName} placeholder={placeholder} onChange={onChange} />;
  }
}

export default Input;
