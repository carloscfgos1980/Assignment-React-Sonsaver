import { useState, useEffect } from "react";
import SongList from "./components/SongsList";

const Home = () => {
    const [songs, setSongs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);


    /*
    This is condiction is to catch an error when do sucessfully fetching but there is an error at the end point of the REST API
                   if (!res.ok) {
                        throw Error('could not fetching');
                    }
    */
    useEffect(() => {
        fetch('http://localhost:8000/songs')
            .then(res => {
                if (!res.ok) {
                    throw Error('could not fetching');
                }
                return res.json();
            })
            .then(data => {
                setSongs(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                setIsPending(false);
                setError(err.message);
            });
    }, []);

    // I use {} to wrap the return like this:
    // {songs && <SongList songs={songs} handleDelete={handleDelete} />}
    // This prevent an erro during mapping cos fetching take some time, like this, it waits to fetch and then mapping
    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {songs && <SongList songs={songs} />}
        </div>
    );
}

export default Home;
