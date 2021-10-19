import { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
    const [isLightTheme, setIsLightTheme] = useState(true);

    const themeState = {
        isLightTheme,
        light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
        dark: { syntax: "#ddd", ui: "#333", bg: "#555" }
    };

    const toggleTheme = () => {
        setIsLightTheme(!isLightTheme);
    }

    return (
        <ThemeContext.Provider value={{ ...themeState, toggleTheme: toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeContextProvider;