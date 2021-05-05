import { useState, useContext } from 'react';
import AuthService from '../Services/AuthService';
// import Message from './Message';
import { AuthContext } from '../Context/AuthContext';

const Login = (props) => {
    const [user, setUser] = useState({ username: '', password: '' });
    const [message, setMessage] = useState(null);
    const authContext = useContext(AuthContext);

    return (
        
    );
}

export default Login;
