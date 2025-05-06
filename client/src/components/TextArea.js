import React from 'react';

const TextArea = ({label, content, onChange, register, ...rest}) => {
    return (
        <div className="form-floating mb-1">
            <textarea 
                cols="4"
                className="form-control custom-textarea"
                onChange={onChange}
                {...register}
                {...rest}
            >{content}</textarea>
            <label className="form-label">{label}</label>
        </div>
    );
};

export default TextArea;