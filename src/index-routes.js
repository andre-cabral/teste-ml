import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './home/home-component';
import QueryResults from './query-results/query-results-container';

const Routes = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/items" component={QueryResults} />
    </Router>
  );
}

export default Routes;
