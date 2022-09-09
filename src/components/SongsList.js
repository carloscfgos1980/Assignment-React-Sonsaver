// import { useParams } from "react-router-dom";
// import useFetch from "./useFetch";

const SongList = ({ songs }) => {
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
                <span>Song:</span>
                <span>Artist:</span>
                <span>Genre:</span>
                <span>Rating:</span>
            </div>
            {songs.map(song => (
                <div className="song-preview" key={song.id} >
                    <p>{song.title}</p>
                    <p>{song.artist}</p>
                    <p> {song.genre}</p>
                    <p>{song.rating}</p>
                    <button onClick={() => handleDelete(song.id)}>delete</button>
                </div>
            ))}
        </div>
    );
}

export default SongList;