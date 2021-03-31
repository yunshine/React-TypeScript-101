import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
    const [brand, setBrand] = useState('');
    const [name, setName] = useState('');
    const [colorway, setColorway] = useState('');
    const [photo, setPhoto] = useState('');
    // isPending used for dynamic text on form submit button...
    const [isPending, setIsPending] = useState(false);
    // first, to use the useHistory hook, you need to invoke the hook...
    const history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();
        const sneaker = { brand, name, colorway, photo };

        setIsPending(true);

        fetch('http://localhost:8080/sneakers', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(sneaker)
        }).then(() => {
            console.log("new sneaker added...");
            setIsPending(false);
            history.push('/')
        });
    }

    return (
        <div className="Create">
            <h2>Add a new sneaker...</h2>

            <form onSubmit={handleSubmit}>
                <label>Sneaker Brand</label>
                <input
                    type="text"
                    required
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                />
                <label>Sneaker Name</label>
                <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label>Sneaker Colorway</label>
                <input
                    type="text"
                    required
                    value={colorway}
                    onChange={(e) => setColorway(e.target.value)}
                />
                <label>Sneaker Photo</label>
                <input
                    type="text"
                    required
                    value={photo}
                    onChange={(e) => setPhoto(e.target.value)}
                />

                {!isPending && <button>Submit Sneaker</button>}
                {isPending && <button disabled>Adding Sneaker...</button>}
            </form>
        </div>
    );
}

export default Create;