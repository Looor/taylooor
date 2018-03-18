// Override the jsx file name only for the index page so we can bootstrap the app.
/* eslint "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }] */
import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router';
import App from './App';
import About from './About';

render(
  (
    <Router>
      <Route path="/" component={App}>
        <Route path="about" component={About} />
      </Route>
    </Router>
  ),
  document.getElementById('app'),
);
