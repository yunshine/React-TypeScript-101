import { useContext } from 'react';
import { AuthContext } from './Context/AuthContext';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import Todos from './Components/Todos';
import Admin from './Components/Admin';
import PrivateRoute from './HigherOrderComponents/PrivateRoute';
import UnPrivateRoute from './HigherOrderComponents/UnPrivateRoute';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
    const { user, setUser, isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

    console.log("Auth Info from App.js: ", user, isAuthenticated);

    return (
        <Router>
            <Navbar />
            <Route exact path='/' component={Home} />

            <UnPrivateRoute path='/login' component={Login} />
            <UnPrivateRoute path='/register' component={Register} />

            <PrivateRoute path='/todos' component={Todos} roles={["user", "admin"]} />
            <PrivateRoute Route path='/admin' component={Admin} roles={["admin"]} />
        </Router>
    );
}

export default App;
