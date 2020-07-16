import React, { Component } from 'react' // imrc is the shortcut...
import './Coin.css'; // make a CSS file for this component...

class Coin extends Component {
  // static defaultProps = {
  //   key: value,
  // }
  constructor(props) {
    super(props);
    // this.state = { key: value };
    // this.Coin = this.Coin.bind(this);
  }

  // Coin() {
  //   this.setState({ key: value });
  // }

  // tripleKill() {
  //   this.setState(oldState => {
  //     return { score: oldState + 3 };
  //   })
  // }   => This is the way and the syntax to update an existing state, not:   this.setState({ score: this.state.score + 3 });

  render() {
      return (
      <div className="Coin">
      {/* // <h1>{this.state.Coin}</h1>
      // <h1>{this.props.Coin}</h1> */}
        <h1>This is the Coin component...</h1>
      </div>
    );
  }
}

export default Coin; /// connect this component to App.js...