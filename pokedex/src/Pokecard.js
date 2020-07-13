import React, { Component } from 'react';
import './Pokecard.css';

const pokeURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

class Pokecard extends Component {
  render() {
    let imgURL = `${pokeURL}${this.props.id}.png`
    return (
      <div className="Pokecard">
        <h1>{this.props.name}</h1>
        <img src={imgURL} className="Pokecard-img" alt="A Pokemon character" />
        <div>Type: {this.props.type}</div>
        <div>Experience: {this.props.exp}</div>
      </div>
    );
  }
}

export default Pokecard;
