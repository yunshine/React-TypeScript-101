import React, { Component } from 'react'; // imrc is the shortcut...
import './ToDo.css';

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = { isEditing: false, item: this.props.item };
    this.handleChange = this.handleChange.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleEditUpdate = this.handleEditUpdate.bind(this);
  }

  handleRemove(evt) {
    this.props.removeItem(this.props.id);
  }

  handleEdit(evt) {
    // this.props.removeItem(this.props.id);
    this.setState({isEditing: !this.state.isEditing});
  }

  handleEditUpdate(evt) {
    evt.preventDefault();
    this.props.update(this.props.id, this.state.item);
    this.setState = ({ isEditing: false });
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  render() {
    let result;
    if(this.state.isEditing) {
      result = 
        <div>
          <form onSubmit={this.handleEditUpdate}>
            <input type="text" value={this.state.item} name='item' onChange={this.handleChange} />
            <button>Save Edit</button>
          </form>
        </div>;
    } else {
      result = 
        <div className="ToDo">
          <li className="">{this.props.item} </li>
          <button onClick={this.handleEdit}>Edit</button>
          <button onClick={this.handleRemove}>X</button>
        </div>;
    }
    return result;
  }
}

export default ToDo;
