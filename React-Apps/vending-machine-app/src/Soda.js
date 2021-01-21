import React, { Component } from 'react'; // imrc is the shortcut...
// import -something-, { -something- } from './-something-';
import './Soda.css'; // make a CSS file for this component...
import { NavLink } from 'react-router-dom';
import Message from './Message';

// import { v4 as uuidv4 } from 'uuid'; // for creating unique IDs with uuidv4();
// npm install axios (for API requests) in terminal???

class Soda extends Component {
  // static defaultProps = {
  //   key: value,
  // };
  
  // constructor(props) {
  //   super(props);
    // this.state = { key: value };
    // this.handleClick = this.handleClick.bind(this);
  // }

  // Soda() {
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
      <div className="Soda">
        <Message>
          <h1>This is the Soda component wrapped in Message...</h1>
          <br></br>
          <NavLink exact activeClassName="active-link" to="/">Back to Vending Machine</NavLink>
        </Message>
      </div>
    );
  }
}

export default Soda; /// connect this component to App.js...
