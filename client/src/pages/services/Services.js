import React, { useEffect, useState } from 'react';
import servicesData from '../../mockData/ServicesData';
import SectionHeading from '../../components/SectionHeading';
import ServicesCard from '../../components/ServicesCard';
import LoadingSpinner from '../../components/LoadingSpinner';

const Services = () => {
    const [loading, setLoading] = useState(true);
    const [services, setServices] = useState([]);

    useEffect(() => {
        const fetchServices = () => {
            setTimeout(() => {
                setServices(servicesData);
                setLoading(false);
            }, 1000);
        };

        fetchServices();
    }, []);

    return (
        <div className='mg-top services-page'>
            <section className='services-section'>
                <div className='container'>
                    <SectionHeading heading={'Services'} />
                    {loading && <LoadingSpinner />}
                    {services?.length !== 0 && services !== null ?
                        <div className='services-cards'>
                            {services.map((item, index) => (
                                <ServicesCard key={index} item={item} />
                            ))}
                        </div>
                        :
                        !loading && (
                            <div className="not-found">
                                <p>Not found !</p>
                            </div>
                        )
                    }
                </div>
            </section>
        </div>
    );
};

export default Services;