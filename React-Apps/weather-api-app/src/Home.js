import { useState } from 'react';

require('dotenv').config();

const Home = () => {
    const [city, setCity] = useState('');
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`;

        console.log(url);

        setTimeout(() => {
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
                        console.log("there was an error...", err);
                    }
                });
        }, 850);
    }

    return (
        <div className="Home">
            <form onSubmit={handleSubmit}>
                <label>City</label>
                <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button>submit city</button>
            </form>
        </div>
    );
}

export default Home;