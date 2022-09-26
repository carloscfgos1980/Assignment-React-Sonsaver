// import { useParams } from "react-router-dom";
// import useFetch from "./useFetch";
import { FaTrash } from "react-icons/fa";

const SongList = ({ songs }) => {
    songs.sort((a, b) => {
        let a1 = a.artist.toLowerCase(),
            a2 = b.artist.toLowerCase();

        if (a1 < a2) {
            return -1;
        }
        if (a1 > a2) {
            return 1;
        }
        return 0;
    });
    //const songs = props.songs
    //This parameters method is not working
    //const { id } = useParams();
    //const { data: song, error, isPending } = useFetch('http://localhost:8000/songs/' + id);
    const handleDelete = (id) => {
        console.log("id", id);
        fetch('http://localhost:8000/songs/' + id, {
            method: 'DELETE'
        })
            .then(() => {
                console.log('deleted');
            });
    }

    return (
        <div className="song-list">
            <div className="up-line">
                <ul>
                    <li>Artist:</li>
                    <li>Title:</li>
                    <li>Genre:</li>
                    <li>Rating:</li>

                </ul>
            </div>

            {songs.map(song => (
                <div className="song-preview" key={song.id} >
                    <ul>
                        <li >{song.artist}</li>
                        <li>{song.title}</li>
                        <li >{song.genre}</li>
                        <li >
                            {song.rating}
                            <button className="button-list" onClick={() => handleDelete(song.id)} ><FaTrash /></button>
                        </li>

                    </ul>
                </div>
            ))}
        </div>
    );
}

export default SongList;