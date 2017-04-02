import React from 'react';
import { AsyncProps } from 'async-props';
import { ReactRouter, Router, browserHistory, hashHistory } from 'react-router';
import { routesConfig } from './routesConfig';
import { Layout } from './components/Layout';
import { BrowserRouter } from 'react-router-dom'


export default class Routes extends React.Component {

  render() {
    return (
      <Layout>
      <Router history={browserHistory}
                   routes={routesConfig}
                  render={ (props) => { <AsyncProps {...props} /> } } />
                </Layout>
            )
  }
}
