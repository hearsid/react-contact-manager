/* global window document */

import React from 'react';
import { render } from 'react-dom';
import { Routes } from './routes';
import { routesConfig } from './routesConfig';
import { ReactRouter, Router, browserHistory, hashHistory } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from './components/Layout';

export const AppClient = () => (
  <Layout>
    <Router history={browserHistory} routes={routesConfig}>
    </Router>
  </Layout>
);

window.onload = () => {
  render(<AppClient />, document.getElementById('main'));
};
