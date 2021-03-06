import React, {Component} from 'react';

export class AddContactPage extends Component {

  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    let id = this.props.match.params.id;
    if(id) {

    }
  }
  render() {
      let title="Add";
            return(
        <div className="add-contact-page">
        <h2 className="page-header text-center">{title} Contact</h2>
        <form role="form" className="form-horizontal contract-form">
            <div className="form-group">
                <label className="col-sm-4 control-label">Full name:</label>
                <div className="col-sm-6">
                    <input type="text" className="form-control contact-name-input"
                      value="some" />
                </div>
            </div>
            <div className="form-group">
                <label className="col-sm-4 control-label">Email address:</label>
                <div className="col-sm-6">
                    <input type="text" className="form-control contact-email-input" ng-model="email" />
                </div>
            </div>
            <div className="form-group">
                <label className="col-sm-4 control-label">Telephone number:</label>
                <div className="col-sm-6">
                    <input type="text" className="form-control contact-tel-input" ng-model="tel" />
                </div>
            </div>
            <div className="form-group">
                <div className="col-sm-offset-4 col-sm-3">
                    <button ng-show="title=='Add'" type="submit" ng-click="addContact(name,email,tel)" className="btn btn-outline btn-lg btn-block">Submit</button>
                    <button ng-show="title=='Edit'" type="submit" ng-click="editContact(id , name , email , tel)" className="btn btn-outline btn-lg btn-block">Submit</button>
                </div>
                <div className="col-sm-3">
                    <a ui-sref="home" className="btn btn-outline btn-lg btn-block">Cancel</a>
                </div>
            </div>
        </form>
      </div>
        )
   }
}
