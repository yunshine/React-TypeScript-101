import { useState } from 'react';

const SongList = () => {
    const [songs, setSongs] = useState([{ title: "One Life", id: 1 }, { title: "Despacito", id: 2 }, { title: "Snappy", id: 3 }]);

    const addSong = () => {
        setSongs([...songs, { title: "testing", id: songs.length + 1 }]);
    }

    return (
        <div className="SongList">
            <ul>
                {songs.map(song => {
                    return (<li key={song.id}>{song.title}</li>)
                })}
            </ul>
            <button onClick={addSong}>Add A New Song</button>
        </div>
    );
}

export default SongList;