import { createContext } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
    const themeState = {
        isLightTheme: true,
        light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
        dark: { syntax: "#ddd", ui: "#333", bg: "#555" }
    };

    return (
        <ThemeContext.Provider value={{ ...themeState }}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeContextProvider;