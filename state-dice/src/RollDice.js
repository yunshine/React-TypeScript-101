import React, { Component } from 'react'
import './RollDice.css';

class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = { number: 1 };
    // this.-something- = this.-something-.bind(this);
  }

  // -something-() {
  //   this.setState({ key: value });
  // }

  render() {
      return (
      <div className="RollDice">
        <h1>This is the new component...</h1>
      </div>
    );
  }
}

export default RollDice;

      // <h1>{this.state.-something-}</h1>
      // <h1>{this.props.-something-}</h1>