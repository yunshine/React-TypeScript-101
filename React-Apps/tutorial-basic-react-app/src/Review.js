import { useState } from 'react';
import Name from './Name';

const Review = () => {
    const [name, setName] = useState("Hello!");

    const yun = () => {
        setName("Yun");
    }

    const uriel = () => {
        setName("Uriel");
    }

    const jared = () => {
        setName("Jared");
    }

    return (
        <div>
            <h1>{name}</h1>
            <button onClick={yun}>Yun</button>
            <button onClick={uriel}>Uriel</button>
            <button onClick={jared}>Jared</button>
            {name === "Uriel" && <Name name={name} />}
            {name === "Jared" && <Name name={name} />}
        </div>
    )
}

export default Review;