import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();

        console.log("there was a render that occurred, and useEffect ran...");
        setTimeout(() => {
            fetch(url, { signal: abortController.signal })
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
                    console.log(data);
                })
                .catch(err => {
                    if (err.name === 'AbortError') {
                        console.log("This fetch request has been aborted by abortController...");
                    } else {
                        setIsPending(false);
                        setError(err.message);
                    }
                })
        }, 1000);
        return () => abortController.abort();
    }, [url]);

    return { data, isPending, error };
}

export default useFetch;
