import React, { Component } from 'react'; // imrc is the shortcut...
import NewToDoForm from './NewToDoForm';
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
    // this.addItem = this.addItem.bind(this);
  }

  renderItems() {
    return (
      <ul>
        {this.state.toDoItems.map(item => (
          <li key={item.item} class="">
            {item.item}
          </li>
        ))}
      </ul>
    );
  }

  render() {
      return (
      <div className="ToDoList">
              <h1>My To Do List</h1>
              {this.renderItems()}

              {/* <ShoppingListForm addItem={this.addItem} />
              <ToDo />
              <NewToDoForm /> */}
      </div>
    );
  }
}

export default ToDoList;
