import { useParams } from "react-router";
import useFetch from './useFetch';

const BlogShow = () => {
    // the useParams hook - how to get the id from the url...
    const { id } = useParams();
    const { data: blog, isPending, error } = useFetch('http://localhost:8080/blogs/' + id);


    return (
        <div className="BlogShow">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written By: {blog.author}</p>
                    <h3>{blog.body}</h3>
                </article>
            )}
        </div>
    );
}

export default BlogShow;