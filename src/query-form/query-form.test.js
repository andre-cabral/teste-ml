import React from 'react';
import ReactDOM from 'react-dom';
import QueryForm from './query-form-component';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<QueryForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});
