import React, { Component } from 'react'; // imrc is the shortcut...
import './ToDo.css';

class ToDo extends Component {

  render() {
      return (
      <div className="ToDo">
        <li key={this.props.item} className="">{this.props.item}</li>
        <button>Edit</button>
        <button>X</button>
      </div>
    );
  }
}

export default ToDo;
