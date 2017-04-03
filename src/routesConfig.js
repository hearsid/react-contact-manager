import {NotFoundPage} from './components/NotFoundPage'
import {ContactsPage} from './components/ContactsPage'
import {AddContactPage} from './components/AddContactPage';
import {Layout} from './components/Layout';

export const routesConfig = [

        {path: '/contacts', component: ContactsPage},
        {path: '/add', component: AddContactPage},
        {path: '/404', component: NotFoundPage}

];
