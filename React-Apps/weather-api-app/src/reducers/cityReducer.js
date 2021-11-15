export const cityReducer = (state, action) => {
    switch (action.type) {
        case "ADD_CITY":
            return state;
        // case "REMOVE_BOOK":
        //     return state.filter(book => book.title !== action.title);
        default:
            return state;
    }
}
