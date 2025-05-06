import React from 'react';
import Image1 from '../../../assets/images/about-image-1.webp';


const ProjectSlide = ({ data }) => {
    return (
        <div className='project-slide'>
            <div className='video-container'>
                <img src={Image1} alt='' loading="lazy" />
            </div>
            <div className='overlay-content'>
                <div className='services-provided'>
                    <h3>Services Provided</h3>
                    <div className='services'>
                        {data.services?.map((item) => {
                            return (
                                <div className='item'>
                                    <div className='service-logo'>{item.icon}</div>
                                    <p>{item.title}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <figure className='project-logo'>
                    <img src={data.logo} alt='' />
                </figure>
                <div className='project-description'>
                    <p>{data.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ProjectSlide;