import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export function Contact(props) {


  var contact = props;
  const index = props.index;
  return (
    <div className="my-repeat-animation contact media">
      <div className="thumbnail">
        <img className="media-object contact-image"
          alt='contact'
          src={`img/faces/${contact.id}.jpg`} />
      </div>
      <div className="media-body">
        <div className="media-heading">
          <h3>
            {index + 1+') '}
            {contact.name}
            <a onClick={() => {
              props.onDelete(index)
            }}>
              <i className="gg-trash"></i>
            </a>
          </h3>
        </div>
        <div className="info-container">
          <div className="label">Phone Number:</div>
          <div className="value">{contact.tel}</div>
          <div className="label">Email:</div>
          <div className="value">{contact.email}</div>
        </div>
      </div>
    </div>
  )
}
