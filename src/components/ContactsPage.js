import React, {Component} from 'react';
import { Contact } from './Contact';
import { Link } from 'react-router-dom';
import { Utilities } from './utils';
import axios from 'axios';
import PropTypes from 'prop-types'

 class ContactsPage extends Component {

  constructor(props) {
    super(...arguments);
    this.state = {
      contacts: this.props.initialData || [],
      filterText: ''
    }
  }

  componentDidMount() {
    if(!this.props.initialData) {
      ContactsPage.requestInitialData().then( contacts => {
        this.setState({ contacts });
      }, err => {

      });
    }
  }



  delete(event) {
    alert(event);
  }

  edit() {

  }

  add() {

  }

  render() {
     var contacts = this.props.contacts ;
        console.log('comp', contacts);

      return(
        <div className="contacts-page">
    <h2 className="page-header text-center">List of contacts</h2>
    <p className="text-center">
        <Link to='/add' activeclassName="active"
              className="btn btn-lg btn-outline" >Add Contact</Link>
    </p>
    <ul className="media-list contacts-container">
      {
        contacts.map( (contact, index) => {
        return(<Contact key={index} {...contact}
                onDelete={this.delete}
                onEdit={this.edit}
                onAdd={this.add}
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

ContactsPage.propTypes = {
  initialData: PropTypes.any
}

ContactsPage.requestInitialData = () => {
  return axios.get('http://localhost:3000/getContacts');
}


export { ContactsPage };
