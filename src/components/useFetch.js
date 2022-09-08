import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    const abortCont = new AbortController();//This is to stop the fetching once is done and prevent errors
    /*
This is condiction is to catch an error when do sucessfully fetching but there is an error at the end point of the REST API
               if (!res.ok) {
                    throw Error('could not fetching');
                }
*/
    useEffect(() => {
        fetch(url, { signal: abortCont.signal })// { signal: abortCont.signal } necessary for abort control
            .then(res => {
                if (!res.ok) {// error coming back from server
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
                // auto catches network / connection error
                setIsPending(false);
                setError(err.message);
            });

        // abort the fetch
        return () => abortCont.abort();
    }, [url]);
    return { data, isPending, error };
}

export default useFetch;