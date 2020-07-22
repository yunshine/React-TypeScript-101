import React, { Component } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import './Boxlist.css';

class Boxlist extends Component {
  constructor(props) {
    super(props);
    this.state = { height: "", width: "", backgroundColor: ""};
    this.createBox = this.createBox.bind(this);
    this.deleteBox = this.deleteBox.bind(this);
  }

  createBox(newBoxInfo) {
    console.log("creating box...", newBoxInfo.height);
    this.setState({ height: newBoxInfo.height, width: newBoxInfo.width, backgroundColor: newBoxInfo.backgroundColor });
    console.log("the new state is: ", this.state);
  }

  deleteBox(evt) {
    evt.preventDefault();
    console.log("deleting box...");
    this.setState({ height: "", width: "", backgroundColor: "" });
    console.log("the new state after deleting is: ", this.state);
  }


  render() {
    let height = `${this.state.height}px`;
    let width = `${this.state.width}px`;
      return (
      <div className="Boxlist">
        {/* <h1>{this.state.Boxlist}</h1>
        <h1>{this.props.Boxlist}</h1> */}
        <h1>The Ultimate Box Maker</h1>
        <NewBoxForm createBox={this.createBox}/>
        <Box height={height} width={width} color={this.state.backgroundColor} deleteBox={this.deleteBox} />
      </div>
    );
  }
}

export default Boxlist;
