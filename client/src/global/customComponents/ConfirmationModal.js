import React from "react";

const ConfirmationModal = ({blogId, toggleConfirmationModal, deleteBlog, setSelectedBlogId}) => {
    return (
        <div className="modal show blogs-modal">
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                    <div className="block block-rounded shadow-none mb-0">
                        <div className="block-header block-header-default">
                            <h3 className="block-title">Delete Blog</h3>
                        </div>
                        <div className="block-content fs-sm">
                            <p>Are you sure you want to delete this blog !</p>
                        </div>
                        <div className="block-content block-content-full block-content-sm text-end border-top buttons-group">
                            <button onClick={()=> {toggleConfirmationModal(); setSelectedBlogId(null)}} type="button" className="btn btn-alt-secondary"> Close </button>
                            <button onClick={()=> deleteBlog(blogId)} className="btn btn-alt-primary">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;