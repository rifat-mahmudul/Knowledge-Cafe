import PropTypes from 'prop-types';

const Blog = ({blog, handleAddtoBookMark, handleMarkAsRead}) => {
    const {cover, author, author_img, posted_date, reading_time, hashtags, title,} = blog;
    return (
        <div>

            <div>
                <img className='w-full rounded-lg' src={cover} alt="" />
            </div>

            <div className='flex justify-between items-center mt-4'>
                <div className='flex items-center gap-3'>
                    <img className='h-16' src={author_img} alt="" />
                    <div>
                        <h3 className='text-xl font-bold'>{author}</h3>
                        <p className='text-gray-500'>{posted_date}</p>
                    </div>
                </div>

                <div className='flex items-center gap-2'>
                    <p className='text-gray-500'>{reading_time} read</p>
                    <img onClick={() => handleAddtoBookMark(blog)} className='h-8 cursor-pointer' src="https://img.icons8.com/?size=60&id=59740&format=png" alt="" />
                </div>
            </div>

            <h2 className='font-bold text-4xl mt-3 mb-3'>{title}</h2>

            {
                hashtags.map((hastag, index) => <p className='text-gray-500' key={index}>{hastag}</p>)
            }

            <button onClick={() => handleMarkAsRead(reading_time)} className='text-blue-900 underline font-semibold text-xl mt-3 mb-16'>Mark as read</button>
        </div>
    )
};

Blog.propTypes = {
    blog : PropTypes.object.isRequired
}

export default Blog;
