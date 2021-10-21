// An older, but different, way of consuming context vs. what is in BookList.js...

// import { useContext } from 'react'; => different syntax than BookList.js
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

// class Navbar extends Component {
const Navbar = () => {
    // render() {
    return (
        // two contexts consumed in this component using ThemeContext.Consumer...
        <AuthContext.Consumer>{(authContext) => (
            <ThemeContext.Consumer>{(themeContext) => {
                // const { isLightTheme, light, dark } = useContext(ThemeContext); => different syntax than BookList.js
                const { isLightTheme, light, dark } = themeContext;
                const theme = isLightTheme ? light : dark;
                const { isAuthenticated, toggleAuth } = authContext;

                return (
                    <nav style={{ background: theme.ui, color: theme.syntax }}>
                        <h1>Hooks Tutorial App</h1>
                        <div onClick={toggleAuth} style={{ cursor: "pointer" }}>
                            {isAuthenticated ? "Logged In" : "Logged Out"}
                        </div>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </nav>
                )
            }}</ThemeContext.Consumer>
        )}</AuthContext.Consumer>
    );
    // };
}

export default Navbar;