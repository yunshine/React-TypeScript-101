import React, { Component } from 'react'; // imrc is the shortcut...
import './BoxContainer.css'; // make a CSS file for this component...
import Box from './Box';

class BoxContainer extends Component {
  static defaultProps = {
    numberOfBoxes: 18,
    allColors: ['turquoise', 'blue', 'red', 'green', 'purple', 'pink', 'aquamarine'],
  };

  render() {
    const boxes = Array.from({ length: this.props.numberOfBoxes }).map(() => (<Box colors={this.props.allColors}/>));
    return <div className="BoxContainer">{boxes}</div>;
  }
}

export default BoxContainer; /// connect this component to App.js...
