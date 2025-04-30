import React from 'react';
import Logo from '../../assets/images/site-logo-white.webp';
import { Link } from 'react-router-dom';


const SiteFooter = () => {
    return (
        <footer className="site-footer">
            <div className='footer-container'>
                <div className='footer-content'>
                    <div data-aos="fade-up" className='description'>
                        <figure className='logo-wrapper'>
                            <a href='#'>
                                <img src={Logo} alt="" />
                            </a>
                        </figure>
                        <p>
                            At EcSharks, we are passionate about crafting exceptional web experiences across the entire technology stack. With expertise in a wide range of tech stacks, we offer comprehensive full stack web services tailored to your unique needs. Our team of dedicated professionals excels in front-end and back-end development, ensuring seamless integration, robust functionality, and stunning user interfaces. Let us take your digital aspirations to new heights and propel your success in the ever-evolving digital landscape. Unleash the full potential of your web presence with EcSharks. Contact us today and embark on a transformative journey towards digital excellence.
                        </p>
                    </div>
                    <div className='footer-nav'>
                        <div data-aos="fade-up" className='navigation-wrapper'>
                            <h3>Services</h3>
                            <nav>
                                <Link to={'/services/ecommerce-&-marketplace'}>Ecommerce & Marketplace</Link>
                                <Link to={'/services/custom-software-development'}>Software Development</Link>
                                <Link to={'/services/gmb'}>GMB Services</Link>
                                <Link to={'/services/dedicated-resources'}>Dedicated Resources</Link>
                                <Link to={'/services/digital-marketing'}>Digital Marketing</Link>
                            </nav>
                        </div>
                        <div data-aos="fade-up" className='navigation-wrapper'>
                            <h3>Contact Info</h3>
                            <nav>
                                <a href='#' >
                                    <svg width="22px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <g id="icon-6-mail-envelope-closed" fill="#fff">
                                                <path d="M25.9230769,21.0769231 L20,16 L25.9230769,10.9230769 L25.9230769,10.9230769 L25.1153846,10.1153846 L16.5,17.5 L7.88461538,10.1153846 L7.07692308,10.9230769 L7.07692308,10.9230769 L13,16 L7.07692308,21.0769231 L7.07692308,21.0769231 L7.88461538,21.8846154 L13.875,16.75 L16.5,19 L19.125,16.75 L25.1153846,21.8846154 L25.9230769,21.0769231 L25.9230769,21.0769231 Z M6.00359486,8 C4.89703997,8 4,8.89451376 4,9.99406028 L4,22.0059397 C4,23.1072288 4.88976324,24 6.00359486,24 L26.9964051,24 C28.10296,24 29,23.1054862 29,22.0059397 L29,9.99406028 C29,8.8927712 28.1102368,8 26.9964051,8 L6.00359486,8 L6.00359486,8 Z" id="mail-envelope-closed"></path>
                                            </g>
                                        </g>
                                    </svg>
                                    <span>info@ecsharks.org</span>
                                </a>
                            </nav>
                        </div>
                    </div>

                </div>
            </div>
            <div className='copyrights'>
                <p>© 2024 EcSharks. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default SiteFooter;