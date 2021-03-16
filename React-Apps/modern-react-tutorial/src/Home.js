// shortcut for creating a new  stateless function component template: sfc...
function Home() {

    const handleClick = (evt) => {
        console.log("testing handle click...", evt);
    }

    // how to pass an argument from an onClick...
    const handleClick2 = (string, evt) => {
        console.log("testing handle click... " + string, evt);
        console.log("evt target: ", evt.target);
    }

    return (
        <div className="home">
            <h2>Homepage Component...</h2>
            <button onClick={handleClick}>Click One</button>
            {/* how to pass an argument from an onClick... */}
            <button onClick={(evt) => handleClick2("passing an argument...", evt)}>Click Two</button>
        </div>
    );
}

export default Home;