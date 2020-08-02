import React, { Component } from 'react'; // imrc is the shortcut...
// import -something-, { -something- } from './-something-';
import './NavBar.css'; // make a CSS file for this component..
import { Route, Switch, NavLink } from 'react-router-dom';

class NavBar extends Component {


  render() {
    return (
      <div className="NavBar">
        <NavLink exact activeClassName="active-link" to="/">Home</NavLink>
        <NavLink exact activeClassName="active-link" to="/Soda">Chips</NavLink>
        <NavLink exact activeClassName="active-link" to="/Soda">Soda</NavLink>
        <NavLink exact activeClassName="active-link" to="/Sardines">Sardines</NavLink>
      </div>
    );
  }
}

export default NavBar; /// connect this component to App.js...
