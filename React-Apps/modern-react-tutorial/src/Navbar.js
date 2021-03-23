// import 'Link' so that react-router-dom can intercept links and we won't have to refresh and make requests to the server for pages in our app...
import { Link } from 'react-router-dom';

// shortcut for creating a new  stateless function component template: sfc...
function Navbar() {
    return (
        <nav className="navbar">
            <h1>Yun's React Blog</h1>
            <div className="links">
                {/* use 'Link' tags instead of 'a' tags, and use 'to' instead of 'href'... */}
                {/* <a href="/">Home</a>
                <a href="/create" style={{color: "white", backgroundColor: "#f1356d", borderRadius: "8px"}}>New Blog Post</a> */}
                <Link to="/">Home</Link>
                <Link to="/create">New Blog Post</Link>
            </div>
        </nav>
    );
}

export default Navbar;