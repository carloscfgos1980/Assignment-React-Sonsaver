const SongList = ({ songs }) => {
    //const songs = props.songs
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
                    <button >delete</button>
                </div>
            ))}
        </div>
    );
}

export default SongList;