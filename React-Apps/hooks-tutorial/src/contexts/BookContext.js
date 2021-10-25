import { useState, createContext } from 'react';

export const BookContext = createContext();

const BookContextProvider = ({ children }) => {
    const [books, setBooks] = useState([{ title: "A Game of Thrones", author: "George R. R. Martin", id: 1 }, { title: "The Alchemist", author: "Paulo Coelho", id: 2 }, { title: "The Bible", author: "God", id: 3 }]);

    const addBook = (title, author) => {
        setBooks([...books, { title: title, author: author, id: books.length + 1 }]);
    }

    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id));
    }

    return (
        <BookContext.Provider value={{ books, addBook, removeBook }}>
            {children}
        </BookContext.Provider>
    );

}

export default BookContextProvider;
