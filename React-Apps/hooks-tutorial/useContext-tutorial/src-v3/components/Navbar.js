import { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const Navbar = () => {
    const { books } = useContext(BookContext);

    return (
        <div className="Navbar">
            <h1>My Books</h1>
            <p>You currently have {books.length} books...</p>
        </div>
    );
}

export default Navbar;
