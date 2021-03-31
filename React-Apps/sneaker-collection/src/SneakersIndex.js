import { Link } from "react-router-dom";

const SneakersIndex = (props) => {
    return (
        <div className="SneakersIndex">
            {props.sneakers.map(sneaker => (

                <Link to={`sneakers/${sneaker.id}`} className="SneakersIndex-card" key={sneaker.id}>
                    <img src={sneaker.photo} className="SneakerIndex-card-photo" alt={`${sneaker.brand} ${sneaker.name}`} />
                    <h2>{sneaker.brand} {sneaker.name}</h2>
                    <h4>{sneaker.colorway}</h4>
                </Link>

            ))}
        </div>
    );
}

export default SneakersIndex;
