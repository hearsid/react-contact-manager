import { Component } from 'react';

export class Layout extends Component {


  render() {
    return (
      <div class="layout">
        {props.children}
      </div>
    )
  }
}
