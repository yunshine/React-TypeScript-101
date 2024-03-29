import { useState, useEffect } from 'react';
import NewSongForm from './NewSongForm';

const SongList = () => {
    const [songs, setSongs] = useState([{ title: "One Life", id: 1 }, { title: "Despacito", id: 2 }, { title: "Snappy", id: 3 }]);

    const addSong = (title) => {
        setSongs([...songs, { title: title, id: songs.length + 1 }]);
    }

    // the useEffect hook below will run when this component renders AND/OR the state in this component is updated...
    useEffect(() => {
        console.log("useEffect ran...", songs);
    }, [songs])

    return (
        <div className="SongList">
            <ul>
                {songs.map(song => {
                    return (<li key={song.id}>{song.title}</li>)
                })}
            </ul>
            {/* <button onClick={addSong}>Add A New Song</button> */}
            <NewSongForm addSong={addSong} />
        </div>
    );
}

export default SongList;