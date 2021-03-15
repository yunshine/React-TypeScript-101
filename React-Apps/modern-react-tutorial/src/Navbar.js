// shortcut for creating a new  stateless function component template: sfc...
function Navbar() {
    return (
        <nav className="navbar">
            <h1>Yun's React Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: "8px"
                }}>New Post</a>
            </div>
        </nav>
    );
}

export default Navbar;