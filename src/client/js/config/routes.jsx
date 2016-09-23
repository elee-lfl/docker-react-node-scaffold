import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Main from '../components/main';
import Home from '../components/home';
import About from '../components/about';
import NotFound from '../components/not-found';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
);

export default routes;
