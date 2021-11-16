import { useContext, useEffect, useState } from 'react';
import { CityContext } from '../contexts/CityContext';

const WeatherDetails = () => {
    const { city } = useContext(CityContext);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        console.log("use effecting...");
        if (city.length) {
            setIsLoading(true);
            setTimeout(() => {
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