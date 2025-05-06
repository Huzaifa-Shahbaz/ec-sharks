import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import servicesData from '../../../mockData/ServicesData';
import ButtonPrimary from '../../../components/ButtonPrimary';
import QueryForm from '../../../components/forms/QueryForm';

const ServiceDetails = () => {
    const { endpoint } = useParams();
    const serviceDetails = servicesData.find((item) => item.url === endpoint);
    const [readMore, setReadMore] = useState(false);

    const handleReadMore = () => {
        setReadMore(true);
    };

    return (
        <div className='detail-page services-details'>
            <div className='details-banner'>
                <img src={serviceDetails?.bannerImg} loading='lazy' alt='' />
                <div className='container'>
                    <div className='text'>
                        <h1>{serviceDetails?.title}</h1>
                        <div className='text-holder'>
                            <p className={readMore ? '' : 'truncate-3'}>{serviceDetails?.description}</p>
                        </div>
                        <ButtonPrimary
                            title={'Read More'}
                            onClick={handleReadMore}
                            customStyle={{ width: '18vw' }}
                        />
                    </div>
                    <QueryForm />
                </div>
            </div>
            {serviceDetails?.sectionsData?.map((section) => {
                return (
                    <section className='details-section' key={section.heading}>
                        <div className='container'>
                            <div data-aos="fade-up" className='description'>
                                <h3>{section.heading}</h3>
                                <p>{section.description1}</p>
                                <p>{section.description2}</p>
                            </div>
                            <figure data-aos="fade-up" className='section-image'>
                                <img src={section.sectionImg} loading='lazy' alt='' />
                            </figure>
                        </div>
                    </section>
                );
            })}
        </div>
    );
};

export default ServiceDetails;