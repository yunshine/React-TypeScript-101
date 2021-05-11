import { useState, useRef, useEffect } from 'react';
import AuthService from '../Services/AuthService';
import Message from './Message';

const Register = (props) => {
    const [user, setUser] = useState({ username: '', password: '' });
    const [message, setMessage] = useState(null);
    let timerID = useRef(null);

    useEffect(() => {
        return () => {
            clearTimeout(timerID);
        };
    }, []);

    const resetForm = () => {
        console.log("resetForm function called...");
    }

    const onSubmit = e => {
        e.preventDefault();
        console.log("form submitted...");
        AuthService.register(user).then(data => {
            console.log("Data from Register.js: ", data);
            const { message } = data;
            setMessage(message);
            resetForm();
            if (!message.msgError) {
                timerID = setTimeout(() => {
                    props.history.push('/login');
                }, 2000);
            }
        });

    }

    const onChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
        console.log("from onChange: ", user);
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <h3>Please Sign In</h3>
                <label htmlFor="username" className="sr-only">Username: </label>
                <input type="text"
                    name="username"
                    onChange={onChange}
                    className="form-control"
                    placeholder="Enter Username" />
                <label htmlFor="password" className="sr-only">Password: </label>
                <input type="password"
                    name="password"
                    onChange={onChange}
                    className="form-control"
                    placeholder="Enter Password" />
                <button className="btn btn-lg btn-primary btn-block"
                    type="submit">Log In</button>
            </form>

            {message ? <Message message={message} /> : null}
        </div>
    );
}

export default Register;
