import React, { Component } from 'react'; // imrc is the shortcut...
import './Message.css'; // make a CSS file for this component..
// import { Route, Switch, NavLink } from 'react-router-dom';

class Message extends Component {

  render() {
    return (
      <div className="Message">
        {this.props.children}
      </div>
    );
  }
}

export default Message; /// connect this component to App.js...
