import React, { Component } from 'react'; // imrc is the shortcut...
// import -something-, { -something- } from './-something-';
import './Deck.css'; // make a CSS file for this component...
import axios from 'axios';

const API_URL = "https://deckofcardsapi.com/api/deck/new/shuffle";

class Deck extends Component {
  // static defaultProps = {
  //   key: value,
  // }

  constructor(props) {
    super(props);
    this.state = { deck: null };
    // this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {

  }

  // Deck() {
  //   this.setState({ key: value });
  // }

  // handleClick() {
  //   this.newFunction();
  //   this.setState(oldState => {
  //     return { score: oldState + 3 };
  //   })
  // }
  // => This is the way and the syntax to update an existing state, not:   this.setState({ score: this.state.score + 3 });

  render() {
      return (
      <div className="Deck">
        {/* <h1>{this.state.Deck}</h1>
        <h1>{this.props.Deck}</h1> */}
        <h1>This is the Deck component...</h1>
      </div>
    );
  }
}

export default Deck; /// connect this component to App.js...
