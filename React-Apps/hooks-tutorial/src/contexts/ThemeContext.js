import { createContext } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
    const themeState = {
        isLightTheme: true,
        light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
        dark: { syntax: "#ddd", ui: "#333", bg: "#555" }
    };

    const toggleTheme = () => {
        themeState.isLightTheme = !themeState.isLightTheme
    }

    return (
        <ThemeContext.Provider value={{ ...themeState, toggleTheme: toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeContextProvider;