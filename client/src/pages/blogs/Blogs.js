import React, { useEffect } from 'react';
import useApi from '../../global/hooks/useApi';
import SectionHeading from '../../global/customComponents/SectionHeading';
import BlogCard from '../../global/customComponents/BlogCard';
import LoadingSpinner from '../../global/customComponents/LoadingSpinner';

const Blogs = () => {
    const { data: blogsData, loading, errorMsg: fetchingErr, getData: fetchBlogs } = useApi();

    useEffect(() => {
        fetchBlogs('/api/blogs');
    }, []);

    return (
        <div className='mg-top blogs-page'>
            <section className='blogs-section'>
                <div className='container'>
                    <SectionHeading heading={'Blogs Posts'} />

                    {loading && <LoadingSpinner />}

                    {!loading && (fetchingErr || blogsData?.length === 0) && (
                        <div className="not-found">
                            <p>No blogs found.</p>
                        </div>
                    )}
                    {!loading && blogsData?.length > 0 && (
                        <div className='blogs-cards'>
                            {blogsData.map((blog, index) => (
                                <BlogCard key={index} item={blog} />
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Blogs;