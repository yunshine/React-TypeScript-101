import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const Navbar = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    console.log("useContext TEST: ", isLightTheme, theme);

    return (
        <nav style={{ background: theme.ui, color: theme.syntax }}>
            <h1>Hooks Tutorial App</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}

export default Navbar;