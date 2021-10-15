import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const BookList = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    console.log("useContext TEST from BookList: ", isLightTheme, theme);

    return (
        <div className="BookList" style={{ background: theme.bg, color: theme.syntax }}>
            <ul>
                <li style={{ background: theme.ui }}>The Bible</li>
                <li style={{ background: theme.ui }}>The Alchemist</li>
                <li style={{ background: theme.ui }}>A Game of Thrones</li>
            </ul>
        </div>
    );
}

export default BookList;