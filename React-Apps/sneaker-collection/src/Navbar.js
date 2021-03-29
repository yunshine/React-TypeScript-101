import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="Navbar">
            <Link to="/">Home</Link>
            <br></br>
            <Link to="sneakers/create">Create a Sneaker</Link>
        </div>
    );
}

export default Navbar;