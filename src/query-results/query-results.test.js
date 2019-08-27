import React from 'react';
import ReactDOM from 'react-dom';
import QueryResults from './query-results-component';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<QueryResults />, div);
  ReactDOM.unmountComponentAtNode(div);
});
