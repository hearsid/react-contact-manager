import React from 'react';
import { Route, IndexRoute, Routes  } from 'react-router-dom';
import { Layout } from './components/Layout';
import { BrowserRouter } from 'react-router-dom'
import { ContactsPage } from './components/ContactsPage';
import { AddContactPage } from './components/AddContactPage';

export default function routes() {
      return (<Routes>
            <Route path="/contacts" index element={<Layout />}>
              {/* <IndexRoute component={ContactsPage} /> */}
              {/* <Route path="add" component={AddContactPage} /> */}
            </Route>
          </Routes>
          );
};
