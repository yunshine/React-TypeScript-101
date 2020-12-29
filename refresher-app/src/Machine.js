import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles/MachineStyles';

class Machine extends Component {
    render() {
        const { s1, s2, s3, classes } = this.props;
        let isWinner = (s1 === s2) && (s2 === s3);
        return (
            <div className={classes.Machine}>
                <h2 className={classes.MachineSH2}>{s1}  |  {s2}  |  {s3}</h2>
                <h2 className={classes.MachineResultText}>{isWinner ? "Winner!" : "Loser 😭"}</h2>
                <br></br>
            </div>
        );
    }
}

export default withStyles(styles)(Machine);
