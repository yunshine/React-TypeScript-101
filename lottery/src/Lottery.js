import React, { Component } from 'react' // imrc is the shortcut...
import './Lottery.css'; // make a CSS file for this component...

class Lottery extends Component {
  constructor(props) {
    super(props);
    // this.state = { key: value };
    // this.Lottery = this.Lottery.bind(this);
  }

  // Lottery() {
  //   this.setState({ key: value });
  // }

  // tripleKill() {
  //   this.setState(oldState => {
  //     return { score: oldState + 3 };
  //   })
  // }   => This is the way and the syntax to update an existing state, not:   this.setState({ score: this.state.score + 3 });

  render() {
      return (
      <div className="Lottery">
      {/* // <h1>{this.state.Lottery}</h1>
      // <h1>{this.props.Lottery}</h1> */}
        <h1>This is the Lottery component...</h1>
      </div>
    );
  }
}

export default Lottery; /// connect this component to App.js...
