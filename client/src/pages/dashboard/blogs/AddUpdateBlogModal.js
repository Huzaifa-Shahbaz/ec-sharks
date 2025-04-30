import React, { useEffect, useRef, useState } from 'react';
import FormInputField from '../../../global/customComponents/FormInputField';
import { useForm } from 'react-hook-form';
import ErrorMsg from '../../../global/customComponents/ErrorMsg';
import TextArea from '../../../global/customComponents/TextArea';
import TextEditor from "../../../global/customComponents/TextEditor";



const AddUpdateBlogModal = ({handleAddBlog, handleUpdateBlog, selectedBlog, toggleModal, setSelectedBlog, editMode, setEditMode, errMsg }) => {

        const { register, handleSubmit, setValue, watch, trigger, clearErrors, setError, formState: { errors } } = useForm({ mode: 'onChange', defaultValues: selectedBlog || {} });
    const formRef = useRef(null);
    const [isChecked, setIsChecked] = useState(selectedBlog?.isActive || false);

    const formImageUrl = watch('imageUrl')
    const formThumbImageUrl = watch('thumbImageUrl')

    const handleCheckBoxClick = (e) => {
        setIsChecked((prev) => !prev);
        setValue(e.target.name, !isChecked);
    };

    const onSubmit = (data) => {
        editMode ? handleUpdateBlog(data) : handleAddBlog(data)
    };

    return (
        <div className="modal show blogs-modal">
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                    <div className="block block-rounded shadow-none mb-0">
                        <div className="block-header block-header-default">
                            <h3 className="block-title">
                                {editMode ? 'Edit Blog' : 'Add New Blog'}
                            </h3>
                            <div className="block-options">
                                <button onClick={() => { toggleModal(); setSelectedBlog(null); setEditMode(false) }} type="button" className="btn-block-option" data-bs-dismiss="modal" aria-label="Close">
                                    <i className="fa fa-times"></i>
                                </button>
                            </div>
                        </div>
                        <div className="block-content fs-sm">
                            <form
                                ref={formRef}
                                className="js-validation-signin"
                                encType="multipart/form-data"
                                onSubmit={handleSubmit(onSubmit)}
                            >
                                <div className='mb-3'>
                                    <FormInputField
                                        label={'Title'}
                                        placeholder={'Add Blog Title'}
                                        type={'text'}
                                        register={register('title', { required: 'Title is required' })}
                                    />
                                    {errors.title && <ErrorMsg message={errors.title.message} />}
                                </div>
                                <div className='mb-3'>
                                    <TextArea
                                        register={register('shortDescription', { required: 'Short description is required' })}
                                        label={'Short Description'}
                                        type={'text'}
                                    />
                                    {errors.shortDescription && <ErrorMsg message={errors.shortDescription.message} />}
                                </div>
                                <div className='mb-3'>
                                    <TextEditor
                                        longDescription={watch("longDescription")}
                                        setLongDescription={(content) => {
                                            setValue("longDescription", content);
                                            trigger("longDescription");
                                        }}
                                    />
                                    {errors.longDescription && <ErrorMsg message={errors.longDescription.message} />}
                                </div>
                                <div className='mb-3'>
                                    <FormInputField
                                        register={register('metaTitle', { required: 'Meta title is required' })}
                                        label={'Meta Title'}
                                        placeholder={'Add MetaTitle'}
                                        type={'text'}
                                    />
                                    {errors.metaTitle && <ErrorMsg message={errors.metaTitle.message} />}
                                </div>
                                <div className='mb-3'>
                                    <FormInputField
                                        register={register('metaKeyword', { required: 'Meta keyword is required' })}
                                        label={'Meta Keyword'}
                                        placeholder={'Add MetaKeyword'}
                                        type={'text'}
                                    />
                                    {errors.metaKeyword && <ErrorMsg message={errors.metaKeyword.message} />}
                                </div>
                                <div className='mb-3'>
                                    <FormInputField
                                        register={register('metaDescription', { required: 'Meta description is required' })}
                                        label={'Meta Description'}
                                        placeholder={'Add MetaDescription'}
                                        type={'text'}
                                    />
                                    {errors.metaDescription && <ErrorMsg message={errors.metaDescription.message} />}
                                </div>
                                <div className='mb-3'>
                                    {selectedBlog?.imageUrl && (
                                        <img src={formImageUrl[0] instanceof File ? URL.createObjectURL(formImageUrl[0]) : formImageUrl} alt="Current Image" width="100" height="100" />
                                    )}
                                    <FormInputField
                                        name={'imageUrl'}
                                        label={'Image'}
                                        type={'file'}
                                        register={
                                            register("imageUrl", {
                                                required: !selectedBlog?.imageUrl ? "Image is required" : false,
                                                onChange: (e) => {
                                                    const file = e.target.files[0];
                                                    if (!file || Object.keys(file).length === 0) {
                                                        setError("imageUrl", { type: "manual", message: "Image is required" });
                                                    } else {
                                                        clearErrors("imageUrl");
                                                        setValue("imageUrl", file);
                                                    }
                                                },
                                            })
                                        }
                                    />
                                    {errors.imageUrl && <ErrorMsg message={errors.imageUrl.message} />}
                                </div>
                                <div className='mb-3'>
                                    {selectedBlog?.thumbImageUrl && (
                                        <img src={formThumbImageUrl[0] instanceof File ? URL.createObjectURL(formThumbImageUrl[0]) : formThumbImageUrl} alt="Current Image" width="100" height="100" />
                                    )}
                                    <FormInputField
                                        name={'thumbImageUrl'}
                                        label={'Thumbnail Image'}
                                        type={'file'}
                                        register={
                                            register("thumbImageUrl",
                                                {
                                                    required: !selectedBlog?.thumbImageUrl ? "Thumbnail is required" : false,
                                                    onChange: (e) => {
                                                        const file = e.target.files[0];
                                                        if (!file || Object.keys(file).length === 0) {
                                                            setError("thumbImageUrl", { type: "manual", message: "Thumb Image is required" });
                                                        } else {
                                                            clearErrors("thumbImageUrl");
                                                            setValue("thumbImageUrl", file);
                                                        }
                                                    },
                                                }
                                            )
                                        }
                                    />
                                    {errors.thumbImageUrl && <ErrorMsg message={errors.thumbImageUrl.message} />}
                                </div>
                                <div className='mb-3'>
                                    <FormInputField
                                        register={register('author', { required: 'Author is required' })}
                                        label={'Author'}
                                        placeholder={'Author'}
                                        type={'text'}
                                    />
                                    {errors.author && <ErrorMsg message={errors.author.message} />}
                                </div>
                                <div className='mb-3'>
                                    <FormInputField
                                        register={register('createdDate', { required: 'Date is required' })}
                                        label={'Created Date'}
                                        placeholder={'Created Date'}
                                        type={'date'}
                                    />
                                    {errors.createdDate && <ErrorMsg message={errors.createdDate.message} />}
                                </div>
                                <div className='mb-3'>
                                    <FormInputField
                                        register={register('schema', { required: 'Schema is required' })}
                                        label={'Schema'}
                                        placeholder={'Schema'}
                                        type={'text'}
                                    />
                                    {errors.schema && <ErrorMsg message={errors.schema.message} />}
                                </div>
                                <div className='mb-3'>
                                    <FormInputField
                                        register={register('tag', { required: 'Tag is required' })}
                                        label={'Tag'}
                                        placeholder={'Tag'}
                                        type={'text'}
                                    />
                                    {errors.tag && <ErrorMsg message={errors.tag.message} />}
                                </div>
                                <div className="form-check">
                                    <input
                                        name="isActive"
                                        type="checkbox"
                                        className="form-check-input"
                                        checked={isChecked}
                                        onClick={handleCheckBoxClick}
                                    />
                                    <label className="form-check-label" htmlFor="signup-terms">Active</label>
                                </div>
                                <p className='error-msg'>{errMsg}</p>
                            </form>
                        </div>
                        <div className="block-content block-content-full block-content-sm text-end border-top buttons-group">
                            <button onClick={() => { toggleModal(); setSelectedBlog(null); setEditMode(false); }} type="button" className="btn btn-alt-secondary"> Close </button>
                            <button onClick={() => formRef.current?.requestSubmit()} className="btn btn-alt-primary"> {editMode ? 'Update' : 'Add'} </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddUpdateBlogModal;