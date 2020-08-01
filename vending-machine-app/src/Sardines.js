import React, { Component } from 'react'; // imrc is the shortcut...
// import -something-, { -something- } from './-something-';
import './Sardines.css'; // make a CSS file for this component...

// import { v4 as uuidv4 } from 'uuid'; // for creating unique IDs with uuidv4();
// npm install axios (for API requests) in terminal???

class Sardines extends Component {
  // static defaultProps = {
  //   key: value,
  // };
  
  // constructor(props) {
  //   super(props);
    // this.state = { key: value };
    // this.handleClick = this.handleClick.bind(this);
  // }

  // Sardines() {
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
      <div className="Sardines">
        {/* <h1>{this.state.Sardines}</h1>
        <h1>{this.props.Sardines}</h1> */}
        <h1>This is the Sardines component...</h1>
      </div>
    );
  }
}

export default Sardines; /// connect this component to App.js...
