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
                <ul>
                    <li>Song:</li>
                    <li>Artist:</li>
                    <li>Genre:</li>
                    <li>Rating:</li>
                    <li></li>

                </ul>
            </div>
            {songs.map(song => (
                <div className="song-preview" key={song.id} >
                    <ul>
                        <li>{song.title}</li>
                        <li >{song.artist}</li>
                        <li >{song.genre}</li>
                        <li >{song.rating}</li>
                        <li><button onClick={() => handleDelete(song.id)} style={{ left: '1000px' }}>delete</button></li>
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default SongList;