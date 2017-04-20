import React from 'react';
import { Route, IndexRoute  } from 'react-router';
import { Layout } from './components/Layout';
import { BrowserRouter } from 'react-router-dom'
import { ContactsPage } from './components/ContactsPage';
import { AddContactPage } from './components/AddContactPage';

export default (
            <Route path="/contacts" component={Layout}>
              <IndexRoute component={ContactsPage} />
              <Route path="add" component={AddContactPage} />
            </Route>
          );
