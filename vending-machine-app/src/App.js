import React from 'react';
import VendingMachine from './VendingMachine';
import Chips from './Chips';
import Soda from './Soda';
import Sardines from './Sardines';
// import { Route, Switch, NavLink } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Testing App Component...</h1>
      <VendingMachine />
      <Chips />
      <Soda />
      <Sardines />

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
