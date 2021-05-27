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
        </div>
    );
}

export default Todos;