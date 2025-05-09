import React from 'react';

const ErrorMsg = ({message}) => {
    return (
        <div className='error-msg'>
            <svg viewBox="0 0 64 64" width='20' height='20' fill="currentcolor">
                <g id="Layer_13" data-name="Layer 13">
                    <path d="M32,10.5A21.53,21.53,0,0,0,10.5,32c1.18,28.52,41.82,28.51,43,0A21.53,21.53,0,0,0,32,10.5ZM42.3,40.18a1.5,1.5,0,0,1-2.12,2.12L32,34.12,23.82,42.3a1.5,1.5,0,0,1-2.12-2.12L29.88,32,21.7,23.82a1.5,1.5,0,1,1,2.12-2.12L32,29.88l8.18-8.18a1.5,1.5,0,0,1,2.12,2.12L34.12,32Z"/>
                </g>
            </svg>
            <p>{message}</p> 
        </div>
    );
};

export default ErrorMsg;