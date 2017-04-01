import React from 'react';
import { Router, Route } from 'react-router'
import { Layout } from './Layout';
import { NotFoundPage } from './NotFoundPage';
import  Contacts  from '../data/contacts';
import Routes from '../routes';


export const App = () => (
  <Layout>
      <Routes></Routes>
  </Layout>
);

export default App;
