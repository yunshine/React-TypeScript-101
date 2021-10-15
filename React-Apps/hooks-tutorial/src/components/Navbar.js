import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const Navbar = () => {
    const theme = useContext(ThemeContext);
    console.log("useContext TEST: ", theme, theme.light.syntax);

    return (
        <nav>
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