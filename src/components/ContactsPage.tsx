import React, { useState } from 'react';
import { Contact } from './Contact';
import initialContacts from './data/contacts.constant';
import { Utilities } from './utils';

export default function ContactsPage(props) {

  function deleteContact(index) {
   contacts.splice(index, 1);
   setContact(JSON.parse(JSON.stringify(contacts)));
  }

  function edit() {

  }

  function add() {

  }


  const no_of_contacts = Utilities.getParameterByName('no_of_contacts') || 10;
  let contactsList = initialContacts;
  contactsList = Utilities.generateContacts(Number(no_of_contacts), initialContacts);
  const [contacts, setContact] = useState(contactsList);

  return (
    <div className="contacts-page">
      <h2 className="page-header text-center">Contacts ({contacts?.length?.toLocaleString()})</h2>
        {/* <Link to='/add' activeclassName="active"
              className="btn btn-lg btn-outline" >Add Contact</Link> */}
      <div className="media-list contacts-container">
        {
          contacts.map((contact, index) => {
            return (
            <Contact key={index} 
              {...contact}
              index={index}
              onDelete={deleteContact}
              onEdit={edit}
              onAdd={add}
              >
            </Contact>
            )
          })
        }
      </div>
    </div>
  )

}

export { ContactsPage };

