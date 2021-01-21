import React, { Component } from 'react'; // imrc is the shortcut...
import './NewToDoForm.css';

class NewToDoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { item: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addItem(this.state);
    this.setState({ item: "" });
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  render() {
      return (
      <div className="NewToDoForm">
        <h1>Add a New To Do Item</h1>

        <form onSubmit={this.handleSubmit}>
          <label htmlFor='item'>New Item to Add: </label>
          <input
            id='item'
            name='item'
            value={this.state.item}
            onChange={this.handleChange}
          />
        <button>Add To Your List</button>
      </form>
      </div>
    );
  }
}

export default NewToDoForm;
