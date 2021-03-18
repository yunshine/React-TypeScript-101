import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: "Favorite Cafe", body: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum", author: "Eunjoo", id: 1 },
        { title: "Comfortable Sneakers", body: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum", author: "Yun", id: 2 },
        { title: "Date Night", body: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum...", author: "Eunjoo", id: 3 }
    ]);

    return (
        <div className="home">
            <BlogList blogs={blogs} />
        </div>
    );
}

export default Home;