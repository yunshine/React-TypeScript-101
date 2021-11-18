import { useContext, useEffect, useState } from 'react';
import { CityContext } from '../contexts/CityContext';

const WeatherDetails = () => {
    const { city } = useContext(CityContext);
    const [isLoading, setIsLoading] = useState(false);
    const [weatherData, setWeatherData] = useState({});

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
                    .then(data => {
                        console.log("Resolved data from getWeatherData: ", data);
                        setWeatherData(data);
                    })
                    .catch(err => console.log("Err from getWeatherData: ", err.message));
                setIsLoading(false)
            }, 500);
        }
    }, [city]);

    return (
        <div className="WeatherDetails">
            {isLoading && "Loading Weather Data..."}
            {!isLoading && city}
            {!isLoading &&
                <div className="WeatherData">
                    <h2>Current Temperature in {weatherData.name}: {(weatherData.main.temp - 273.15).toFixed(1)} C</h2>
                    <h2>Humidity: {weatherData.main.humidity}%</h2>
                    <img src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt="weather" />
                    <h2>{weatherData.weather[0].description}</h2>
                    <h2>Wind: {(weatherData.wind.speed).toFixed(0)} m/s</h2>
                    {/* <h2>Current Time: {timeConversion(weatherData.dt)}</h2> */}
                    {/* <h2>Sunrise: {timeConversion(weatherData.sys.sunrise)}</h2> */}
                    {/* <h2>Sunset: {timeConversion(weatherData.sys.sunset)}</h2> */}
                </div>
            }
        </div>
    );
}

export default WeatherDetails;