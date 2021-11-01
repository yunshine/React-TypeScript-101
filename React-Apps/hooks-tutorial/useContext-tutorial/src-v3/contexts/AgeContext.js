// example of how to use React Reducers

// context WITHOUT reducer...
// import { useState, createContext } from 'react';

// const AgeContext = createContext();

// const AgeContextProvider = ({ props }) => {
//     const [age, setAge] = useState(43);

//     const addOneToAge = () => setAge(age + 1);

//     const addFiveToAge = () => setAge(age + 5);

//     const addNumToAge = (number) => setAge(age + number);

//     return (
//         <AgeContextProvider value={{ age, addOneToAge, addFiveToAge, addNumToAge }}>
//             {props.children}
//         </AgeContextProvider>
//     );
// }

// export default AgeContextProvider;


// context WITH reducer...
import { createContext, useReducer } from 'react';

const AgeContext = createContext();

const ageReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ONE':
            return state + 1;
        case 'ADD_FIVE':
            return state + 5;
        case 'ADD_NUM':
            return state + action.num;
        default:
            return state;
    }
}
// to use the ageReducer above:
// ie. dispatch({type: 'ADD_ONE}):
// ie. dispatch({type: 'ADD_NUM, num: 9}):

const AgeContextProvider = ({ props }) => {
    const [age, dispatch] = useReducer(ageReducer, 20);

    return (
        <AgeContextProvider value={{ age, dispatch }}>
            {props.children}
        </AgeContextProvider>
    );
}

export default AgeContextProvider;
