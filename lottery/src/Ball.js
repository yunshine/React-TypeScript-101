import React, { Component } from 'react' // imrc is the shortcut...
import './Ball.css'; // make a CSS file for this component...

class Ball extends Component {
  render() {
      return (
      <div className="Ball">
        <h1>This is the Ball component...{this.props.number}</h1>
      </div>
    );
  }
}

export default Ball; /// connect this component to App.js...
