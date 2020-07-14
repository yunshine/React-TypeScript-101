import React, { Component } from 'react'
import './Clicker.css';

class Clicker extends Component {
  constructor(props) {
    super(props);
    this.state = { displayedNumber: 1 };
    this.generateNumber = this.generateNumber.bind(this);
  }

  generateNumber() {
    const randomNumber = (Math.floor(Math.random() * 10)) + 1;
    this.setState({ displayedNumber: randomNumber });
  }

  render() {

  let buttonDisplay;
  if (this.state.displayedNumber !== 7) {
    console.log("working");
    buttonDisplay = <button onClick={this.generateNumber}>Random Number</button>;
  } else {
    buttonDisplay = "You Win!";
  }

    return (
      <div className="Click">
      <h1>Number is {this.state.displayedNumber}</h1>
      {buttonDisplay}
      </div>
    );
  }
}

export default Clicker;
