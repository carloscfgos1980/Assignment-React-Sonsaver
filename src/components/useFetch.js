import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    /*
This is condiction is to catch an error when do sucessfully fetching but there is an error at the end point of the REST API
               if (!res.ok) {
                    throw Error('could not fetching');
                }
*/
    useEffect(() => {
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw Error('could not fetching');
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
            });
    }, [url]);
    return { data, isPending, error };
}

export default useFetch;