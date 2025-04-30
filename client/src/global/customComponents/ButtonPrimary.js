import React from 'react';
import sendIcon from '../../assets/images/icons/send-icon.png'

const ButtonPrimary = ({ title, onClick, type, disabled, icon, customStyle }) => {
    return (
        <button
            type={type}
            disabled={disabled}
            className='btn btn-secondary'
            {...(onClick ? { onClick } : {})}
            style={customStyle}
        >
            <span>{title}</span>
            {icon && <img src={sendIcon} alt='' />}
        </button>
    );
};

export default ButtonPrimary;