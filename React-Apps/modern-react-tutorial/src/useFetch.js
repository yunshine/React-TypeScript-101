import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    // the useEffect hook runs a function at every render of the component such as when it first loads and/or when the state changes...
    // to use useEffect, pass it a function. It will run this function at every render...
    // the second argument of the useEffect hook, called a dependency array, allows you to choose which renders to run this particular useEffect hook...
    useEffect(() => {
        console.log("there was a render that occurred, and useEffect ran...");
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw Error('There was an error, and data could not be fetched...');
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                setIsPending(false);
                setError(err.message);
            })
    }, [url]);
    // dependency array options: [ ] an empty array like this will run the useEffect hook on only the initial render; [name] useEffect runs when the value for 'name' changes; [blogs] useEffect runs when the value for 'blogs' changes...

    return { data, isPending, error };
}

export default useFetch;