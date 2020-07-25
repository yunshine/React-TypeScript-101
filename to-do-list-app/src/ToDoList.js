import React, { Component } from 'react'; // imrc is the shortcut...
import NewToDoForm from './NewToDoForm';
import ToDo from './ToDo';
import './ToDoList.css';

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoItems: [
        { item: "Fold Laundry", completed: false, id: "Fold Laundry" },
        { item: "Wash Dishes", completed: false, id: "Wash Dishes" }
      ]
    };
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.update = this.update.bind(this);
    this.toggleMark = this.toggleMark.bind(this);
  }

  addItem(item) {
    let newItem = { ...item, completed: false, id: item.item };
    this.setState(state => ({
      toDoItems: [...state.toDoItems, newItem]
    }));
  }

  removeItem(id) {
    this.setState({
      toDoItems: this.state.toDoItems.filter(item => item.id !== id)
    })
  } // or, filter by item.id???

  update(id, updatedItem) {
    const updatedToDoItems = this.state.toDoItems.map(toDoItem => {
      if(toDoItem.id === id) {
        return { ...toDoItem, item: updatedItem };
      }
      return toDoItem;
    });
    this.setState({ toDoItems: updatedToDoItems });
  }

  toggleMark(id) {
    const updatedToDoItems = this.state.toDoItems.map(toDoItem => {
      if(toDoItem.id === id) {
        return { ...toDoItem, completed: !toDoItem.completed };
      }
      return toDoItem;
    });
    this.setState({ toDoItems: updatedToDoItems });
  }

  render() {
    const toDoItems = this.state.toDoItems.map(item => {
      return <ToDo key={item.item}  id={item.item} item={item.item} className="" removeItem={this.removeItem} update={this.update} completed={item.completed}  toggleMark={this.toggleMark} />;
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
