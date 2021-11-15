const WeatherReport = (props) => {

    function timeConversion(timestamp) {
        let unix_timestamp = timestamp;
        // Create a new JavaScript Date object based on the timestamp
        // multiplied by 1000 so that the argument is in milliseconds, not seconds.
        let date = new Date(unix_timestamp * 1000);
        // Hours part from the timestamp
        let hours = date.getHours();
        // Minutes part from the timestamp
        let minutes = "0" + date.getMinutes();
        // Seconds part from the timestamp
        // let seconds = "0" + date.getSeconds();
        let suffix = "am";
        // Dynamic AM/PM
        if (hours === 12) suffix = "pm";
        if (hours > 12) {
            hours -= 12;
            suffix = "pm";
        }
        // Will display time in 10:30:23 format
        // let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
        let formattedTime = hours + ':' + minutes.substr(-2) + suffix;
        return formattedTime;
    };

    return (
        <div className="WeatherReport">
            <h2>Current Temperature in {props.weatherData.name}: {(props.weatherData.main.temp - 273.15).toFixed(1)} C</h2>
            <h2>Humidity: {props.weatherData.main.humidity}%</h2>
            <img src={`http://openweathermap.org/img/w/${props.weatherData.weather[0].icon}.png`} alt="weather" />
            <h2>{props.weatherData.weather[0].description}</h2>
            <h2>Wind: {(props.weatherData.wind.speed).toFixed(0)} m/s</h2>
            <h2>Current Time: {timeConversion(props.weatherData.dt)}</h2>
            <h2>Sunrise: {timeConversion(props.weatherData.sys.sunrise)}</h2>
            <h2>Sunset: {timeConversion(props.weatherData.sys.sunset)}</h2>
        </div>
    );
}

export default WeatherReport;