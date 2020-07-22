import React, { Component } from 'react';
import './Box.css';

class Box extends Component {
  // static defaultProps = {
  //   key: value,
  // }
  // constructor(props) {
  //   super(props);
    // this.state = { key: value };
    // this.handleClick = this.handleClick.bind(this);
  // }

  // Box() {
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
      <div className="Box">
        {/* <h1>{this.state.Box}</h1>
        <h1>{this.props.Box}</h1> */}
        <h1>This is the box component...</h1>
      </div>
    );
  }
}

export default Box;
