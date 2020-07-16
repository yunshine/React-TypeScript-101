import React, { Component } from 'react' // imrc is the shortcut...
import './Flip.css'; // make a CSS file for this component...
import Coin from './Coin'
import { choice } from './Helpers'

class Flip extends Component {
  static defaultProps = {
    coin: [
      {side: "heads", imgSrc: "https://tinyurl.com/react-coin-heads-jpg"},
      {side: "tails", imgSrc: "https://tinyurl.com/react-coin-tails-jpg"},
    ]
  }

  constructor(props) {
    super(props);
    this.state = { 
      numberOfFlips: 0,
      numberOfHeads: 0, 
      numberOfTails: 0, 
      currentSide: 0, 
      heads: 0, 
      tails: 0, 
    };
    this.handleClick = this.handleClick.bind(this);
  }

  flipCoin() {
    let flipResult = Math.floor(Math.random() * 2);
          console.log("result: ", flipResult);
    if (flipResult === 0) {
      console.log("zero was rolled, so...");
      this.setState(oldState => {
        return { currentSide: flipResult, numberOfHeads: oldState + 1 };
      })
    } 
    console.log("how many zeroes/heads?", this.state.numberOfHeads);
  }

  handleClick(event) {
    this.flipCoin();
  }

  render() {
      return (
      <div className="Flip">
        <h1>Flip a coin?</h1>
        {/* <h1>{this.state.heads}</h1> */}
        <Coin url="https://tinyurl.com/react-coin-heads-jpg" />
        <button onClick={this.handleClick}>Flip</button>
        <h3>Out of {this.state.numberOfFlips} flips, heads came up {this.state.numberOfHeads} times, and tails came up {this.state.numberOfTails} times.</h3>
      </div>
    );
  }
}

export default Flip; /// connect this component to App.js...
