import React from 'react';
import Logo from '../../assets/images/site-logo.png';

const FormHeading = ({heading, subHeading}) => {
    return (
        <div class="py-4 px-1 text-center mb-4 form-heading">
            <a class="link-fx fw-bold" href="#">
                <figure className='site-logo'>
                    <a href='/'>
                        <img src={Logo} alt='' />
                    </a>
                </figure>
            </a>
            <h1 class="h3 fw-bold mt-5 mb-2">{heading}</h1>
            <h2 class="h5 fw-medium text-muted mb-0">{subHeading}</h2>
        </div>
    );
};

export default FormHeading;