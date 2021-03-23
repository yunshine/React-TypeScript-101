import { useParams } from "react-router";

const BlogShow = () => {
    // the useParams hook - how to get the id from the url...
    const { id } = useParams();
    return (
        <div className="BlogShow">
            <h2>Blog Details Page... Blog ID: {id}</h2>
        </div>
    );
}

export default BlogShow;