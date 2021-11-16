export const cityReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_CITY":
            return action.city;
        // case "REMOVE_BOOK":
        //     return state.filter(book => book.title !== action.title);
        default:
            return state;
    }
}
