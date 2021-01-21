import React, { Component } from 'react'; // imrc is the shortcut...
import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props);
    let angle = Math.random() * 90 - 45;
    let xPos = Math.random() * 40 -20;
    let yPos = Math.random() * 40 -20;
    this._transform = `translate(${xPos}px, ${yPos}px) rotate(${angle}deg)`;
  }

  // Card() {
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
        <img className='Card' src={this.props.image} alt={this.props.name} style={{transform: this._transform}} />
    );
  }
}

export default Card;
