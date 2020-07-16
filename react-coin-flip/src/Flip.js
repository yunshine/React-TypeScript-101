import React, { Component } from 'react' // imrc is the shortcut...
import './Flip.css'; // make a CSS file for this component...

class Flip extends Component {
  // static defaultProps = {
  //   key: value,
  // }
  constructor(props) {
    super(props);
    // this.state = { key: value };
    // this.Flip = this.Flip.bind(this);
  }

  // Flip() {
  //   this.setState({ key: value });
  // }

  // tripleKill() {
  //   this.setState(oldState => {
  //     return { score: oldState + 3 };
  //   })
  // }   => This is the way and the syntax to update an existing state, not:   this.setState({ score: this.state.score + 3 });

  render() {
      return (
      <div className="Flip">
      {/* // <h1>{this.state.Flip}</h1>
      // <h1>{this.props.Flip}</h1> */}
        <h1>This is the Flip component...</h1>
      </div>
    );
  }
}

export default Flip; /// connect this component to App.js...
