import { useEffect, useState } from "react";
import Blog from "../../Blog/Blog";

const Blogs = ({handleAddtoBookMark, handleMarkAsRead}) => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {

        fetch('./public/blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))

    }, [])

    return (
        <div className="w-[59%]">

            {
                blogs.map(blog => <Blog key={blog.id} blog={blog} handleAddtoBookMark = {handleAddtoBookMark} handleMarkAsRead={handleMarkAsRead}></Blog>)
            }
        </div>
    )
}

export default Blogs;
