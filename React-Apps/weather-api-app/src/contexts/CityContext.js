import { createContext, useReducer } from 'react';
import { cityReducer } from '../reducers/cityReducer';

export const CityContext = createContext();

const CityContextProvider = ({ children }) => {
    const [city, dispatch] = useReducer(cityReducer, "testing: city text here...");

    return (
        <CityContext.Provider value={{ city, dispatch }}>
            {children}
        </CityContext.Provider>
    );

}

export default CityContextProvider;
