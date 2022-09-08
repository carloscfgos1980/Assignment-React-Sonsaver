import { useState, useEffect } from "react";
import SongList from "./components/SongsList";
import useFetch from "./components/useFetch";

const Home = () => {
    const { data: songs, isPending, error } = useFetch('http://localhost:8000/songs')


    /*
    This is condiction is to catch an error when do sucessfully fetching but there is an error at the end point of the REST API
                   if (!res.ok) {
                        throw Error('could not fetching');
                    }
    */

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
