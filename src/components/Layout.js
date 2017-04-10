import React, { Component } from 'react';
import { Header } from './Header';

export class Layout extends Component {


  render() {
    return (
      <div className="layout">
        <Header></Header>
        {this.props.children}
      </div>
    )
  }
}
