import { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import { BookDetails } from '../Detailss/BookContext';

const BookList = () => {
    const { books } = useContext(BookContext);

    return books.length ? (

        <div className="BookList">
            <ul>
                {books.map(book => {
                    return (<BookDetails key={book.id} book={book} />)
                })}
            </ul>
        </div>
    ) : (
        <div className="empty">No books. You're free... Enjoy!</div>
    )
}

export default BookList;
