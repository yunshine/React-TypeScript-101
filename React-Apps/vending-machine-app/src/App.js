import React from 'react';
import VendingMachine from './VendingMachine';
import Chips from './Chips';
import Soda from './Soda';
import Sardines from './Sardines';
import NavBar from './NavBar';
import { Route, Switch } from 'react-router-dom';
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
    </div>
  );
}

export default App;
