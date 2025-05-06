import React from 'react';
import NoImage from '../assets/images/no_image_placeholder.png';
import { Link } from 'react-router-dom';

const BlogCard = ({item}) => {

    const thumbImageSrc = item?.thumbImageUrl && item.thumbImageUrl.startsWith('http') ? item.thumbImageUrl : NoImage

    return (
        <div className='blog-card'>
            <figure className='blog-thumb'>
                <img src={thumbImageSrc} alt='' />
            </figure>
            <div className='card-body'>
                <h3>{item.title}</h3>
            </div>
            <div className='buttons-group'>
                <Link to={`/blogs/${item._id}`} className='btn read-more'>
                    <span>Read More</span>
                    
                </Link>
                <p>{item.author}</p>
            </div>

        </div>
    );
};

export default BlogCard;