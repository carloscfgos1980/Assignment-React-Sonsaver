import { useState } from "react";
import SongList from "./components/SongsList";

const Home = () => {
    const [songs, setSongs] = useState([
        { id: 1, title: 'One Love', artist: 'Bob Marley', genre: 'reggae', rating: 5 },
        { id: 2, title: 'Colors', artist: 'Black Pumas', genre: 'rock&roll', rating: 5 },
        { id: 3, title: 'Welcome to JamRock', artist: 'Damian MArley', genre: 'reggae', rating: 5 },
        { id: 4, title: 'Abajo Too', artist: 'Kamankola', genre: 'Cuban alternative', rating: 5 }
    ]);

    const handleDelete = (id) => {
        //console.log('click')
        const newSongs = songs.filter(song => song.id !== id);
        setSongs(newSongs);
    }

    return (
        <div className="home">
            <SongList songs={songs} handleDelete={handleDelete} />
        </div>
    );
}

export default Home;
