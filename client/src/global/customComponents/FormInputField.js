import React from 'react';

const FormInputField = ({name, value, label, placeholder, type, onChange, register, ...rest}) => {
    return (
        <div className="form-floating mb-1">
            <input
                name={name}
                type={type}
                value={value}
                className="form-control"
                placeholder={placeholder}
                {...register}
                onChange={onChange}
                {...rest}
            />
            <label className="form-label">{label}</label>
        </div>
    );
};

export default FormInputField;