import React from 'react';
import ReactDOM from 'react-dom';
import CategoriesList from './categories-list-component';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CategoriesList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
