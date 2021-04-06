import { useState } from 'react';

const Home = () => {
    const [city, setCity] = useState('');
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);


    const handleSubmit = (e) => {
        e.preventDefault();

        // let url = ;

        console.log(url);

        fetch(url)
            .then(res => {
                if (!res.ok) {
                    console.log("fetching...");

                    throw Error('There was an error, and data could not be fetched...');
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setIsPending(false);
                setError(null);
                console.log(data);
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log("This fetch request has been aborted by abortController...");
                } else {
                    setIsPending(false);
                    setError(err.message);
                    console.log("there was an error", err);
                }
            });
    }

    return (
        <div className="Home">
            this is the home component...
            <form onSubmit={handleSubmit}>
                <label>City</label>
                {/* how to use forms in React... */}
                <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <h1>{city}</h1>
                <button>submit city</button>
            </form>
        </div>
    );
}

export default Home;