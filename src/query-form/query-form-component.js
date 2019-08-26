import React, { Component } from 'react';
import Button from '../button/button-component';
import Input from '../input/input-component';

class QueryForm extends Component {
  render() {
    const { queryInput } = this.props;
    const changeQueryInput = (e) => {
      this.props.changeQueryInput(e.target.value)
    };
    const querySubmit = (e) => {
      e.preventDefault();
      if(queryInput !== ''){
        this.props.querySubmit(queryInput);
      }
    };

    return(
      <form className="query__form" onSubmit={querySubmit}>
        <Input classes="input--light" id="input-query" placeholder="Nunca dejes de buscar" onChange={changeQueryInput} typeName="text" />
        <Button classes="button--query container--vertical-center" queryButton={true} />
      </form>
    );
  }
}

export default QueryForm;
