import React from 'react';
import { AsyncProps } from 'async-props';
import { ReactRouter, Router, BrowerHistory } from 'react-router';
import { routesConfig } from './routesConfig';

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
