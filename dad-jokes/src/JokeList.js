import React, { Component } from 'react'; // imrc is the shortcut...
// import -something-, { -something- } from './-something-';
import './JokeList.css'; // make a CSS file for this component...

// npm install axios (for API requests) in terminal???

class JokeList extends Component {
  // static defaultProps = {
  //   key: value,
  // }
  // constructor(props) {
  //   super(props);
    // this.state = { key: value };
    // this.handleClick = this.handleClick.bind(this);
  // }

  // JokeList() {
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
      <div className="JokeList">
        {/* <h1>{this.state.JokeList}</h1>
        <h1>{this.props.JokeList}</h1> */}
        <h1>This is the JokeList component...</h1>
      </div>
    );
  }
}

export default JokeList;
