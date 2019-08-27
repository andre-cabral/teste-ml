import React from 'react';
import ReactDOM from 'react-dom';
import ItemDetails from './item-details-component';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ItemDetails />, div);
  ReactDOM.unmountComponentAtNode(div);
});
