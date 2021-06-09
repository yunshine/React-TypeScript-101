import { useState } from 'react';
import { Link } from "react-router-dom";

const Level4 = () => {
    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState([]);

    const handleSubmit = e => {
        e.preventDefault();
        // alert("hi");
        setTodoList([...todoList, todo]);
        setTodo("");
    }

    return (
        <div>
            <form onSubmit={e => handleSubmit(e)}>
                <input type="text" value={todo} onChange={e => setTodo(e.target.value)} />
                <button type="submit">submit</button>
            </form>
            <div>
                {todoList.map((item, i) => {
                    return <h3 key={i}>{i + 1}) {item}</h3>
                })}
                <Link to='/level5'>
                    <h2>Link to Level 5</h2>
                </Link>
            </div>
        </div>
    )
}

export default Level4;