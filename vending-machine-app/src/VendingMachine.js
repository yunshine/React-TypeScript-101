import React, { Component } from 'react'; // imrc is the shortcut...
import Message from './Message';
import './VendingMachine.css'; // make a CSS file for this component...
import { NavLink } from 'react-router-dom';

class VendingMachine extends Component {

  render() {
    return (
      <div className="VendingMachine">
        <Message>
          <h1>This is the VendingMachine component wrapped in the Message component...</h1>
        </Message>

        <br></br>
        
        <Message>
          <NavLink exact activeClassName="active-link" to="/Chips">go to Chips</NavLink>
          <NavLink exact activeClassName="active-link" to="/Soda">go to Soda</NavLink>
          <NavLink exact activeClassName="active-link" to="/Sardines">go to Sardines</NavLink>
        </Message>

      </div>
    );
  }
}

export default VendingMachine;
