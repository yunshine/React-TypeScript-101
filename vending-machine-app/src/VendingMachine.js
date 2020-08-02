import React, { Component } from 'react'; // imrc is the shortcut...
import Message from './Message';
import './VendingMachine.css'; // make a CSS file for this component...
import { NavLink } from 'react-router-dom';


// import { v4 as uuidv4 } from 'uuid'; // for creating unique IDs with uuidv4();
// npm install axios (for API requests) in terminal???

class VendingMachine extends Component {
  // static defaultProps = {
  //   key: value,
  // };
  
  // constructor(props) {
  //   super(props);
    // this.state = { key: value };
    // this.handleClick = this.handleClick.bind(this);
  // }

  // VendingMachine() {
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
