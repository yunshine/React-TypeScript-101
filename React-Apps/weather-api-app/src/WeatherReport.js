const WeatherReport = (props) => {
    return (
        <div className="WeatherReport">
            <h2>this is the weather report:</h2>
            <h2>{props.weatherData.weather[0].description}</h2>
            <h2>{(props.weatherData.main.temp - 273.15).toFixed(1)} C</h2>
            <img src="http://openweathermap.org/img/w/10d.png" alt="weather" />
        </div>
    );
}

export default WeatherReport;