import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="Navbar">
            <Link to="/">Home</Link>
            <br></br>
            <Link to="sneakers/abc">Sneakers/abc</Link>
        </div>
    );
}

export default Navbar;