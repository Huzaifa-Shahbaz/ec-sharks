import React from 'react';
import ListItem from './ListItem';

const BlogsTable = ({ blogsData, errMsg, loading, setSelectedBlog, toggleModal, toggleConfirmationModal, setEditMode, setSelectedBlogId }) => {
    const handleDeleteClick = (id) => {
        toggleConfirmationModal()
        setSelectedBlogId(id)
    }
    const handleEditClick = async (blog) => {
        toggleModal()
        setSelectedBlog(blog)
        setEditMode(true)
    }

    return (
        <div className="block block-rounded blogs-table">
            <div className="block-header block-header-default justify-content-end">
                <button onClick={() => toggleModal()} className='btn btn-secondary add-new-btn'>Add New</button>
            </div>
            <div className="block-content block-content-full overflow-x-auto table-container">
                <table className="table table-bordered table-striped table-vcenter js-dataTable-full">
                    <thead>
                        <tr>
                            <th className="text-center"></th>
                            <th>Title</th>
                            <th className="d-sm-table-cell">Thumbnail</th>
                            <th className="d-sm-table-cell" style={{ width: '30%' }}>Short Description</th>
                            <th className="d-sm-table-cell" style={{ width: '11%' }}>Author</th>
                            <th className="d-sm-table-cell">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(!blogsData || blogsData.length === 0) && <tr><td colSpan="6" className="text-center">No Blogs Available</td></tr>}
                        {loading ?
                            <tr><td colSpan="6" className="text-center">Loading....</td></tr>
                            :
                            blogsData?.map((blog, index) => {
                                return (
                                    <ListItem
                                        key={index}
                                        item={blog}
                                        handleDelete={handleDeleteClick}
                                        // deleteBlog={deleteBlog}
                                        editBlog={handleEditClick}
                                    />
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BlogsTable;