import { Component } from 'react';

export class Contact extends Component {

  render() {
        var contact = this.props.contact;
            return(
      <div>
        <div className="thumbnail">
            <img className="media-object contact-image"
                  src="app/img/faces/{contact.id}.jpg" />
        </div>
        <div className="media-heading">
            <h3>
                {contact.name}
                <small>
                    <Link to="/add/{contact.id}">
                      <span className="glyphicon glyphicon-pencil"></span>
                    </Link>
                    <a ng-click="deleteContact($index)" className="delete-contract">
                        <span className="glyphicon glyphicon-trash"></span>
                    </a>
                </small>
            </h3>
        </div>
        <div className="media-body">
            <dl>
                <dt>[Phone Number]</dt>
                <dd ng-bind="contact.tel"></dd>
                <dt>[Email]</dt>
                <dd ng-bind="contact.email"></dd>
            </dl>
        </div>
        <hr/>
      </div>
        )
}
}
