import React, { Suspense, useEffect, useState } from 'react';
import Image1 from '../../assets/images/about-image-1.webp';
import Image2 from '../../assets/images/about-image-2.webp';
import Image3 from '../../assets/images/about-image-3.webp';
import SiteLogo from '../../assets/images/site-logo.png';
import LoadingScreen from '../../global/components/LoadingScreen';
const SplineAbout = React.lazy(() => import("../../global/components/canvas/SplineAbout"))


const About = () => {

    return (
        <>
            <Suspense fallback={<LoadingScreen />}>
                <SplineAbout />
            </Suspense>
            <div className='mg-top about-us'>
                <section className='about-content'>
                    <div className='text'>
                        <h4>Ec Sharks,</h4>
                        <p>
                            a forward-thinking software house specializing in full-stack web development. Established in 2024, we are dedicated to building innovative, high-quality digital solutions that empower businesses and enhance user experiences. With a team of skilled developers and a passion for technology, we strive to make a lasting impact in the tech industry by delivering reliable, modern web applications.
                        </p>
                    </div>
                    <figure className='image-holder'>
                        <img src={Image1} alt='' loading="lazy" />
                    </figure>
                </section>
                <section data-aos="fade-up" className='about-content'>
                    <figure className='image-holder'>
                        <img src={Image2} alt='' loading="lazy" />
                    </figure>
                    <div className='text'>
                        <h4>Our Commitment</h4>
                        <p>
                            At ecsharks, we are known for our unwavering dedication to quality, innovation, and client satisfaction. As a trusted software development
                            company, we leverage the latest technologies and industry best practices to build robust, scalable digital solutions. Our team of highly
                            qualified and experienced professionals works diligently to ensure every project meets our stringent standards of quality, functionality,
                            and user experience. We invest heavily in research and development, with a dedicated team constantly exploring new technologies and
                            innovative approaches to tackle complex digital challenges. Our commitment is to empower our clients with high-quality, cost-effective,
                            and reliable software solutions that drive success and create lasting impact. Our mission is to improve the digital landscape by
                            delivering solutions that enhance the efficiency, engagement, and growth of our clients' businesses. Through our dedication to
                            excellence and a client-first approach, we strive to be a trusted partner for businesses navigating the ever-evolving world of technology.
                        </p>
                    </div>
                </section>
                <section data-aos="fade-up" className='about-content'>
                    <div className='text'>
                        <h4>Our Mission</h4>
                        <p>
                            At ecsharks, our mission is to empower businesses and individuals worldwide through innovative, high-quality web
                            solutions that are both accessible and impactful. We believe that digital transformation can drive positive change,
                            and we are dedicated to delivering exceptional software that enhances user experiences and streamlines business
                            operations. We are committed to the highest standards of quality, security, and transparency in our work, fostering
                            trust and long-term relationships with our clients. Our team actively collaborates with businesses across various
                            industries, providing solutions that address complex challenges and deliver measurable results. As a socially
                            responsible company, we invest in initiatives that support our local communities and foster sustainable growth.
                            We are passionate about giving back and contributing to a future where technology serves the greater good. Whether
                            through our partnerships or community involvement, ecsharks is dedicated to making a meaningful difference. Our commitment
                            to continuous improvement and innovation keeps us at the forefront of technology, and our expanding range of web development
                            services ensures we can meet the evolving needs of our clients. Together, we aim to shape a future of limitless possibilities.
                        </p>
                    </div>
                    <figure className='image-holder'>
                        <img src={Image3} alt='' loading="lazy" />
                    </figure>
                </section>
                <section data-aos="fade-up" className='about-content'>
                    <figure className='image-holder no-border'>
                        <img src={SiteLogo} alt='' loading="lazy" />
                    </figure>
                    <div className='text'>
                        <h4>Thank you for taking the time to learn about ecshark,</h4>
                        <p>
                            We are dedicated to improving the health and well-being of people worldwide by delivering high-quality, safe, and effective solutions.
                            Our commitment to quality, safety, and innovation remains at the forefront of everything we do. We deeply value the trust and support
                            of our clients, partners, and communities and are honored to serve as a reliable partner in delivering impactful, results-driven
                            solutions. As we continue to grow, we remain dedicated to driving positive outcomes for our clients and making a meaningful difference
                            globally. We look forward to the opportunity to collaborate with you and create lasting, positive impacts on the well-being of people
                            around the world.
                        </p>
                    </div>
                </section>
            </div>
        </>
    );
};

export default About;