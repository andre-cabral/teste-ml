import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './home/home-component';

const Routes = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
    </Router>
  );
}

export default Routes;
