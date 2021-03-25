import { useState } from 'react';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Eunjoo');

    return (
        <div className="Create">
            <h2>Create a New Blog Post</h2>
            <form>
                <label>Blog Title</label>
                {/* how to use forms in React... */}
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label>Blog Body</label>
                {/* how to use forms in React... */}
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>

                <label>Blog Author: </label>
                {/* how to use forms in React... */}
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Eunjoo">Eunjoo</option>
                    <option value="Yun">Yun</option>
                </select>
                <button>Submit Blog</button>
            </form>
        </div>
    );
}

export default Create;