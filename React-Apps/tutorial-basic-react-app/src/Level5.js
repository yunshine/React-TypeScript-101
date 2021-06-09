import { useState, useEffect } from 'react';
import TodoList from './TodoList';

const Level5 = () => {
    const [todo, setTodo] = useState("");
    const [count, setCount] = useState(0);
    const [todoList, setTodoList] = useState([]);
    const [showTodoList, setShowTodoList] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        setTodoList([...todoList, todo]);
        setTodo("");
    }

    const countUp = () => {
        setCount(count + 1);
    }

    const countDown = () => {
        setCount(count - 1);
    }

    const countReset = () => {
        setCount(0);
    }

    const showTodos = () => {
        setShowTodoList(true);
    }

    const hideTodos = () => {
        setShowTodoList(false);
    }

    useEffect(() => {
        alert("this page is loading...");
        setCount(count * 5);
    }, [todoList])



    return (
        <div>
            <form onSubmit={e => handleSubmit(e)}>
                <input type="text" value={todo} onChange={e => setTodo(e.target.value)} />
                <button type="submit">submit todo item</button>
            </form>
            <br />

            <div>
                <h2>{count}</h2>
                <button onClick={countUp}>Count Up</button>
                <button onClick={countDown}>Count Down</button>
                <button onClick={countReset}>Reset Count</button>
            </div>
            <br />
            <br />

            <button onClick={showTodos}>Show List of Todos</button>
            <button onClick={hideTodos}>Hide List of Todos</button>
            <br />
            <br />
            <div>
                {showTodoList && <TodoList todoList={todoList} />}
            </div>
        </div>
    )
}

export default Level5;