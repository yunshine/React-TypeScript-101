import React from 'react';
import './App.css';
import ToDo from './ToDo';
import ToDoList from './ToDoList';
import NewToDoForm from './NewToDoForm';

function App() {
  return (
    <div className="App">
      <h1>Testing...</h1>
      <ToDo />
      <ToDoList />
      <NewToDoForm />
    </div>
  );
}

export default App;
