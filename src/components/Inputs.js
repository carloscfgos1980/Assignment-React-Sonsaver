import { useState } from "react";

const Inputs = () => {
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [genre, setGenre] = useState('genre');
    const [rating, setRating] = useState('rating');

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, artist, genre, rating };

        console.log(blog);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>artist:</label>
                <input
                    type="text"
                    required
                    value={artist}
                    onChange={(e) => setArtist(e.target.value)}
                />
                <label>genre:</label>
                <select
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                >   <option value="genre">genre</option>
                    <option value="Reggae">Reggae</option>
                    <option value="RockRoll">RockRoll</option>
                    <option value="Cuban alternative">Cuban alternative</option>
                </select>
                <label>rating:</label>
                <select
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                >   <option value="rating">1</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <button>Add Blog</button>
                <p>{title}</p>
                <p>{artist}</p>
                <p>{genre}</p>
                <p>{rating}</p>
            </form>
        </div>
    );
}

export default Inputs;