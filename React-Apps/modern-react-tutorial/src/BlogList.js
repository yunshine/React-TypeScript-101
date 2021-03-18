const BlogList = (props) => {
    return (
        <div className="blog-list">
            {/* how to map over data; the syntax is a bit different since it uses () instead of {} and there is no return; also, don't forget to add a key... */}

            {props.blogs.map(blog => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written By: {blog.author}</p>
                </div>
            ))}
        </div>
    );
}

export default BlogList;