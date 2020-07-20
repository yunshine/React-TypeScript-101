import React, { Component } from 'react' // imrc is the shortcut...
import './Flip.css'; // make a CSS file for this component...
import Coin from './Coin'


class Flip extends Component {
  static defaultProps = {
    coin: [{side: 'heads', imageSource: 'https://tinyurl.com/react-coin-heads-jpg'}, {side: 'tails', imageSource: 'http://www.pcgscoinfacts.com/UserImages/71009269r.jpg?__cf_chl_jschl_tk__=210c4f91c38c039019258b6c88a394d619043c69-1595217790-0-AQKR1nT3c6RgMPfwZK1_WmTMy_IyJ1-EzRhQbkzRooJnk0YM7tS6NLEeNwoPxh48_fX5Pb030ixNcEimy3g1gsHSxxWndNgqPBSmeVpy7rlguRLRnOlbrgo6NWdJrbny9q8jmebAWKOa63_khfXoisR4kPeHz5Zk20nfoTqx08sf6BZdrnZl-JiTk3WznGGxDAUZhAnVpo4M0FlU1PZxKR6mTW5KP7qegl3n-hfVY-3iOLDV9iVEjIQOqwucKkkB04I5_VHv6xHwcpG2ozrDEIKFefW2zmIlA7DTgIfL86igsc-Umui9B1gbnRbMHj1--g'}],
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
        return { headsResults: oldState.headsResults + 1, currentSide:  this.props.coin[0], };
      })
    } else {
      this.setState(oldState => {
        return { tailsResults: oldState.tailsResults + 1, currentSide: this.props.coin[1] };
      })
    }
    console.log("a click has happened...", "here's my array: ", array, "here's the random index", randomIndex, "totalFlips: ", this.state.totalFlips, this. state.currentSide);
  }

  handleClick() {
    this.flipCoin(this.props.coin);
  }   


  render() {
      return (
      <div className="Flip">
        <h1>Flip a Coin!</h1>
        <Coin coinInfo={this.state.currentSide} />
        <button onClick={this.handleClick} >Flip the Coin</button>
      <h1>Out of {this.state.totalFlips} flips, there have been {this.state.headsResults} heads and {this.state.tailsResults} tails.</h1>
      </div>
    );
  }
}

export default Flip;
