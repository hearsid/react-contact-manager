import { Contact } from './Contact';
import initialContacts from './data/contacts.constant';
import { Utilities } from './utils';

export default function ContactsPage(props) {

  function deleteContact() {

  }

  function edit() {

  }

  function add() {

  }
  const no_of_contacts = Utilities.getParameterByName('no_of_contacts');
  let contacts = initialContacts;
  if (no_of_contacts) {
    contacts = Utilities.generateContacts(Number(no_of_contacts), initialContacts);
  }

  return (
    <div className="contacts-page">
      <h2 className="page-header text-center">List of contacts</h2>
      <p className="text-center">
        {/* <Link to='/add' activeclassName="active"
              className="btn btn-lg btn-outline" >Add Contact</Link> */}
      </p>
      <div className="media-list contacts-container">
        {
          contacts.map((contact, index) => {
            return (<Contact key={index} {...contact}
              onDelete={deleteContact}
              onEdit={edit}
              onAdd={add}
              className="my-repeat-animation contacts media col-md-6 col-lg-4">
            </Contact>
            )


          })
        }
      </div>
    </div>
  )

}

export { ContactsPage };

