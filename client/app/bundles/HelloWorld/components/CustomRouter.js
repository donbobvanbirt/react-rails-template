import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Layout from './Layout';
import HomePage from './HomePage';
import HelloWorld from './HelloWorld';

export default class CustomRouter extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Layout}>
          <IndexRoute component={HomePage} />
          <Route path="/hello" component={HelloWorld} />
        </Route>
      </Router>
    );
  }
}
