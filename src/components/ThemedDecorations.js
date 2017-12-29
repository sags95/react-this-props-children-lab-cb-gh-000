// Code ThemedDecoration Component Here
import React from 'react';

export default class ThemedDecorations extends React.Component{
  render(){

    const childTheme = 'heaven';

    const extraProp = React.Children.map(
      this.props.children, child => {
        return React.cloneElement(child, {
          className: childTheme
        })
      }
    )
    return(
      <div className="wrapper">
        {extraProp}
      </div>
    );
  }
}
