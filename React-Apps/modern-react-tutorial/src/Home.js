import { useState } from 'react';

// shortcut for creating a new  stateless function component template: sfc...
function Home() {
    // 'Yun' is the initial value for 'name'...
    // 'setName' is the function that will reassign the initial 'name' variable to a new value AND allow React to react to the change by re-rendering with the updated value...
    // in a useState hook, the first parameter is the initial value...
    const [name, setName] = useState('Yun');
    const [rank, setRank] = useState(24);

    const handleClick = (evt) => {
        console.log("testing handle click...", evt);
    }

    // how to pass an argument from an onClick...
    const handleClick2 = (string, evt) => {
        console.log("testing handle click... " + string, evt);
        console.log("evt target: ", evt.target);
    }

    const handleClick3 = () => {
        setName('Eunjoo');
    }

    const handleClick4 = () => {
        setRank(1);
    }

    return (
        <div className="home">
            <h2>Homepage Component...</h2>
            <h3>Name: {name} - my number {rank} favorite person.</h3>
            <button onClick={handleClick}>Click One</button>
            {/* how to pass an argument from an onClick... */}
            <button onClick={(evt) => handleClick2("passing an argument...", evt)}>Click Two</button>
            <button onClick={handleClick3}>Change Name</button>
            <button onClick={handleClick4}>Change Rank</button>
        </div>
    );
}

export default Home;