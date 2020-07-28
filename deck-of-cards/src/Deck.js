import React, { Component } from 'react';
import './Deck.css';
import axios from 'axios';

const API_BASE_URL = "https://deckofcardsapi.com/api/deck";

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = { deck: null, drawn: [] };
    this.getCard = this.getCard.bind(this);
  }

  async componentDidMount() {
    let deck = await axios.get(`${API_BASE_URL}/new/shuffle`);
    this.setState({ deck: deck.data });
  }

  async getCard() {
    let id = this.state.deck.deck_id;
    let cardUrl = `${API_BASE_URL}/${id}/draw/`;
    let cardRes = await axios.get(cardUrl);
    let card = cardRes.data.cards[0];
    this.setState(st => ({
      drawn: [
        ...st.drawn,
        {id: card.code, image: card.image, name: `${card.value} of ${card.suit}`}
      ]
    }));
    console.log(this.state.drawn);
  }


  render() {
      return (
      <div className="Deck">
        <h1>This is the Deck component...</h1>
        <button onClick={this.getCard}>Deal a New Card!</button>
      </div>
    );
  }
}

export default Deck;
