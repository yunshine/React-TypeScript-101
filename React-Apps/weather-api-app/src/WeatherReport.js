const WeatherReport = (props) => {
    return (
        <div className="WeatherReport">
            <h2>Current Temperature in {props.weatherData.name}: {(props.weatherData.main.temp - 273.15).toFixed(1)} C</h2>
            <h2>Humidity: {props.weatherData.main.humidity}%</h2>
            <img src={`http://openweathermap.org/img/w/${props.weatherData.weather[0].icon}.png`} alt="weather" />
            <h2>{props.weatherData.weather[0].description}</h2>
            <h2>Wind: {(props.weatherData.wind.speed).toFixed(0)} m/s</h2>
            <h2>Current Time: {props.weatherData.dt}</h2>
            <h2>Sunrise: {props.weatherData.sys.sunrise}</h2>
            <h2>Sunset: {props.weatherData.sys.sunset}</h2>
        </div>
    );
}

export default WeatherReport;