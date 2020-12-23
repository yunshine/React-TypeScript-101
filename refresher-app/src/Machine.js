import React, { Component } from 'react';

class Machine extends Component {
    render() {
        const { s1, s2, s3 } = this.props;
        let isWinner = (s1 === s2) && (s2 === s3);
        return (
            <div>
                <h2>{s1}  |  {s2}  |  {s3}</h2>
                <h2>{isWinner ? "Winner!" : "Loser 😭"}</h2>
                <br></br>
            </div>
        );
    }
}

export default Machine;
