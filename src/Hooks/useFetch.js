import React, { useState, useEffect } from 'react'

function useFetch(url) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {

        const fetchdata = async () => {
            try {
                setLoading(true);
                const res = await fetch(url);
                const json = await res.json();
                setData(json);
            }
            catch (error) {
                setError(error)
            }

        }
        fetchdata();
        setLoading(false);
    }, [url]);
    return { loading, error, data }
}

export default useFetch
