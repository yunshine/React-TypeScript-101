import { useState } from 'react';

const SongList = () => {
    const [songs, setSongs] = useState([{ title: "One Life", id: 1 }, { title: "Despacito", id: 2 }, { title: "Snappy", id: 3 }]);

    return (
        <div className="SongList">
            <ul>
                {songs.map(song => {
                    return (<li key={song.id}>{song.title}</li>)
                })}
            </ul>
        </div>
    );
}

export default SongList;