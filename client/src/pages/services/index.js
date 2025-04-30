import React, { useEffect, useState } from 'react';
import servicesData from '../../assets/data/ServicesData';
import SectionHeading from '../../global/customComponents/SectionHeading';
import ServicesCard from '../../global/customComponents/ServicesCard';
import LoadingSpinner from '../../global/customComponents/LoadingSpinner';

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



// import React from 'react';
// import servicesData from '../../assets/data/ServicesData';
// import SectionHeading from '../../global/customComponents/SectionHeading';
// import ServicesCard from '../../global/customComponents/ServicesCard';
// import LoadingSpinner from '../../global/customComponents/LoadingSpinner';


// const Services = () => {
//     return (
//         <div className='mg-top services-page'>
//             <section className='services-section'>
//                 <div className='container'>
//                     <SectionHeading heading={'Services'} />
// {loading && <LoadingSpinner />}
// {!loading && (fetchingErr || servicesData?.length === 0) && (
//     <div className="not-found">
//         <p>Not found.</p>
//     </div>
// )}
//                     <div className='services-cards'>
//                         {servicesData.map((item)=> {
//                             return <ServicesCard item={item} />
//                         })}
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default Services;