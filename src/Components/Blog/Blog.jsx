import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";

const Blog = ({blog,handleAddToBookmarks,handleMarkAsRead}) => {
   const {id,title,cover,author,author_img,reading_time,posted_date,hashtags}=blog;
    return (
        <div className='mb-14'>
            <img className='w-100% rounded-lg' src={cover} alt=''/>
            <div className='flex justify-between mt-5'>
                <div className='flex gap-5'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>

                <div className='flex justify-center items-center gap-2'>
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handleAddToBookmarks(blog)} className='text-xl'><CiBookmark /></button>
                </div>
            </div>
            <h2 className="text-4xl mt-4">{title}</h2>
            <p className='mt-3'>
                {
                    hashtags.map((hash,idx)=><span key={idx}><a href="">{hash}</a></span>)
                }
            </p>
            <button onClick={()=>handleMarkAsRead(reading_time)} className='text-purple-600 font-bold underline'>Mark as read</button>
        </div>
    );
};
Blog.propTypes={
    blog: PropTypes.object.isRequired,
    handleAddToBookmarks:PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
}
export default Blog;