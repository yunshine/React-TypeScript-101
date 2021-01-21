import React, { Component } from 'react'; // imrc is the shortcut...
import { choice } from './helper'; // make a CSS file for this component...
import './Box.css'; // make a CSS file for this component...

class Box extends Component {
  // static defaultProps = {
  //   allColors: ['turquoise', 'blue', 'red', 'green', 'purple', 'pink', 'aquamarine']
  // };

  constructor(props) {
    super(props);
    this.state = { color: choice(this.props.colors) };
    this.handleClick = this.handleClick.bind(this);
  }

  pickColor() {
    let newColor;
    do {
      newColor = choice(this.props.colors);
    } while (newColor === this.state.color);
    this.setState({color: newColor});
  }

  handleClick() {
    this.pickColor();
  }

  render() {
      return (
      <div className="Box" style={{backgroundColor: this.state.color}} onClick={this.handleClick}>
      </div>
    );
  }
}

export default Box;
