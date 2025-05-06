import React, { useRef } from 'react';
import FormHeading from '../../components/FormHeading';
import FormInputField from '../../components/FormInputField';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import ErrorMsg from '../../components/ErrorMsg';


const SignUpFormBase = ({ register, handleSubmit, errors, isValid, isSubmitting, onSubmit, errorMsg }) => {

    const formRef = useRef(null)
    const { setValue, clearErrors } = useForm();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValue(name, value);
        if (value) {
            clearErrors(name);
        }
    };


    return (
        <div className='mg-top registeration-page'>
            <div className='hero-static content content-full bg-body-extra-light form-container'>
                <FormHeading
                    heading='Create New Account'
                    subHeading='Please add your details'
                />
                <div className="row justify-content-center px-1">
                    <div className="col-sm-8 col-md-6 col-xl-4">
                        <form ref={formRef} className="js-validation-signin" onSubmit={handleSubmit(onSubmit)}>
                            <div className='mb-3'>
                                <FormInputField
                                    {...register('firstName', { required: 'first name is required' })}
                                    label={'First Name'}
                                    placeholder={'FirstName'}
                                    type={'text'}
                                    onChange={handleChange}
                                />
                                {errors.firstName && <ErrorMsg message={errors.firstName.message} />}
                            </div>
                            <div className='mb-3'>
                                <FormInputField
                                    {...register('lastName', { required: 'last name is required' })}
                                    label={'Last Name'}
                                    placeholder={'Last Name'}
                                    type={'text'}
                                    onChange={handleChange}
                                />
                                {errors.lastName && <ErrorMsg message={errors.lastName.message} />}
                            </div>
                            <div className='mb-3'>
                                <FormInputField
                                    {...register('email', {
                                        required: 'Email is required',
                                        pattern: {
                                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                            message: 'Invalid email address'
                                        }
                                    })}
                                    label={'Email'}
                                    placeholder={'Enter Email'}
                                    onChange={handleChange}
                                    type={'text'}
                                />
                                {errors.email && <ErrorMsg message={errors.email.message} />}
                            </div>
                            <div className='mb-3'>
                                <FormInputField
                                    {...register('phone', { required: 'phone number is required' })}
                                    label={'Phone'}
                                    placeholder={'Enter Phone Number'}
                                    type={'number'}
                                    onChange={handleChange}
                                />
                                {errors.phone && <ErrorMsg message={errors.phone.message} />}
                            </div>
                            <div className='mb-3'>
                                <FormInputField
                                    {...register('password', { required: 'password is required' })}
                                    label={'Password'}
                                    placeholder={'Enter new password'}
                                    type={'password'}
                                    onChange={handleChange}
                                />
                                {errors.password && <ErrorMsg message={errors.password.message} />}
                            </div>
                            <div className="mb-4 mt-2">
                                <div className="form-check">
                                    <input
                                        {...register('isActive', { required: 'required' })}
                                        type="checkbox"
                                        className="form-check-input"
                                    // value="1"
                                    />
                                    <label className="form-check-label" for="signup-terms">Active</label>
                                </div>
                            </div>
                            <p className='error-msg'>{errorMsg}</p>
                            <div className="row g-sm mb-4">
                                <div className="col-12 mb-2">
                                    <button onClick={() => formRef.current?.requestSubmit()} className="btn btn-lg btn-alt-primary w-100 py-3 fw-semibold">
                                        Sign Up
                                    </button>
                                </div>
                                <Link to={'/sign-in'} className="btn btn-alt-secondary text-center w-100 redirect-btn">Sign In</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUpFormBase;