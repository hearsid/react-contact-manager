import {NotFoundPage} from './components/NotFoundPage'
import {ContactsPage} from './components/ContactsPage'
import {AddContactPage} from './components/AddContactPage';

export const routesConfig = [

  {path: '/', component: ContactsPage},
  {path: '*', component: AddContactPage},
  {path: '*', component: NotFoundPage},

];
