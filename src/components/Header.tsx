import React, { Component } from 'react';
interface Props {
}

interface State {
}
export function Header(props)  {

  return (
        <div className="header">
        <header className="bs-header">
          <div className="container">
            <h1>Contact Manager</h1>
            <p>Simple React example application</p>
          </div>
        </header>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 main-container">
                {props.children}
            </div>
          </div>
        </div>
      </div>
        )
}
