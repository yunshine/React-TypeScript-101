import React, { Component } from 'react'; // imrc is the shortcut...
import './ToDo.css';

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(evt) {
    evt.preventDefault();
    this.props.removeItem(this.props.id);
  }

  render() {
    return (
      <div className="ToDo">
        <li className="">{this.props.item} </li>
        <button>Edit</button>
        <button onClick={this.handleClick}>X</button>
      </div>
    );
  }
}

export default ToDo;
