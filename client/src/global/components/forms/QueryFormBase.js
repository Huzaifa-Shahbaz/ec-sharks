import React from 'react';
import ButtonPrimary from '../../customComponents/ButtonPrimary';


const QueryFormBase = ({ register, handleSubmit, errors, isValid, isSubmitting, watchFields, onSubmit }) => {

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h3>Send Your Query</h3>
            <div className='form-wrapper'>
                <div>
                    <input
                        className='input-field'
                        placeholder='Your Name'
                        {...register('name', { required: 'Name is required' })}
                    />
                    {errors.name && <span className='error-msg'>{errors.name.message}</span>}
                </div>
                <div className='input-group'>
                    <div>
                        <input
                            className='input-field'
                            placeholder='Email Address'
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                    message: 'Invalid email address'
                                }
                            })}
                        />
                        {errors.email && <span className='error-msg'>{errors.email.message}</span>}
                    </div>
                    <div>
                        <input
                            className='input-field'
                            placeholder='Phone Number'
                            type='number'
                            {...register('phone', { required: 'Phone number is required' })}
                        />
                        {errors.phone && <span className='error-msg'>{errors.phone.message}</span>}
                    </div>
                </div>
                <div className='input-group'>
                    <div>
                        <input
                            className='input-field'
                            type='number'
                            min="0"
                            max="10"
                            placeholder='How Many Experts Required'
                            {...register('experts', { required: 'Number of experts is required' })}
                        />
                        {errors.experts && <span className='error-msg'>{errors.experts.message}</span>}
                    </div>
                    <div>
                        <input
                            className='input-field'
                            type='text'
                            placeholder='Select Technology...'
                            {...register('technology', { required: 'Technology is required' })}
                        />
                        {errors.technology && <span className='error-msg'>{errors.technology.message}</span>}
                    </div>
                </div>
                <textarea
                    className='input-field'
                    placeholder='Your Message'
                    rows="4"
                    cols="50"
                    {...register('message', { required: 'Message is required' })}
                ></textarea>
                {errors.message && <span className='error-msg'>{errors.message.message}</span>}
                <ButtonPrimary
                    type={'submit'}
                    title={'Send'}
                    disabled={!isValid || isSubmitting || Object.keys(watchFields).length === 0}
                />
            </div>
        </form>
    );
};

export default QueryFormBase;