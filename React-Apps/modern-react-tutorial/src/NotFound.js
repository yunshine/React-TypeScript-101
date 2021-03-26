import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="NotFound">
            <h2>Sorry.</h2>
            <br></br>
            <p>That page cannot be found.</p>
            <br></br>
            <Link to='/'>Back to the Home Page</Link>
        </div>
    );
}

export default NotFound;