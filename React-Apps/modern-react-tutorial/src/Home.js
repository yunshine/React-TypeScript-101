import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: "Favorite Cafe", body: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum", author: "Eunjoo", id: 1 },
        { title: "Comfortable Sneakers", body: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum", author: "Yun", id: 2 },
        { title: "Date Night", body: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum...", author: "Eunjoo", id: 3 }
    ]);

    function handleDelete(id) {
        const newBlogs = blogs.filter(blog => id !== blog.id);
        setBlogs(newBlogs);
    }

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
            {/* <BlogList blogs={blogs.filter(blog => blog.author === "Eunjoo")} title="Eunjoo's Blogs" /> */}
        </div>
    );
}

export default Home;