import { useState } from 'react';

const Level2 = () => {
    const [count, setCount] = useState(0);
    // let number = 10;
    // const numberUp = () => {
    //     number += 1;
    // }

    const countUp = () => {
        setCount(count + 1);
    }

    const countDown = () => {
        setCount(count - 1);
    }

    const countReset = () => {
        setCount(0);
    }


    return (
        <div>
            <h2>{count}</h2>
            <button onClick={countUp}>Up</button>
            <button onClick={countDown}>Down</button>
            <button onClick={countReset}>Reset</button>

            {/* <div>
                <h1>{number}</h1>
                <button onClick={numberUp}>Number Up</button>
            </div> */}
        </div>
    );
}

export default Level2;