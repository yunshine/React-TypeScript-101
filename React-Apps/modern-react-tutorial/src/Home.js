import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);

    // const [name, setName] = useState("Yun");

    function handleDelete(id) {
        const newBlogs = blogs.filter(blog => id !== blog.id);
        setBlogs(newBlogs);
    }

    // the useEffect hook runs a function at every render of the component such as when it first loads and/or when the state changes...
    // to use useEffect, pass it a function. It will run this function at every render...
    // the second argument of the useEffect hook, called a dependency array, allows you to choose which renders to run this particular useEffect hook...
    useEffect(() => {
        console.log("there was a render that occurred, and useEffect ran...");
        fetch('http://localhost:8080/blogs')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setBlogs(data);
                setIsPending(false);
            })
    }, []);
    // dependency array options: [ ] an empty array like this will run the useEffect hook on only the initial render; [name] useEffect runs when the value for 'name' changes; [blogs] useEffect runs when the value for 'blogs' changes...

    return (
        <div className="home">
            {/* the template is created conditionally if isPending is true... */}
            {isPending && <div>Loading...</div>}
            {/* the template is created conditionally if blogs is not null... */}
            {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />}
            {/* <BlogList blogs={blogs.filter(blog => blog.author === "Eunjoo")} title="Eunjoo's Blogs" /> */}
            {/* <button onClick={() => setName("Eunjoo")}>change name</button> */}
        </div>
    );
}

export default Home;