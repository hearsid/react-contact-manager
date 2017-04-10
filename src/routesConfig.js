import {NotFoundPage} from './components/NotFoundPage'
import {ContactsPage} from './components/ContactsPage'
import {AddContactPage} from './components/AddContactPage';
import {Layout} from './components/Layout';

export const routesConfig = [
        {path:'/', redirect:'/contacts'},
        {path: '/contacts', component: ContactsPage},
        {path: '/add/:id', component: AddContactPage},
        {path: '/add', component: AddContactPage},        
        {path: '/404', component: NotFoundPage}

];
