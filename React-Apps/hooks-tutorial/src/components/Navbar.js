// An older, but different, way of consuming context vs. what is in BookList.js...

// import { useContext } from 'react'; => different syntax than BookList.js
import { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

// class Navbar extends Component {
const Navbar = () => {
    // render() {
    return (
        // context consumed in this component using ThemeContext.Consumer...
        <ThemeContext.Consumer>{(context) => {
            // const { isLightTheme, light, dark } = useContext(ThemeContext); => different syntax than BookList.js
            const { isLightTheme, light, dark } = context;
            const theme = isLightTheme ? light : dark;
            return (
                <nav style={{ background: theme.ui, color: theme.syntax }}>
                    <h1>Hooks Tutorial App</h1>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            )
        }}</ThemeContext.Consumer>
    );
    // };
}

export default Navbar;