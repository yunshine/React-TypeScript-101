const WeatherReport = (props) => {
    let time = new Date();
    let timeString = time.toTimeString();
    // console.log(new Date(props.weatherData.sys.sunrise));

    // console.log(new Date(props.weatherData.dt * 1000 + (props.weatherData.timezone * 1000)));




    let unix_timestamp = props.weatherData.dt
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    let date = new Date(unix_timestamp * 1000);
    // Hours part from the timestamp
    let hours = date.getHours();
    // Minutes part from the timestamp
    let minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    let seconds = "0" + date.getSeconds();

    // Will display time in 10:30:23 format
    // let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    let formattedTime = hours + ':' + minutes.substr(-2);

    console.log(formattedTime);

    return (
        <div className="WeatherReport">
            <h2>Current Temperature in {props.weatherData.name}: {(props.weatherData.main.temp - 273.15).toFixed(1)} C</h2>
            <h2>Humidity: {props.weatherData.main.humidity}%</h2>
            <img src={`http://openweathermap.org/img/w/${props.weatherData.weather[0].icon}.png`} alt="weather" />
            <h2>{props.weatherData.weather[0].description}</h2>
            <h2>Wind: {(props.weatherData.wind.speed).toFixed(0)} m/s</h2>
            <h2>Current Time: {props.weatherData.dt}</h2>
            <h2>Current TimeString: {timeString}</h2>
            <h2>Sunrise: {props.weatherData.sys.sunrise}</h2>
            <h2>Sunset: {props.weatherData.sys.sunset}</h2>
        </div>
    );
}

export default WeatherReport;