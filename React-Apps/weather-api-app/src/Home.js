import { useState } from 'react';

const Home = () => {
    const [city, setCity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
    }

    return (
        <div className="Home">
            this is the home component...
            <form onSubmit={handleSubmit}>
                <label>City</label>
                {/* how to use forms in React... */}
                <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <h1>{city}</h1>
                <button>submit city</button>
            </form>
        </div>
    );
}

export default Home;