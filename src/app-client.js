/* global window document */

import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';
import { App } from './components/App';

const AppClient = () => (
  <Router>
    <App />
  </Router>
);

window.onload = () => {
  render(<AppClient />, document.getElementById('main'));
};
