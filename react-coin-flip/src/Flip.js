import React, { Component } from 'react' // imrc is the shortcut...
import './Flip.css'; // make a CSS file for this component...
import Coin from './Coin'

class Flip extends Component {
  static defaultProps = {
  }

  constructor(props) {
    super(props);
    this.state = { 
      side: 0, 
      heads: 0, 
      tails: 0, 
    };
    this.flipCoin = this.flipCoin.bind(this);
  }

  flipCoin() {
    let flipResult = Math.floor(Math.random() * 2);
          console.log("result: ", flipResult);
    if (flipResult === 0) {
      console.log("zero was rolled, so...");
      this.setState(oldState => {
        return { side: flipResult, heads: oldState + 1 };
      })
    } 
    console.log("how many zeroes/heads?", this.state.heads);
  }


  render() {
      return (
      <div className="Flip">
        <h1>Flip a coin?</h1>
        {/* <h1>{this.state.heads}</h1> */}
        <Coin url="https://tinyurl.com/react-coin-heads-jpg" />
        <button onClick={this.flipCoin}>Flip</button>
      </div>
    );
  }
}

export default Flip; /// connect this component to App.js...
