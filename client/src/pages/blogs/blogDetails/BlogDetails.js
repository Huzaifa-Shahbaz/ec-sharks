import React, { useEffect } from 'react';
import useApi from '../../../global/hooks/useApi';
import { Helmet } from "react-helmet-async";
import { Link, useParams } from 'react-router-dom';
import NoImage from '../../../assets/images/no_image_placeholder.png';


const BlogDetails = () => {

    const { data: blogsData, errorMsg: fetchingErr, getData: fetchBlogs } = useApi();
    const { data: blogDetails, loading, getData: fetchBlogDetails } = useApi();

    const { blogId } = useParams();
    const imageSrc = blogDetails?.imageUrl && blogDetails.imageUrl.startsWith('http') ? blogDetails.imageUrl : NoImage
    const latestBlogs = blogsData?.slice(0, 3);

    useEffect(() => {
        fetchBlogDetails(`/api/blogs/${blogId}`)
        fetchBlogs('/api/blogs')
    }, [blogId])

    return (
        <>
            <Helmet>
                <title>{blogDetails?.metaTitle}</title>
                <meta name="description" content={blogDetails?.metaDescription} />
                <meta name="keywords" content={blogDetails?.metaKeyword} />
            </Helmet>
            <div className='detail-page blog-details'>
                <div className='details-banner'>
                    <img src={imageSrc} loading='lazy' alt='' />
                    <div className='container'>
                        <div className='text'>
                            <h1>{blogDetails?.title}</h1>
                        </div>
                        <p>{blogDetails?.author}</p>
                    </div>
                </div>
                <section className='details-section'>
                    <div className='container'>
                        <div className='content'>
                            <div data-aos="fade-up" className='description'>
                                <h2 className='mb-3'>{blogDetails?.shortDescription}</h2>
                                <div dangerouslySetInnerHTML={{ __html: blogDetails?.longDescription }} />
                            </div>
                        </div>
                        <div className='right-content'>
                            <div className='latest-posts'>
                                <h3>Latest posts</h3>
                                <div className='posts-list'>
                                    {latestBlogs?.map((blog) => {
                                        return (
                                            <Link to={`/blogs/${blog._id}`} className='list-item'>
                                                <figure className='thumbnail'>
                                                    <img src={blog?.thumbImageUrl && blog.thumbImageUrl.startsWith('http') ? blog.thumbImageUrl : NoImage} alt='' />
                                                </figure>
                                                <h4 className='truncate-3'>{blog.shortDescription}</h4>
                                            </Link>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default BlogDetails;