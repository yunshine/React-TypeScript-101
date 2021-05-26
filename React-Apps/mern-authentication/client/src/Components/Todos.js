import React, { useState, useContext, useEffect } from 'react';
import TodoItem from './TodoItem';
import TodoService from '../Services/TodoService';
import { AuthContext } from '../Context/AuthContext';

const Todos = (props) => {
    const [todo, setTodo] = useState({ name: "" });
    const [todos, setTodos] = useState([]);
    const [message, setMessage] = useState(null);
    const AuthContext = useContext(AuthContext);

    useEffect(() => {
        TodoService.getTodos().then(data => {
            setTodos(data.todos);
        });
    }, []);

    return (

    );
}

export default Todos;