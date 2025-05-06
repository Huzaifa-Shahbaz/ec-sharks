import React from 'react';
import { Link } from 'react-router-dom';
import NoImage from '../assets/images/no_image_placeholder.png';


const ListItem = ({ key, item, handleDelete, editBlog }) => {

    const thumbImageSrc = item?.thumbImageUrl && item.thumbImageUrl.startsWith('http') ? item.thumbImageUrl : NoImage

    return (
        <tr key={key}>
            <td className="text-center">1</td>
            <td className="fw-semibold title">
                <p>{item.title}</p>
            </td>
            <td className="d-sm-table-cell">
                <figure className='blog-thumbnail'>
                    <img src={thumbImageSrc} alt="" loading='lazy' />
                </figure>
            </td>
            <td className="d-sm-table-cell short-description"> 
                <p>{item.shortDescription} </p>
            </td>
            <td className="d-sm-table-cell"> {item.author} </td>
            <td className="d-sm-table-cell">
                <div className='action-buttons'>
                    <Link to={`/dashboard/blog-details/${item._id}`} className="btn btn-sm btn-underline">View Details</Link>
                    <div className='buttons-group'>
                        <button onClick={()=> handleDelete(item._id)} type="button" className="btn btn-sm btn-secondary delete-btn">Delete</button>
                        <button onClick={()=> editBlog(item)} type="button" className="btn btn-sm btn-secondary edit-btn">Edit</button>
                    </div>
                </div>
            </td>
        </tr>
    );
};

export default ListItem;