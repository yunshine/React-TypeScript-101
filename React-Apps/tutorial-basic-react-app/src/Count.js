import { Link } from "react-router-dom";

const Count = (props) => {
    let text = "REPEAT ".repeat(props.count);
    return (
        <div>
            <h2>{text}</h2>
            <Link to='/level4'>
                <h2>Link to Level 4</h2>
            </Link>
        </div>
    );
}

export default Count;