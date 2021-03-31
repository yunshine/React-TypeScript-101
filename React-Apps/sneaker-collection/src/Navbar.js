import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="Navbar">
            <Link to="/">See All Sneakers</Link>
            <Link to="/sneakers/create">Add a New Sneaker</Link>
        </div>
    );
}

export default Navbar;