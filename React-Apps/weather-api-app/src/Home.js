import { useState } from 'react';
import WeatherReport from './WeatherReport';

require('dotenv').config();

const Home = () => {
    const [city, setCity] = useState('');
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setData(null);
        setIsLoading(true);

        setTimeout(() => {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`)
                .then(res => {
                    if (!res.ok) {
                        console.log("fetching...");
                        throw Error('There was an error, and data could not be fetched...');
                    }
                    return res.json();
                })
                .then(data => {
                    setData(data);
                    setIsLoading(false);
                    setError(null);
                    console.log("Data From Fetch: ", data);
                })
                .catch(err => {
                    if (err.name === 'AbortError') {
                        console.log("This fetch request has been aborted by abortController...");
                    } else {
                        setIsLoading(false);
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

            {error && <h2>there was an error; {error.message}</h2>}
            {/* {!isLoading && <h2>isPending is False</h2>} */}
            {isLoading && <h2>Loading weather report...</h2>}
            {data && <WeatherReport weatherData={data} />}

        </div>
    );
}

export default Home;