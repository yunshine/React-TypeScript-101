import React, { Component } from 'react';
// import { Route, Switch, NavLink } from 'react-router-dom';
// import -something-, { -something- } from './-something-';
import Machine from './Machine';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Play the Slots!</h1>
                <Machine s1="😆" s2="😷" s3="❤️" />
                <Machine s1="👍🏻" s2="👍🏻" s3="👍🏻" />
                <Machine s1="😍" s2="🤓" s3="👟" />
            </div>
        );
    }
}

export default App;
