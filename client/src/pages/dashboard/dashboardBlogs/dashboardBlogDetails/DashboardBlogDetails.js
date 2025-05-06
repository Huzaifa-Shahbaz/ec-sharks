import React, { useEffect } from 'react';
import DashboardContentHeading from '../../../../components/DashboardContentHeading';
import { useParams } from 'react-router-dom';
import useApi from '../../../../global/hooks/useApi';
import DashboardLayout from '../../../../dashboardLayout';
import NoImage from '../../../../assets/images/no_image_placeholder.png';


const DashboardBlogDetails = () => {
    const { data: blogDetails, loading, getData: fetchBlogDetails } = useApi();
    const { blogId } = useParams();
    const imageSrc = blogDetails?.imageUrl && blogDetails.imageUrl.startsWith('http') ? blogDetails.imageUrl : NoImage
    const thumbImageSrc = blogDetails?.thumbImageUrl && blogDetails.thumbImageUrl?.startsWith('http') ? blogDetails.thumbImageUrl : NoImage

    useEffect(() => {
        fetchBlogDetails(`/api/blogs/${blogId}`)
    }, [blogId])

    return (
        <DashboardLayout>
            <DashboardContentHeading
                heading={blogDetails?.title ?? 'Blog Details'}
                subHeading={''}
            />
            {loading && <p>Loading details...</p>}
            <div className='mb-3 content-section'>
                <h4 className='mb-2 heading'>Short Description:</h4>
                <p className='description'>{blogDetails?.shortDescription}</p>
            </div>
            <hr />
            <div className='mb-3 content-section'>
                <h4 className='mb-2 heading'>Long Description:</h4>
                <div dangerouslySetInnerHTML={{ __html: blogDetails?.longDescription }} />
            </div>
            <hr />
            <div className='mb-3 content-section'>
                <h4 className='mb-2 heading'>Meta Title:</h4>
                <p className='description'>{blogDetails?.metaTitle}</p>
            </div>
            <hr />
            <div className='mb-3 content-section'>
                <h4 className='mb-2 heading'>Meta Keyword:</h4>
                <p className='description'>{blogDetails?.metaKeyword}</p>
            </div>
            <hr />
            <div className='mb-3 content-section'>
                <h4 className='mb-2 heading'>Meta Description:</h4>
                <p className='description'>{blogDetails?.metaDescription}</p>
            </div>
            <hr />
            <div className='mb-3 content-section'>
                <h4 className='mb-2 heading'>Thumbnail:</h4>
                <div class="row items-push">
                    <div class="col-md-4 options-container fx-item-zoom-in">
                        <div class="options-container">
                            <img class="img-fluid options-item" src={thumbImageSrc} alt="" loading='lazy' />
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className='mb-3 content-section'>
                <h4 className='mb-2 heading'>Image:</h4>
                <div class="row items-push">
                    <div class="col-md-4 options-container fx-item-zoom-in">
                        <div class="options-container">
                            <img class="img-fluid options-item" src={imageSrc} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className='mb-3 content-section'>
                <h4 className='mb-2 heading'>Author:</h4>
                <p className='description'>{blogDetails?.author}</p>
            </div>
            <hr />
            <div className='mb-3 content-section'>
                <h4 className='mb-2 heading'>Created Date:</h4>
                <p className='description'>{blogDetails?.createdDate}</p>
            </div>
            <hr />
            <div className='mb-3 content-section'>
                <h4 className='mb-2 heading'>Active:</h4>
                <p className='description'>{blogDetails?.isActive}</p>
            </div>
            <hr />
            <div className='mb-3 content-section'>
                <h4 className='mb-2 heading'>Schema:</h4>
                <p className='description'>{blogDetails?.schema}</p>
            </div>
            <hr />
            <div className='mb-3 content-section'>
                <h4 className='mb-2 heading'>tag:</h4>
                <p className='description'>{blogDetails?.tag}</p>
            </div>
            <hr />

        </DashboardLayout>

    );
};

export default DashboardBlogDetails;