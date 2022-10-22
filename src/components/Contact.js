import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Contact extends Component {

  constructor(props) {
    super(props);
  }
  
 deleteContact() {
alert('this');
 }
  render() {
        var contact = this.props;

            return(
      <div className="contacts">
        <div className="thumbnail">
            <img className="media-object contact-image"
                  src={`img/faces/${contact.id}.jpg`} />
        </div>
        <div className="media-heading">
            <h3>
                {contact.name}
                <small>
                    <Link to={`/add/${contact.id}`}>
                      <span className="glyphicon glyphicon-pencil"></span>
                    </Link>
                    <span onClick={this.deleteContact.bind(this)} className="delete-contract">
                        <span className="glyphicon glyphicon-trash"></span>
                    </span>
                </small>
            </h3>
        </div>
        <div className="media-body">
            <dl>
                <dt>[Phone Number]</dt>
                <dd>{contact.tel}</dd>
                <dt>[Email]</dt>
                <dd>{contact.email}</dd>
            </dl>
        </div>
        <hr/>
      </div>
        )
}
}
