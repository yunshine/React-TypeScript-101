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

    const onSubmit = e => {
        e.preventDefault();
        TodoService.postTodo(todo).then(data => {
            const { message } = data;
            resetForm();
            if (!message.msgError) {
                TodoService.getTodos().then(getData => {
                    setTodos(getData.todos);
                    setMessage(message);
                });
            } else if (message.msgBody === "unauthorized") {
                setMessage(message);
                AuthContext.setUser({ username: "", role: "" });
                AuthContext.setIsAuthenticaged(false);
            } else {
                setMessage(message);
            }
        });
    }

    return (
        <div>
            <ul className="list-group">
                {
                    todos.map(todo => {
                        return <TodoItem key={todo_id} todo={todo} />
                    })
                }
            </ul>
            <br />
            <form onSubmit={onSubmit}>
                <label htmlFor="todo">Enter Todo Item</label>
                <input
                    type="text"
                    className="form-control"
                    name="todo"
                    placeholder="Please Enter Todo Item"
                    value={todo.name}
                    onChange={ } />
                <button type="submit" className="btn btn-lg btn-primary btn-block">Submit</button>
            </form>
            {message ? <Message message={message} /> : null}
        </div>
    );
}

export default Todos;