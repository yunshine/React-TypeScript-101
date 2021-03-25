const Create = () => {
    return (
        <div className="Create">
            <h2>Create a New Blog Post</h2>
            <form>
                <label>Blog Title</label>
                <input
                    type="text"
                    required
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