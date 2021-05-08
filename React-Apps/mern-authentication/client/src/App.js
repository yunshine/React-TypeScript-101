import { useContext } from 'react';
import { AuthContext } from './Context/AuthContext';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Login from './Components/Login';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
    const { user, setUser, isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

    console.log("Auth Info from App.js: ", user, isAuthenticated);

    return (
        <Router>
            <Navbar />
            <Route exact path='/' component={Home} />
            <Route path='/login' component={Login} />
        </Router>
    );
}

export default App;
