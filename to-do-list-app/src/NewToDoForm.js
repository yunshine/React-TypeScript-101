import React, { Component } from 'react'; // imrc is the shortcut...
import './NewToDoForm.css';

class NewToDoForm extends Component {
  // static defaultProps = {
  //   key: value,
  // }
  // constructor(props) {
  //   super(props);
    // this.state = { key: value };
    // this.handleClick = this.handleClick.bind(this);
  // }

  // NewToDoForm() {
  //   this.setState({ key: value });
  // }

  // handleClick() {
  //   this.newFunction();
  //   this.setState(oldState => {
  //     return { score: oldState + 3 };
  //   })
  // }
  // => This is the way and the syntax to update an existing state, not:   this.setState({ score: this.state.score + 3 });

  render() {
      return (
      <div className="NewToDoForm">
        {/* <h1>{this.state.NewToDoForm}</h1>
        <h1>{this.props.NewToDoForm}</h1> */}
        <h1>This is the NewToDoForm component...</h1>
      </div>
    );
  }
}

export default NewToDoForm;
