import { useState, useEffect } from 'react';

const Practice = () => {
    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        setTodoList([...todoList, todo]);
        setTodo("");
    }

    useEffect(() => {
        alert("useEffecting...");
    }, []);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={todo} onChange={e => setTodo(e.target.value)} />
                <button>Submit</button>
            </form>

            <form>
                <input type="text" />
            </form>

            <div>
                {
                    todoList.map((todo, i) => {
                        return <h2>{i + 1}) {todo}</h2>
                    })
                }
            </div>
        </div>
    );
}

export default Practice;