import React, { Component } from 'react'; // imrc is the shortcut...
// import -something-, { -something- } from './-something-';
import './DogDetails.css'; // make a CSS file for this component..
import { Link } from 'react-router-dom';

// import { v4 as uuidv4 } from 'uuid'; // for creating unique IDs with uuidv4();
// npm install axios (for API requests) in terminal???

class DogDetails extends Component {
  // static defaultProps = {
  //   key: value,
  // };
  
  // constructor(props) {
  //   super(props);
    // this.state = { key: value };
    // this.handleClick = this.handleClick.bind(this);
  // }

  // DogDetails() {
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
    let { dog } = this.props;
    return (
      <div className="DogDetails row justify-content-center mt-3">
        <div className="col-11 col-lg-5">
          <div className="card DogDetails-card">
            <img src={dog.src} alt={dog.name} className="card-img-top" />
            <div className="card-body">
              <h2 className="card-title">{dog.name}</h2>
              <h4 className="card-subtitle text-muted">{dog.age} years old</h4>
            </div>
            <ul className="list-group list-group-flush">
              {dog.facts.map((fact, i) => (
                <li className="list-group-item" key={i}>{fact}</li>
              ))}
            </ul>
            <div className="card-body">
              <Link to="/dogs" className="btn btn-info">Go Back</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DogDetails; /// connect this component to App.js...
