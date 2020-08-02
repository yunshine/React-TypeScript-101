import React from 'react';
import VendingMachine from './VendingMachine';
import Chips from './Chips';
import Soda from './Soda';
import Sardines from './Sardines';
import NavBar from './NavBar';
import { Route, Switch, NavLink } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" render={() => <VendingMachine />} />
        <Route exact path="/soda" render={() => <Soda />} />
        <Route exact path="/chips" render={() => <Chips />} />
        <Route exact path="/sardines" render={() => <Sardines />} />
      </Switch>

      {/* <VendingMachine />
      <Chips />
      <Soda />
      <Sardines /> */}

      {/* <NavLink exact activeClassName="active-link" to="/-something-">-some-text-here-</NavLink> */}

      {/* <Switch> */}
        {/* use path="/" to assign a default page... */}
        {/* <Route exact path="/-something-" component={-something-} /> */}
        {/* <Route exact path="/-something-" component={() => <-something- name='Muffins"> } /> */}
        {/* <Route exact path="/-something-" render={() => <-something- name='Biscuit"> } /> */}
      {/* </Switch> */}
    </div>
  );
}

export default App;
