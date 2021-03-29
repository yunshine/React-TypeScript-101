// import { useState } from 'react';
import useFetch from "./hooks/useFetch";
import SneakersIndex from "./SneakersIndex";

const Home = () => {
    const { data: sneakers, isPending, error } = useFetch('http://localhost:8080/sneakers');

    return (
        <div className="Home">
            <p>This is the Home component...</p>
            {isPending && <h1>Loading...</h1>}
            {error && <h1>{error.message}</h1>}
            {sneakers && <SneakersIndex sneakers={sneakers} />}
        </div>
    );
}

export default Home;