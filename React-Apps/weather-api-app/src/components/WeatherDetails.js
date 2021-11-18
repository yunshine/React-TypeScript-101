import { useContext, useEffect, useState } from 'react';
import { CityContext } from '../contexts/CityContext';

const WeatherDetails = () => {
    const { city } = useContext(CityContext);
    const [isLoading, setIsLoading] = useState(false);

    // Because we've used the keyword 'async', it is non-blocking. And, whenever we use the async key word, the function will return a PROMISE...
    const getWeatherData = async () => {
        // once the fetch Promise below is resolved, JavaScript will then assign the data as the value to 'response'... this data will be a response object...
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`);  // using the keyword "await" will make it so that this fetch returns a promise...
        console.log("The 'response' variable from getTodosWithAsyncAwait: ", response);

        if (response.status !== 200) {
            // when we throw a new Error in an async function, the returned Promise is 'rejected', not 'resolved'...
            throw new Error('new Error thrown...');
        }

        const data = await response.json();
        return data;
    };

    useEffect(() => {
        if (city.length) {
            setIsLoading(true);
            setTimeout(() => {
                getWeatherData()
                    .then(data => console.log("Resolved data from getWeatherData: ", data))
                    .catch(err => console.log("Err from getWeatherData: ", err.message));
                setIsLoading(false)
            }, 3000);
        }
    }, [city]);

    return (
        <div className="WeatherDetails">
            {isLoading && "Loading Weather Data..."}
            {!isLoading && city}
        </div>
    );
}

export default WeatherDetails;