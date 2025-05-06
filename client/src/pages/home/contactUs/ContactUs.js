import React from 'react';
import MapImage from '../../../assets/images/map.webp';
import ContactForm from '../../../components/forms/ContactForm';


const ContactUs = () => {    

    return (
        <section data-aos="fade-up" className='contact-us-form'>
            <ContactForm />
            <div className='map-wrapper'>
                <img src={MapImage} alt='not found' />
                <div className='address'>
                    <ul>
                        <li>
                            <span></span>
                            <strong>USA, Texas</strong>
                        </li>
                        <li>
                            <span>PK</span>
                            <strong>Lahore, Pakistan</strong>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;