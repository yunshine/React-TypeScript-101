import { useState } from 'react';

const NewSongForm = (props) => {
    const [songName, setSongName] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(songName);
        props.addSong(songName);
        setSongName("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="song-name">Song Name:</label>
            <input type="text" value={songName} id="song-name" onChange={(e) => setSongName(e.target.value)} required />
            <input type="submit" value="Add Song" />
        </form>
    );
}

export default NewSongForm;