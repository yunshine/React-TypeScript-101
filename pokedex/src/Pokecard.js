import React, { Component } from 'react';
import './Pokecard.css';

const pokeURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

class Pokecard extends Component {
  render() {
    let imgURL = `${pokeURL}${this.props.id}.png`
    return (
      <div className="Pokecard">
        <h1 className="Pokecard-title">{this.props.name}</h1>
        <img src={imgURL} className="Pokecard-img" alt="A Pokemon character" />
        <div className="Pokecard-data">Type: {this.props.type}</div>
        <div className="Pokecard-data">Experience: {this.props.exp}</div>
      </div>
    );
  }
}

export default Pokecard;
