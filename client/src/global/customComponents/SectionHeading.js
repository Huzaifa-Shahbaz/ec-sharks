import React from 'react';

const SectionHeading = ({heading, noAnimation}) => {
    return (
        <div data-aos={!noAnimation && "fade-up"} className='section-title'>
            <h2>{heading}</h2>
        </div>
    );
};

export default SectionHeading;