import { useContext, useEffect, useState } from 'react';
import { CityContext } from '../contexts/CityContext';

const WeatherDetails = () => {
    const { city } = useContext(CityContext);
    const [isLoading, setIsLoading] = useState(false);

    // Async & Await
    // ==========================================================================
    // first, create  a function that contains all of our async code, the code that goes out to get data from somewhere. Because we've used the keyword 'async', it is non-blocking...

    // whenever we use the async key word, the function will return a PROMISE...
    const getTodosWithAsyncAwait = async () => {
        // once the fetch Promise below is resolved, JavaScript will then assign the data as the value to 'response'... this data will be a response object...
        const response = await fetch('json/todos.json');  // using the keyword "await" will make it so that this fetch returns a promise...
        console.log("The 'response' variable from getTodosWithAsyncAwait: ", response);

        if (response.status !== 200) {
            // when we throw a new Error in an async function, the returned Promise is 'rejected', not 'resolved'...
            throw new Error('new Error thrown...');
        }

        const data = await response.json();
        console.log("The 'data' variable from getTodosWithAsyncAwait: ", data);

        return data;
    };

    useEffect(() => {
        console.log("use effecting...");
        if (city.length) {
            setIsLoading(true);
            setTimeout(() => {
                getTodosWithAsyncAwait()
                    .then(data => console.log("Resolved data from getTodosWithAsyncAwait: ", data))
                    .catch(err => console.log("Err from getTodosWithAsyncAwait: ", err.message));
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