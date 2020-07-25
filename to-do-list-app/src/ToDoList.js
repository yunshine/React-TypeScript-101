import React, { Component } from 'react'; // imrc is the shortcut...
import NewToDoForm from './NewToDoForm';
import ToDo from './ToDo';
import './ToDoList.css';

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoItems: [
        { item: "Fold Laundry", completed: false },
        { item: "Wash Dishes", completed: false }
      ]
    };
    this.addItem = this.addItem.bind(this);
  }

  addItem(item) {
    let newItem = { ...item, completed: false };
    this.setState(state => ({
      toDoItems: [...state.toDoItems, newItem]
    }));
  }

  render() {
    const toDoItems = this.state.toDoItems.map(item => {
      return <ToDo item={item.item} className="" />;
    })

    return (
      <div className="ToDoList">
        <h1>My To Do List</h1>
        {toDoItems}
        <NewToDoForm addItem={this.addItem} />
      </div>
    );
  }
}

export default ToDoList;
