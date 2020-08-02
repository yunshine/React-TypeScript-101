import React, { Component } from 'react'; // imrc is the shortcut...
// import -something-, { -something- } from './-something-';
import './Chips.css'; // make a CSS file for this component...
import { NavLink } from 'react-router-dom';
import Message from './Message';

// import { v4 as uuidv4 } from 'uuid'; // for creating unique IDs with uuidv4();
// npm install axios (for API requests) in terminal???

class Chips extends Component {
  // static defaultProps = {
  //   key: value,
  // };
  
  // constructor(props) {
  //   super(props);
    // this.state = { key: value };
    // this.handleClick = this.handleClick.bind(this);
  // }

  // Chips() {
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
      <div className="Chips">
        {/* <h1>{this.state.Chips}</h1>
        <h1>{this.props.Chips}</h1> */}
        <Message>
          <h1>This is the Chips component wrapped in Message...</h1>
          <br></br>
          <NavLink exact activeClassName="active-link" to="/">Back to Vending Machine</NavLink>
        </Message>
      </div>
    );
  }
}

export default Chips; /// connect this component to App.js...
