import { useState } from 'react';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

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
                <textarea
                    required
                ></textarea>

                <label>Blog Author: </label>
                <select>
                    <option value="Eunjoo">Eunjoo</option>
                    <option value="Yun">Yun</option>
                </select>
                <button>Submit Blog</button>
            </form>
        </div>
    );
}

export default Create;