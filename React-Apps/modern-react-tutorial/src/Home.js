import { useState } from 'react';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: "Favorite Cafe", body: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum", author: "Eunjoo", id: 1 },
        { title: "Comfortable Sneakers", body: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum", author: "Yun", id: 2 },
        { title: "Date Night", body: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum...", author: "Eunjoo", id: 3 }
    ]);

    return (
        <div className="home">
            {/* how to map over data; the syntax is a bit different since it uses () instead of {} and there is no return; also, don't forget to add a key... */}
            {blogs.map(blog => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written By: {blog.author}</p>
                </div>
            ))}
        </div>
    );
}

export default Home;