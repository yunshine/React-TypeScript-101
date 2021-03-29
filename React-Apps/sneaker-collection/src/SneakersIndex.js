import { Link } from "react-router-dom";

const SneakersIndex = (props) => {
    return (
        <div className="SneakersIndex">
            This is the SneakersIndex component...

            {props.sneakers.map(sneaker => (
                <div className="HomeCard" key={sneaker.id}>
                    <Link to={`sneakers/${sneaker.id}`}>
                        <h2>{sneaker.brand} {sneaker.name}</h2>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default SneakersIndex;
