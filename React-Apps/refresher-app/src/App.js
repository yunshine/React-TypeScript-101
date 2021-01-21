import React, { Component } from 'react';
// import { Route, Switch, NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import styles from './styles/AppStyles';
import Machine from './Machine';

class App extends Component {
    render() {
        return (
            <div className={this.props.classes.App}>
                <h1>Play the Slots!</h1>
                <Machine s1="😆" s2="😷" s3="❤️" />
                <Machine s1="👍🏻" s2="👍🏻" s3="👍🏻" />
                <Machine s1="😍" s2="🤓" s3="👟" />
            </div>
        );
    }
}

export default withStyles(styles)(App);
