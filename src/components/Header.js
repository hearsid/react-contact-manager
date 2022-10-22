import React, { Component } from 'react';

export class Header extends Component {

  render() {
            return(
        <div className="header">
        <header className="bs-header">
          <div className="container">
            <h1>Contact Manager</h1>
            <p>Simple Angular.js example application</p>
          </div>
        </header>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 main-container">
                {this.props.children}
            </div>
          </div>
        </div>
      </div>
        )
}
}
