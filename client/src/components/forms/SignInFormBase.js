import React from 'react';
import FormHeading from '../../components/FormHeading';
import FormInputField from '../../components/FormInputField';
import { Link } from 'react-router-dom';


const SignInFormBase = ({ register, handleSubmit, errors, isValid, isSubmitting, onSubmit, errorMsg }) => {

    return (
        <div className='mg-top registeration-page'>
            <div className='hero-static content content-full bg-body-extra-light form-container'>
                <FormHeading
                    heading={'Welcome to Your Dashboard'}
                    subHeading={'Please sign in'}
                />
                <div className="row justify-content-center px-1">
                    <div className="col-10 col-md-6 col-lg-4">
                        <form className="js-validation-signin" onSubmit={handleSubmit(onSubmit)}>
                            <div className='mb-4'>
                                <FormInputField
                                    label={'Email'}
                                    placeholder={'Email'}
                                    type={'text'}
                                    {...register('email', {
                                        required: 'Email is required',
                                        pattern: {
                                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                            message: 'Invalid email address'
                                        }
                                    })}
                                />
                                {errors.email && <p className='error-msg'>{errors.email.message}</p>}
                            </div>
                            <div className='mb-4'>
                                <FormInputField
                                    label={'Password'}
                                    placeholder={'Enter new password'}
                                    type={'password'}
                                    {...register('password', {
                                        required: 'Password is required'
                                    })}
                                />
                                {errors.password && <p className='error-msg'>{errors.password.message}</p>}
                            </div>
                            <p className='error-msg'>{errorMsg}</p>
                            <div className="row g-sm mb-4">
                                <div className="col-12 mb-2">
                                    <button type="submit" className="btn btn-lg btn-alt-primary w-100 py-3 fw-semibold" >
                                        Sign In
                                    </button>
                                </div>
                                <Link to={'/sign-up'} className="btn btn-alt-secondary text-center w-100 redirect-btn">New Account</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignInFormBase;