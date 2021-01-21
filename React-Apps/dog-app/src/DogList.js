import React, { Component } from 'react';
import './DogList.css'; // make a CSS file for this component..
import { Link } from 'react-router-dom';

class DogList extends Component {

  render() {
    return (
      <div className="DogList">
        <div className="row mt-3">
        {this.props.dogs.map(d => (
          <div className="Dog col-md-6 col-lg-4 text-center" key={d.name}>
            <img src={d.src} alt={d.name} />
            <Link className="underline" to={`/dogs/${d.name}`}>
              <h3>{d.name}</h3>
            </Link>
          </div>
        ))}
        </div>
      </div>
    );
  }
}

export default DogList; 
