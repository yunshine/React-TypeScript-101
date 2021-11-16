import { useState, useContext } from 'react';
import { CityContext } from '../contexts/CityContext';

const CityForm = () => {
    const { dispatch } = useContext(CityContext);
    const [city, setCity] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: "CHANGE_CITY", city: city });
        setCity("");
    }

    return (
        <form className="CityForm" onSubmit={handleSubmit}>
            <h1>Weather App</h1>
            <input type="text" placeholder="city name" value={city}
                onChange={(e) => setCity(e.target.value)} required />
            <input type="submit" value="submit" />
        </form>
    );
}

export default CityForm;
