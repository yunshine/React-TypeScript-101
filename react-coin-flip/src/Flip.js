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
      currentSide: null, 
    };
    this.handleClick = this.handleClick.bind(this);
  }

  flipCoin() {
    console.log(this.state.numberOfFlips);
    let flipResult = choice(this.props.coin);
    this.setState(oldState => {
      return {
        currentSide: flipResult,
        numberOfFlips: oldState.numberOfFlips + 1,
        numberOfHeads: oldState.numberOfHeads + (flipResult.side === "heads" ? 1 : 0),
        numberOfTails: oldState.numberOfTails + (flipResult.side === "tails" ? 1 : 0)
      }
    })
    console.log("the flip result was: ", flipResult, "the number of flips was: ", this.state.numberOfFlips);
  }

  handleClick(event) {
    this.flipCoin();
  }

  render() {
      return (
      <div className="Flip">
        <h1>Flip a coin?</h1>
         {/* <h1>{this.state.currentSide.side}</h1> */}
        {this.state.currentSide && <Coin data={this.state.currentSide} />}
        <button onClick={this.handleClick}>Flip</button>
        <h3>Out of {this.state.numberOfFlips} flips, heads came up {this.state.numberOfHeads} times, and tails came up {this.state.numberOfTails} times.</h3>
      </div>
    );
  }
}

export default Flip; /// connect this component to App.js...
