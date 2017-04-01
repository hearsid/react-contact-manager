import React from 'react';
import { Router, Route } from 'react-router'
import { Layout } from './Layout';
import { NotFoundPage } from './NotFoundPage';
import  Contacts  from '../data/contacts';
// import Routes from '../routes';


export const App = () => (
  <Layout>
      <Router render={(props) => <AsyncProps {...props}/>}>
        <Route path="*" component={NotFoundPage}/>
      </Router>
  </Layout>
);

export default App;
