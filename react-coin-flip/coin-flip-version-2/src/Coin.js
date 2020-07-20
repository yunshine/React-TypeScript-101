import React, { Component } from 'react' // imrc is the shortcut...
import './Coin.css'; // make a CSS file for this component...

class Coin extends Component {

  render() {
      return (
      <div className="Coin">
        <img src={this.props.coinInfo.imageSource} alt={this.props.coinInfo.side} />
      </div>
    );
  }
}

export default Coin; /// connect this component to App.js...
