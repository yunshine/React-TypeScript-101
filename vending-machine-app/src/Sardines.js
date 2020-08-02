import React, { Component } from 'react'; // imrc is the shortcut...
// import -something-, { -something- } from './-something-';
import './Sardines.css'; // make a CSS file for this component...
import { NavLink } from 'react-router-dom';
import Message from './Message';

// import { v4 as uuidv4 } from 'uuid'; // for creating unique IDs with uuidv4();
// npm install axios (for API requests) in terminal???

class Sardines extends Component {

  render() {
    return (
      <div className="Sardines">
        <Message>
          <h1>This is the Sardines component wrapped in Message...</h1>
          <br></br>
          <NavLink exact activeClassName="active-link" to="/">Back to Vending Machine</NavLink>
        </Message>
      </div>
    );
  }
}

export default Sardines; /// connect this component to App.js...
