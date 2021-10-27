import { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookDetails = (props) => {
    const { removeBook } = useContext(BookContext);

    return (
        <li onClick={() => removeBook(props.book.title)} style={{ cursor: 'pointer' }}>
            <div className="title">{props.book.title}</div>
            <div className="author">{props.book.author}</div>
        </li>
    );
}

export default BookDetails;
