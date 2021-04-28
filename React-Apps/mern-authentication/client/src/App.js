import { useContext } from 'react';
import { AuthContext } from './Context/AuthContext';

function App() {
    const { user, setUser, isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

    console.log("Auth Info from App.js: ", user, isAuthenticated);

    return (
        <div className="App">
            this is the app component...
        </div>
    );
}

export default App;
