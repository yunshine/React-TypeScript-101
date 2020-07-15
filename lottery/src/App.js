import React from 'react';
import './App.css';
import Lottery from './Lottery';
import Ball from './Ball';

function App() {
  return (
    <div className="App">
      <Lottery />
      <Ball number={39} />
      <Ball number={39} />
      <Ball number={39} />
      <Ball number={39} />
    </div>
  );
}

export default App;
