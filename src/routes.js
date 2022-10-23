import { Route, Routes } from 'react-router-dom';
import { AddContactPage } from './components/AddContactPage';
import { ContactsPage } from './components/ContactsPage';

export default function routes() {
  return (
    <Routes>
      <Route path="/" element={<ContactsPage />} />
      <Route path="/contacts" index element={<ContactsPage />} />
      <Route path="add" component={AddContactPage} />
    </Routes>
  );
};
