import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Jared() {
    const [todo, setTodo] = useState('');
    const [todoList, setTodoList] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodoList([...todoList, todo]);
        setTodo("");
    }

    return (
        <div className="create">
            <h2>jared</h2>
            <form onSubmit={handleSubmit}>
                <label>New Todo:</label>
                <input
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                />
            </form>

            <button>Add To Do</button>

            <div className="returnTodo">
                {todoList.map(todo => {
                    return <h1> {todo} </h1>
                })}

            </div>

        </div>
    );
}

export default Jared;