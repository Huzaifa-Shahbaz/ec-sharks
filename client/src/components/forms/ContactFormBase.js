import React from 'react';
import ErrorMsg from '../../components/ErrorMsg';
import ButtonPrimary from '../../components/ButtonPrimary';
import SectionHeading from '../../components/SectionHeading';


const ContactForm = ({ register, handleSubmit, errors, isValid, isSubmitting, watchFields, onSubmit }) => {
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <SectionHeading heading={'Have a Query? Contact Us.'} />
            <div className='input-group'>
                <div className='input-wrapper'>
                    <input
                        name='name'
                        {...register('name', { required: 'Name is required' })}
                        className='input-field'
                        placeholder='Your Name'
                    />
                    {errors.name && <ErrorMsg message={errors.name.message} />}
                </div>
                <div className='input-wrapper'>
                    <input
                        name='email'
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/i,
                                message: 'Invalid email address'
                            }
                        })}
                        className='input-field'
                        placeholder='Your Email'
                    />
                    {errors.email && <ErrorMsg message={errors.email.message} />}
                </div>
            </div>
            <div className='input-group'>
                <div className='input-wrapper'>
                    <input
                        name='phone'
                        {...register('phone', {
                            required: 'Phone number is required',
                            pattern: {
                                value: /^[0-9]{11}$/,
                                message: 'Phone number must be 11 digits',
                            },
                        })}
                        type='number'
                        min='0'
                        className='input-field'
                        placeholder='Phone'
                    />
                    {errors.phone && <ErrorMsg message={errors.phone.message} />}
                </div>
                <div className='input-wrapper'>
                    <input
                        name='organization'
                        {...register('organization', { required: 'This field is required' })}
                        className='input-field'
                        placeholder='Organization'
                    />
                    {errors.organization && <ErrorMsg message={errors.organization.message} />}
                </div>
            </div>
            <textarea
                name='message'
                {...register('message', { required: 'Please provide the general purpose of contacting us.' })}
                className='input-field'
                placeholder='Your Message'
                rows="4"
                cols="50"
            ></textarea>
            {errors.message && <ErrorMsg message={errors.message.message} />}
            <ButtonPrimary
                type={'submit'}
                title={'Send'}
                disabled={!isValid || isSubmitting || Object.keys(watchFields).length === 0}
                icon={true}
            />
        </form>
    );
};

export default ContactForm;