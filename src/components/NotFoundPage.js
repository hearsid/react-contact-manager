/* eslint react/forbid-prop-types: "off" */

import React from 'react';
import  axios from 'axios';

export class NotFoundPage extends React.Component {


  static loadProps(context, cb) {
        axios.get('http://localhost:3000/player')
       .then(function (response) {
        console.log(response.data.test);
        cb(null, {name: response.data.test});

      })
      .catch(function (error) {
        console.log(error);
        cb(null, {name: "error"});
      });
  }




  render() {
    var name = this.props.name
    var apiResponse = this.apiResponse;
    return (<div className="not-found">
      <h1>404</h1>
      <h2>Page not found!</h2> {name}
      <p>

      </p>
    </div>
    );
  }
}
