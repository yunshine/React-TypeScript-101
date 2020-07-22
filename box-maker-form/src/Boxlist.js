import React, { Component } from 'react';
import './Boxlist.css';

class Boxlist extends Component {
  // static defaultProps = {
  //   key: value,
  // }
  // constructor(props) {
  //   super(props);
    // this.state = { key: value };
    // this.handleClick = this.handleClick.bind(this);
  // }

  // Boxlist() {
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
      <div className="Boxlist">
        {/* <h1>{this.state.Boxlist}</h1>
        <h1>{this.props.Boxlist}</h1> */}
        <h1>The Ultimate Box Maker</h1>
      </div>
    );
  }
}

export default Boxlist;
