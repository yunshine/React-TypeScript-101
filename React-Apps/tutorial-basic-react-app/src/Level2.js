import { useState } from 'react';

const Level2 = () => {
    const [count, setCount] = useState(0);

    let number = 0;

    // const numberUp = () => {
    //     setount += 1;
    //     console.log(number);
    // }

    const countUp = () => {
        setCount(count + 1);
        number += 1;
    }

    const countDown = () => {
        setCount(count - 1);
        number -= 1;
    }

    const countReset = () => {
        setCount(0);
        number = 0;
    }

    console.log(count);
    return (
        <div>
            <h2>{count}</h2>
            <h2>Number: {number}</h2>
            <button onClick={countUp}>Count Up</button>
            <button onClick={countDown}>Count Down</button>
            <button onClick={countReset}>Count Reset</button>

            {/* <div>
                <h1>{number}</h1>
                <button onClick={numberUp}>Number Up</button>
            </div> */}
        </div>
    );
}

export default Level2;