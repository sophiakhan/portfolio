import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { createHistory, useBasename } from 'history';

const browserHistory = useBasename(createHistory)({
    basename: '/portfolio'
});

import Layout from './components/Layout'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Contact from './components/Contact'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Portfolio} />
      <Route path="about" component={About} />
      <Route path="contact" component={Contact} />
    </Route>
  </Router>,
  document.getElementById('root')
);
