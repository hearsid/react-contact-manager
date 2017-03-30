import React from 'react';
import { Router, Route } from 'react-router'
import { Layout } from './Layout';
import { IndexPage } from './IndexPage';
import { AthletePage } from './AthletePage';
import { NotFoundPage } from './NotFoundPage';
import athletes from '../data/athletes';
// import Routes from '../routes';

const renderIndex = () => <IndexPage athletes={athletes} />;
const renderAthlete = ({ match, staticContext }) => {
  const id = match.params.id;
  const athlete = athletes.find(current => current.id === id);
  if (!athlete) {
    return <NotFoundPage staticContext={staticContext} />;
  }

  return <AthletePage athlete={athlete} athletes={athletes} />;
};

export const App = () => (
  <Layout>
      <Router render={(props) => <AsyncProps {...props}/>}>
   <Route path="*" component={NotFoundPage}/>
 </Router>
  </Layout>
);

export default App;
