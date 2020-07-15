import React, { Component } from 'react' // imrc is the shortcut...
import './Lottery.css'; // make a CSS file for this component...
import Ball from './Ball';

class Lottery extends Component {
  static defaultProps = {
    title: 'Lotto',
    maxBalls: 6,
    maxNumber: 40,
  }
  constructor(props) {
    super(props);
    this.state = { numbers: Array.from({ length: this.props.maxBalls }) };
    this.handleClick = this.handleClick.bind(this);
    this.generate = this.generate.bind(this);
  }

  generate() {

  }

  handleClick() {
    this.generate();
    // this.setState({ key: value });
  }

  // tripleKill() {
  //   this.setState(oldState => {
  //     return { score: oldState + 3 };
  //   })
  // }   => This is the way and the syntax to update an existing state, not:   this.setState({ score: this.state.score + 3 });

  render() {
      return (
      <section className="Lottery">
        <h1>{this.props.title}</h1>
        <div>
          {this.state.numbers.map(number => <Ball number={number}/>)}
        </div>
        <button onclick={this.handleClick}>Generate New Numbers</button>
      </section>
    );
  }
}

export default Lottery; /// connect this component to App.js...
