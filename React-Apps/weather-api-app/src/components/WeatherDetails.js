import { useContext } from 'react';
import { CityContext } from '../contexts/CityContext';

const WeatherDetails = () => {
    const { city } = useContext(CityContext);
    return (
        <div className="WeatherDetails">
            weather details component {city}
        </div>
    );
}

export default WeatherDetails;