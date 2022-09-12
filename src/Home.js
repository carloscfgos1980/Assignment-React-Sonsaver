
import Inputs from "./components/Inputs";
import SongList from "./components/SongsList";
import useFetch from "./components/useFetch";

const Home = () => {
    const { data: songs, isPending, error } = useFetch('http://localhost:8000/songs');

    //const orderSongs = songs.sort((a, b) => a.artist - b.artist);
    //console.log("songs", songs);
    //console.log("order songs", orderSongs);

    // I use {} to wrap the return like this:
    // {songs && <SongList songs={songs} handleDelete={handleDelete} />}
    // This prevent an erro during mapping cos fetching take some time, like this, it waits to fetch and then mapping
    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            <Inputs />
            {songs && <SongList songs={
                songs.sort((a, b) => a.artist - b.artist)
            } />}
        </div>
    );
}

export default Home;
