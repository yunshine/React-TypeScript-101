import useFetch from './hooks/useFetch';
import { useState, useEffect } from 'react';
import { useParams, useHistory } from "react-router-dom";

const Edit = () => {
    const { id } = useParams();
    const { data: sneaker, isPending, error } = useFetch('http://localhost:8080/sneakers/' + id);

    const [brand, setBrand] = useState('');
    const [name, setName] = useState('');
    const [colorway, setColorway] = useState('');
    const [photo, setPhoto] = useState('');
    // isUpdating used for dynamic text on form submit button...
    const [isUpdating, setIsUpdating] = useState(false);
    const history = useHistory();

    useEffect(() => {
        if (sneaker !== null) {
            console.log("Adding data to form input fields...");
            setBrand(sneaker.brand);
            setName(sneaker.name);
            setColorway(sneaker.colorway);
            setPhoto(sneaker.photo);
        }
    }, [sneaker]);

    const handleSubmit = e => {
        e.preventDefault();
        const sneaker = { brand, name, colorway, photo };

        setIsUpdating(true);

        fetch('http://localhost:8080/sneakers/' + id, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(sneaker)
        }).then(() => {
            console.log("sneaker data updated...");
            setIsUpdating(false);
            history.push('/sneakers/' + id);
        });
    }

    return (
        <div className="Edit">
            <h2>Edit sneaker...the id is {id}</h2>
            {isPending && <h1 className="dynamic-messages">Loading...</h1>}
            {error && <h1 className="dynamic-messages">{error.message}</h1>}

            {sneaker && <form onSubmit={handleSubmit}>
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

                {!isUpdating && <button>Submit Sneaker</button>}
                {isUpdating && <button disabled>Updating Sneaker Data...</button>}
            </form>}
        </div>
    );
}

export default Edit;