import React, { Component } from 'react'; // imrc is the shortcut...
// import -something-, { -something- } from './-something-';
import './Joke.css'; // make a CSS file for this component...

// npm install axios (for API requests) in terminal???

class Joke extends Component {
  // static defaultProps = {
  //   key: value,
  // };
  
  // constructor(props) {
  //   super(props);
    // this.state = { key: value };
    // this.handleClick = this.handleClick.bind(this);
  // }

  // Joke() {
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
      <div className="Joke">
        <div className="Joke-buttons">
          <i className='fas fa-arrow-up'></i>
          <span>{this.props.votes}</span>
          <i className='fas fa-arrow-down'></i>
        </div>
        <div className="Joke-text">
          {this.props.text}
        </div>
      </div>
    );
  }
}

export default Joke;
