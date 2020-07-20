import React, { Component } from 'react' // imrc is the shortcut...
import './Flip.css'; // make a CSS file for this component...
import Coin from './Coin'


class Flip extends Component {
  static defaultProps = {
    coin: [{side: 'heads', imageSource: 'https://tinyurl.com/react-coin-heads-jpg'}, {side: 'tails', imageSource: 'https://tinyurl.com/react-coin-tails-jpg'}],
  }
  // constructor(props) {
  //   super(props);
    // this.state = { key: value };
    // this.Flip = this.Flip.bind(this);
  // }

  // Flip() {
  //   this.setState({ key: value });
  // }

  // tripleKill() {
  //   this.setState(oldState => {
  //     return { score: oldState + 3 };
  //   })
  // }   => This is the way and the syntax to update an existing state, not:   this.setState({ score: this.state.score + 3 });

  render() {
      return (
      <div className="Flip">
        <h1>Flip a Coin!</h1>
        <Coin coinInfo={this.props.coin[0]} />
      </div>
    );
  }
}

export default Flip; /// connect this component to App.js...
