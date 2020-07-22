import React, { Component } from 'react';
import './Box.css';

class Box extends Component {

  render() {
      return (
      <div className="Box" style={{height: this.props.height, width: this.props.width, backgroundColor: this.props.color}}>
      </div>
    );
  }
}

export default Box;
