import React, { Component } from 'react'
import './RollDice.css';
import Die from './Die';

class RollDice extends Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"]
  };
  constructor(props) {
    super(props);
    this.state = { die1: 'one', die2: 'one', rolling: false };
    this.roll = this.roll.bind(this);
  }

  roll() {
    const newDie1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
    const newDie2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
    // console.log(newDie1, newDie2);
    this.setState({ die1: newDie1, die2: newDie2, rolling: true });
    setTimeout(() => {
      this.setState({ rolling: false });
    }, 1000);
  }

  render() {
      return (
      <div className="RollDice">
      <div className="RollDice-container">
        <Die face={this.state.die1} wobbling={this.state.rolling} />
        <Die face={this.state.die2} wobbling={this.state.rolling} />
      </div>
        <button onClick={this.roll} disabled={this.state.rolling}>
          {this.state.rolling ? "...rolling..." : "Roll Dice Now"}
        </button>
      </div>
    );
  }
}

export default RollDice;

      // <h1>{this.state.-something-}</h1>
      // <h1>{this.props.-something-}</h1>