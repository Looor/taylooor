import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './style/base.scss';

const App = props => (
  (
    <div>
      <h1>App</h1>
      <ul>
        <li><Link to="/about">About</Link></li>
      </ul>
      {props.children}
    </div>
  )
);

App.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
export default App;
