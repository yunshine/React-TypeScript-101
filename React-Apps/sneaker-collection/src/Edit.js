import { useState } from 'react';
import { useParams, useHistory } from "react-router-dom";

const Edit = () => {
    const [brand, setBrand] = useState('');
    const [name, setName] = useState('');
    const [colorway, setColorway] = useState('');
    const [photo, setPhoto] = useState('');
    // isPending used for dynamic text on form submit button...
    const [isPending, setIsPending] = useState(false);
    const { id } = useParams();
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
        <div className="Edit">
            <h2>Edit sneaker...the id is {id}</h2>

            {/* <form onSubmit={handleSubmit}>
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

                {!isPending && <button>Submit Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}
            </form> */}
        </div>
    );
}

export default Edit;