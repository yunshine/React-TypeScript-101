import { Link } from "react-router-dom";

const SneakersIndex = () => {
    return (
        <div className="SneakersIndex">
            <p>This is the SneakersIndex component...</p>
            {/* {sneakers.map(sneaker => (
                <div className="SneakersIndexCard" key={sneaker.id}>
                    <Link to={`/sneakers/${sneaker.id}`}>
                        <h2>{sneaker.brand} {sneaker.name}</h2>
                    </Link>
                </div>
            ))}; */}
        </div>
    );
}

export default SneakersIndex;