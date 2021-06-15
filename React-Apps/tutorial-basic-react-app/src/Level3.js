import { useState } from 'react';
import Count from './Count';

const Level3 = () => {
    const [count, setCount] = useState(0);

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
            <button onClick={countUp}>Count Up</button>
            <button onClick={countDown}>Count Down</button>
            <button onClick={countReset}>Count Reset</button>

            {count > 2 ? <Count count={count} /> : null}

        </div>
    );
}

export default Level3;