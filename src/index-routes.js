import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './home/home-component';
import QueryResults from './query-results/query-results-container';
import ItemDetails from './item-details/item-details-container';

const Routes = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/items" component={QueryResults} />
      <Route exact path="/items/:id" component={ItemDetails} />
    </Router>
  );
}

export default Routes;
