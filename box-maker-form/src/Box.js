import React, { Component } from 'react';
import './Box.css';

class Box extends Component {

  render() {
      return (
        <div>
          <div className="BoxDisplay" style={{height: this.props.height, width: this.props.width, backgroundColor: this.props.color}}>
          </div>
          <button>Delete</button>
        </div>
    );
  }
}

export default Box;
