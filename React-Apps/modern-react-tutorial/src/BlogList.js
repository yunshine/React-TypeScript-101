import { Link } from "react-router-dom";

const BlogList = (props) => {
    return (
        <div className="blog-list">
            <h1>{props.title}</h1>
            {/* how to map over data; the syntax is a bit different since it uses () instead of {} and there is no return; also, don't forget to add a key... */}

            {props.blogs.map(blog => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                    </Link>
                    <p>Written By: {blog.author}</p>
                    {/* how to delete a blog... */}
                    {/* in the onClick, I'm using an anonymous function so that we can pass an argument... */}
                    {/* the handleDelete function should be in the home component and passed down as a prop because that's where the data is... */}
                    <button button onClick={() => props.handleDelete(blog.id)}>Delete Blog</button>
                </div >
            ))}
        </div >
    );
}

export default BlogList;