const TodoList = (props) => {
    return (
        <div>
            {props.todoList.map((item, i) => {
                return <h3 key={i}>{i + 1}) {item}</h3>
            })}
        </div>
    );
}

export default TodoList;