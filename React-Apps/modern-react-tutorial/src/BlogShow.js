import { useParams, useHistory } from "react-router-dom";
import useFetch from './useFetch';

const BlogShow = () => {
    const history = useHistory();

    // the useParams hook - how to get the id from the url...
    const { id } = useParams();
    const { data: blog, isPending, error } = useFetch('http://localhost:8080/blogs/' + id);

    const handleClick = () => {

        fetch('http://localhost:8080/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            console.log("blog deleted...");
            history.push('/');
        });
    }

    return (
        <div className="BlogShow">
            {isPending && <div><span className="loading">Loading...</span></div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written By: {blog.author}</p>
                    <h3>{blog.body}</h3>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
    );
}

export default BlogShow;