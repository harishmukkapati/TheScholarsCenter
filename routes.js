// routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Search from 'page'; // Import your Search component
import SearchResults from 'pages/searchResults'; // Import your SearchResults component

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Search} />
        <Route path="/search-results" component={SearchResults} />
      </Switch>
    </Router>
  );
}

export default Routes;
