import { useState, useEffect } from 'react';
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

    // the useEffect hook runs a function at every render of the component such as when it first loads and/or when the state changes...
    // to use useEffect, pass it a function. It will run this function at every render...
    useEffect(() => {
        console.log("there was a render that occurred, and useEffect ran...");
    });

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
            {/* <BlogList blogs={blogs.filter(blog => blog.author === "Eunjoo")} title="Eunjoo's Blogs" /> */}
        </div>
    );
}

export default Home;