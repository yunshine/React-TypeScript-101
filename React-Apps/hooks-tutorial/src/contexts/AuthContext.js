import { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const toggleAuth = () => {
        console.log("before click: ", isAuthenticated);
        setIsAuthenticated(!isAuthenticated);
        console.log("clicked: ", isAuthenticated);
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, toggleAuth }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;