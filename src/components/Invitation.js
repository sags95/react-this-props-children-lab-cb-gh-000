// Code Invitation Component Here
import React from 'react';
import PropTypes from 'prop-types';

export default class Invitation extends React.Component{
  render(){
    return(
      <div className="wrapper">
        <h1>You've been invited!</h1>
        <div className="invite_body">
          {this.props.children}
        </div>
      </div>
    );
  }
}
