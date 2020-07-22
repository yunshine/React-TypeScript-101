import React, { Component } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import './Boxlist.css';

class Boxlist extends Component {
  constructor(props) {
    super(props);
    this.state = { height: "320px", width: "320px", backgroundColor: "turquoise" };
    // this.addItem = this.addItem.bind(this);
  }
  // addItem(item) {
  //   let newItem = { ...item, id: uuid() };
  //   this.setState(state => ({
  //     items: [...state.items, newItem]
  //   }));
  // }

  render() {
      return (
      <div className="Boxlist">
        {/* <h1>{this.state.Boxlist}</h1>
        <h1>{this.props.Boxlist}</h1> */}
        <h1>The Ultimate Box Maker</h1>
        <NewBoxForm />
        <Box height={this.state.height} width={this.state.width} color={this.state.backgroundColor} />
      </div>
    );
  }
}

export default Boxlist;
