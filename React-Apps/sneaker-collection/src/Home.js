// import { useState } from 'react';
import useFetch from "./hooks/useFetch";
import SneakersIndex from "./SneakersIndex";

const Home = () => {
    const { data: sneakers, isPending, error } = useFetch('http://localhost:8080/sneakers');

    return (
        <div className="Home">
            {isPending && <h1 className="dynamic-messages">Loading Sneakers...</h1>}
            {error && <h1 className="dynamic-messages">{error.message}</h1>}
            {sneakers && <SneakersIndex sneakers={sneakers} />}
        </div>
    );
}

export default Home;