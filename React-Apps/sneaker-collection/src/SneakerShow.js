import useFetch from './hooks/useFetch';
import { useParams, useHistory } from "react-router-dom";

const SneakerShow = () => {
    const history = useHistory();
    const { id } = useParams();

    const { data: sneaker, isPending, error } = useFetch('http://localhost:8080/sneakers/' + id);

    const handleClick = () => {
        fetch('http://localhost:8080/sneakers/' + id, {
            method: 'DELETE'
        }).then(() => {
            console.log("sneaker deleted...");
            history.push('/');
        });

    }

    return (
        <div className="SneakerShow">
            <p>this is the sneakershow component for sneaker id number {id}</p>
            {isPending && <h1>Loading...</h1>}
            {error && <h1>{error.message}</h1>}
            {sneaker && <h2>{sneaker.name}</h2>}
            {sneaker && <img src={sneaker.photo} className="SneakerPhoto" alt={`${sneaker.brand} ${sneaker.name}`} />}
            <button onClick={handleClick}>Delete This Sneaker</button>
        </div>
    );
}

export default SneakerShow;