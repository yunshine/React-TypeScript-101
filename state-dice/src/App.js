import React from 'react';
import './App.css';
import RollDice from './RollDice';
import Die from './Die';

function App() {
  return (
    <div className="App">
      {/* <h1>Testing...</h1>
      <RollDice /> */}
      <Die face="five" />
      <Die face="three" />
      <Die face="one" />
      <Die face="two" />
    </div>
  );
}

export default App;
