export const bookReducer = (state, action) => {
    switch (action.type) {
        case "ADD_BOOK":
            return [...state, { title: action.book.title, author: action.book.author, id: state.length + 1 }];
        case "REMOVE_BOOK":
            return state.filter(book => book.title !== action.title);
        default:
            return state;
    }
}
