import React, { Component } from 'react' // imrc is the shortcut...
import './Coin.css';

class Coin extends Component {
  render() {
    return (
      <div className="Coin">
        <img src='https://tinyurl.com/react-coin-tails-jpg' alt='One side of a coin' />
      </div>
    );
  }
}

export default Coin;
