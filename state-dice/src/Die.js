import React, { Component } from 'react'
import './Die.css';

class Die extends Component {
  constructor(props) {
    super(props);
    // this.state = { number: 1 };
    // this.-something- = this.-something-.bind(this);
  }

  // -something-() {
  //   this.setState({ key: value });
  // }

  render() {
      return (
      <div className="Die">
        <i className={`fas fa-dice-${this.props.face}`}></i>
      </div>
    );
  }
}

export default Die;

      // <h1>{this.state.-something-}</h1>
      // <h1>{this.props.-something-}</h1>