import { useState } from "react";
import SongList from "./components/SongsList";

const Home = () => {
    const [songs, setSongs] = useState([
        { id: 1, title: 'One Love', artist: 'Bob Marley', genre: 'reggae', rating: 5 },
    ])

    return (
        <div className="home">
            <SongList songs={songs} />
        </div>
    );
}

export default Home;
