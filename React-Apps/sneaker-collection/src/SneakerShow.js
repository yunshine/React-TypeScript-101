import useFetch from './hooks/useFetch';
import { useParams, useHistory } from "react-router-dom";

const SneakerShow = () => {
    const history = useHistory();
    const { id } = useParams();

    const { data: sneaker, isPending, error } = useFetch('http://localhost:8080/sneakers/' + id);

    const handleDelete = () => {
        fetch('http://localhost:8080/sneakers/' + id, {
            method: 'DELETE'
        }).then(() => {
            console.log("sneaker deleted...");
            history.push('/');
        });
    }

    const handleEdit = () => {
        history.push(`/sneakers/${id}/edit`);
    }

    return (
        <div className="SneakerShow">
            {isPending && <h1 className="dynamic-messages">Loading...</h1>}
            {error && <h1 className="dynamic-messages">{error.message}</h1>}
            {sneaker &&
                <div className="SneakerShowCard">
                    <img src={sneaker.photo} className="SneakerPhoto" alt={`${sneaker.brand} ${sneaker.name}`} />
                    <h2>{sneaker.brand} {sneaker.name}</h2>
                    <h4>{sneaker.colorway}</h4>
                    <button onClick={handleEdit}>Edit This Sneaker</button>
                    <button onClick={handleDelete}>Delete This Sneaker</button>
                </div>
            }
        </div>
    );
}

export default SneakerShow;