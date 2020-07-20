import React, { Component } from 'react' // imrc is the shortcut...
import './Flip.css'; // make a CSS file for this component...
import Coin from './Coin'


class Flip extends Component {
  static defaultProps = {
    coin: [{side: 'heads', imageSource: 'https://tinyurl.com/react-coin-heads-jpg'}, {side: 'tails', imageSource: 'https://tinyurl.com/react-coin-tails-jpg'}],
  }
  constructor(props) {
    super(props);
    this.state = { totalFlips: 0, headsResults: 0, tailsResults: 0, currentSide: '' };
    this.handleClick = this.handleClick.bind(this);
  }

  flipCoin(array) {
    this.setState(oldState => {
      return { totalFlips: oldState.totalFlips + 1 };
    })
    let randomIndex = Math.floor(Math.random() * array.length);
    if (randomIndex === 0) {
      this.setState(oldState => {
        return { headsResults: oldState.headsResults + 1, currentSide: randomIndex, };
      })
    } else {
      this.setState(oldState => {
        return { tailsResults: oldState.tailsResults + 1, currentSide: randomIndex };
      })
    }

    console.log("a click has happened...", "here's my array: ", array, "here's the random index", randomIndex, "totalFlips: ", this.state.totalFlips, this. state.currentSide);
  }

  handleClick() {
    this.flipCoin(this.props.coin);
  //   this.setState(oldState => {
  //     return { score: oldState + 3 };
  //   })
  }   
  // => This is the way and the syntax to update an existing state, not:   this.setState({ score: this.state.score + 3 });

  render() {
      return (
      <div className="Flip">
        <h1>Flip a Coin!</h1>
        <Coin coinInfo={this.props.coin[0]} />
        <button onClick={this.handleClick} >Flip the Coin</button>
      <h1>Out of {this.state.totalFlips} flips, there have been {this.state.headsResults} heads and {this.state.tailsResults} tails.</h1>
      </div>
    );
  }
}

export default Flip;
