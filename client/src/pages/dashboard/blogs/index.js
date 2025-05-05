import React, { lazy, Suspense, useEffect, useState } from 'react';
import DashboardLayout from '../../../global/dashboardLayout';
import DashboardContentHeading from '../../../global/customComponents/DashboardContentHeading';
import ConfirmationModal from '../../../global/customComponents/ConfirmationModal';
import BlogsTable from './BlogsTable';
import useApi from '../../../global/hooks/useApi';
import axios from 'axios';
import LoadingScreen from '../../../global/components/LoadingScreen';
const AddUpdateBlogModal = lazy(()=> import('./AddUpdateBlogModal'))


const DashboardBlogs = () => {

    const { data: blogsData, loading, errorMsg: fetchingErr, getData: fetchBlogs } = useApi();
    const { data: postResponse, errorMsg: postingErr, postData: postBlog } = useApi();
    const { data: updateResponse, errorMsg: updatingErr, updateData: updateBlog } = useApi();
    const { data: deleteResponse, errorMsg: deletingErr, deleteData: deleteBlog } = useApi();

    const [showModal, setShowModal] = useState(false)
    const [showConfirmationModal, setShowConfirmationModal] = useState(false)
    const [selectedBlogId, setSelectedBlogId] = useState(null)
    const [editMode, setEditMode] = useState(false)
    const [selectedBlog, setSelectedBlog] = useState(null);
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        if (updateResponse?.status === 200) {
            toggleModal()
            setSelectedBlog(null)
            setEditMode(false)
        }
        if (postResponse?.status === 200) {
            toggleModal()
        }
        if (deleteResponse?.status === 200) {
            toggleConfirmationModal()
        }
    }, [postResponse, updateResponse])

    useEffect(() => {
        fetchBlogs('/api/blogs/userBlogs')
    }, [deleteResponse, postResponse, updateResponse])

    // useEffect(() => {
    //     fetchingErr && setErrMsg(fetchingErr)
    //     postingErr && setErrMsg(postingErr)
    //     updatingErr && setErrMsg(updatingErr)
    //     deletingErr && setErrMsg(deletingErr)
    //     imagesUploadErr && setErrMsg(imagesUploadErr)
    // }, [fetchingErr, postingErr, updatingErr, deletingErr, imagesUploadErr])

    const toggleModal = () => {
        setShowModal(!showModal)
    }
    const toggleConfirmationModal = () => setShowConfirmationModal(!showConfirmationModal)

    const handleAddBlog = async(blogDetails) => {
        const blog = { ...blogDetails }
        const isImageUrlFile = blog.imageUrl[0] instanceof File;
        const isThumbImageUrlFile = blog.thumbImageUrl[0] instanceof File;

        let formData = new FormData();
        if (isImageUrlFile || isThumbImageUrlFile) {
            formData.append('imageUrl', blog.imageUrl[0]);
            formData.append('thumbImageUrl', blog.thumbImageUrl[0]);
        }

        const response = await axios.post('http://localhost:8001/api/upload', formData)
        const imagesResponse = response.data;
        const blogData = {
            ... blog,
            imageUrl: imagesResponse?.image_url,
            thumbImageUrl: imagesResponse?.thumbImage_url
        }
        postBlog('/api/blogs', blogData)
    }

    const handleUpdateBlog = async (blogDetails) => {
        let blog = blogDetails
        const isImageUrlFile = blog.imageUrl[0] instanceof File;
        const isThumbImageUrlFile = blog.thumbImageUrl[0] instanceof File;
        const isImageUrlValid = typeof blog.imageUrl === "string";
        const isThumbImageUrlValid = typeof blog.thumbImageUrl === "string";

        if (!blog.imageUrl || Object.keys(blog.imageUrl).length === 0) {
            blog.imageUrl = selectedBlog?.imageUrl ? selectedBlog.imageUrl : blogDetails.imageUrl[0];
        }
        if (!blog.thumbImageUrl || Object.keys(blog.thumbImageUrl).length === 0) {
            blog.thumbImageUrl = selectedBlog?.thumbImageUrl ? selectedBlog.thumbImageUrl : blogDetails.thumbImageUrl[0];
        }
        if(!isImageUrlValid || !isThumbImageUrlValid && (isImageUrlFile || isThumbImageUrlFile)) {
            let formData = new FormData();
            if(blog.imageUrl[0] !== null ) {
                formData.append('imageUrl', blog.imageUrl[0])
            }
            if(blog.thumbImageUrl[0]) {
                formData.append('thumbImageUrl', blog.thumbImageUrl[0]);
            }
            const response = await axios.post('http://localhost:8001/api/upload', formData)
            const imagesResponse = response.data;
            const updatedData = {
                ...blog, 
                imageUrl: imagesResponse?.image_url !== "" ? imagesResponse?.image_url : selectedBlog.imageUrl,
                thumbImageUrl: (imagesResponse!= null && imagesResponse?.thumbImage_url !== "") ? imagesResponse?.thumbImage_url : selectedBlog?.thumbImageUrl
            }
            updateBlog(`/api/blogs/${updatedData._id}`, updatedData)
        } else {
            updateBlog(`/api/blogs/${blog._id}`, blog)
        }
    }

    const handleDeleteBlog = async (id) => {
        deleteBlog(`/api/blogs/${id}`)
        // if (deleteResponse?.status === 200) {
        //     setShowModal(false)
        //     toggleConfirmationModal()
        // }

    }

    return (
        <DashboardLayout>
            <Suspense fallback={<LoadingScreen />}>
                {showModal &&
                    <AddUpdateBlogModal
                        toggleModal={toggleModal}
                        handleAddBlog={handleAddBlog}
                        handleUpdateBlog={handleUpdateBlog}
                        selectedBlog={selectedBlog}
                        setSelectedBlog={setSelectedBlog}
                        editMode={editMode}
                        setEditMode={setEditMode}
                        errMsg={errMsg}
                    />
                }
            </Suspense>
            {showConfirmationModal && 
                <ConfirmationModal 
                    toggleConfirmationModal={toggleConfirmationModal}
                    blogId={selectedBlogId}
                    setSelectedBlogId={setSelectedBlogId}
                    deleteBlog={handleDeleteBlog}
                />
            }
            <DashboardContentHeading
                heading={'Blogs'}
                subHeading={''}
            />
            <BlogsTable
                blogsData={blogsData}
                loading={loading}
                errMsg={errMsg}
                toggleModal={toggleModal}
                toggleConfirmationModal={toggleConfirmationModal}
                setEditMode={setEditMode}
                // deleteBlog={handleDeleteBlog}
                setSelectedBlog={setSelectedBlog}
                selectedBlog={selectedBlog}
                setSelectedBlogId={setSelectedBlogId}
            />
        </DashboardLayout>
    );
};

export default DashboardBlogs;
