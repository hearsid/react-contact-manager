import React, {Component} from 'react';
import { Contact } from './Contact';
import { Link } from 'react-router';
import  axios from 'axios';
import { Utilities } from './utils';

export class ContactsPage extends Component {


  static loadProps(context,  cb) {
        console.log(context);
        // let utils = new Utilities();
        let no_of_contacts = context.location.query.no_of_contacts;

        axios.get('http://localhost:3000/getContacts?no_of_contacts='+no_of_contacts)
       .then(function (response) {
        cb(null, {contacts: response.data});

      })
      .catch(function (error) {
        console.log(error);
        cb(null, {name: "error"});
      });
  }

  render() {
     var contacts = this.props.contacts;

      return(
        <div className="contacts-page">
    <h2 className="page-header text-center">List of contacts</h2>
    <p className="text-center">
        <Link to='/add' activeclassName="active"
              className="btn btn-lg btn-outline" >Add Contact</Link>
    </p>
    <ul className="media-list row contacts-container">
      { contacts.map( (contact, index) => {
        return(<Contact key={index} {...contact}
                className="my-repeat-animation contacts media col-md-6 col-lg-4">
                </Contact>
              )

    })
      }
    </ul>
  </div>
    )
}
}
