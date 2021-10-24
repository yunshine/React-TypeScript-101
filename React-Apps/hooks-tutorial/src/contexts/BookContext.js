import { useState, useContext } from 'react';

export const BookContext = createContext();

const BookContextProvider = () => {
    const [books, setBooks] = useState([{ title: "A Game of Thrones", author: "George R. R. Martin", id: 1 }, { title: "The Alchemist", author: "Paulo Coelho", id: 2 }, { title: "The Bible", author: "God", id: 3 }]);


}

export default BookContextProvider;
