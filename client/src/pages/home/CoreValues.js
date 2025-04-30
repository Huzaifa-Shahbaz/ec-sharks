import React from 'react';
import AccountabilityIcon from '../../assets/images/icons/accountabilityIcon.js';
import SectionHeading from '../../global/customComponents/SectionHeading.js';


const CoreValues = () => {
    return (
        <section className='generic-section core-values'>
            <div className='container'>
                <SectionHeading heading={'Our Core Values'} />
                <div className='values-cards'>
                    <div data-aos="fade-up" className='card'>
                        <div className='description'>
                            <h3>Integrity</h3>
                            <p>
                                Integrity is of utmost importance to us, and we hold ourselves accountable to high ethical standards in all
                                our operations. We believe in transparency and honesty, and we strive to maintain these values in all our
                                dealings.
                            </p>
                        </div>
                        <div className='icon-holder'>
                            <svg fill="currentcolor" viewBox="0 -64 640 640">
                                <g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g><path d="M519.2 127.9l-47.6-47.6A56.252 56.252 0 0 0 432 64H205.2c-14.8 0-29.1 5.9-39.6 16.3L118 127.9H0v255.7h64c17.6 0 31.8-14.2 31.9-31.7h9.1l84.6 76.4c30.9 25.1 73.8 25.7 105.6 3.8 12.5 10.8 26 15.9 41.1 15.9 18.2 0 35.3-7.4 48.8-24 22.1 8.7 48.2 2.6 64-16.8l26.2-32.3c5.6-6.9 9.1-14.8 10.9-23h57.9c.1 17.5 14.4 31.7 31.9 31.7h64V127.9H519.2zM48 351.6c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16c0 8.9-7.2 16-16 16zm390-6.9l-26.1 32.2c-2.8 3.4-7.8 4-11.3 1.2l-23.9-19.4-30 36.5c-6 7.3-15 4.8-18 2.4l-36.8-31.5-15.6 19.2c-13.9 17.1-39.2 19.7-55.3 6.6l-97.3-88H96V175.8h41.9l61.7-61.6c2-.8 3.7-1.5 5.7-2.3H262l-38.7 35.5c-29.4 26.9-31.1 72.3-4.4 101.3 14.8 16.2 61.2 41.2 101.5 4.4l8.2-7.5 108.2 87.8c3.4 2.8 3.9 7.9 1.2 11.3zm106-40.8h-69.2c-2.3-2.8-4.9-5.4-7.7-7.7l-102.7-83.4 12.5-11.4c6.5-6 7-16.1 1-22.6L367 167.1c-6-6.5-16.1-6.9-22.6-1l-55.2 50.6c-9.5 8.7-25.7 9.4-34.6 0-9.3-9.9-8.5-25.1 1.2-33.9l65.6-60.1c7.4-6.8 17-10.5 27-10.5l83.7-.2c2.1 0 4.1.8 5.5 2.3l61.7 61.6H544v128zm48 47.7c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16c0 8.9-7.2 16-16 16z"></path></g>
                            </svg>
                        </div>
                    </div>
                    <div data-aos="fade-up" className='card'>
                        <div className='description'>
                            <h3>Accountability</h3>
                            <p>
                                We value constructive feedback and believe that it is essential to continuously improve our quality of
                                services. Therefore, we take accountability seriously and are committed to incorporating feedback from
                                our customers and stakeholders to enhance our performance and services continually.
                            </p>
                        </div>
                        <div className='icon-holder'>
                            <AccountabilityIcon />
                        </div>
                    </div>
                    <div data-aos="fade-up" className='card'>
                        <div className='description'>
                            <h3>Innovation</h3>
                            <p>
                                Innovation is at the core of EcSharks's ethos, and we constantly explore new ideas and push boundaries to better serve our customers.
                                We are committed to creating products and services that cater to our customers' needs and contribute positively to their health and
                                well-being.
                            </p>
                        </div>
                        <div className='icon-holder'>
                            <svg viewBox="0 0 48 48" fill="currentcolor">
                                <path d="M20,34a1.69,1.69,0,0,0,.27.9l.87,1.3a1.63,1.63,0,0,0,1.35.72h3.12a1.63,1.63,0,0,0,1.35-.72l.87-1.3a1.69,1.69,0,0,0,.27-.9V32.1H20Z" />
                                <path d="M24,11A8.9,8.9,0,0,0,17.3,25.81a14.78,14.78,0,0,1,2.64,4.63v0h8.12v0a14.78,14.78,0,0,1,2.64-4.63A8.8,8.8,0,0,0,32.91,20,8.9,8.9,0,0,0,24,11Zm0,4.86A4.06,4.06,0,0,0,20,20a.81.81,0,1,1-1.62,0A5.67,5.67,0,0,1,24,14.28a.81.81,0,0,1,0,1.62Z" />
                            </svg>
                        </div>
                    </div>
                    <div data-aos="fade-up" className='card'>
                        <div className='description'>
                            <h3>Excellence</h3>
                            <p>
                                Excellence is a key pillar of our values, and we aim to deliver top-quality products and exceptional customer
                                experiences. We have a dedicated team of professionals who strive for excellence in all their endeavors, from
                                research and development to customer support and services.
                            </p>
                        </div>
                        <div className='icon-holder'>
                            <svg viewBox="0 0 64 64" fill="currentcolor">
                                <path d="M58.4601 22.6601V22.5001C58.4705 22.4171 58.4705 22.3331 58.4601 22.2501C58.465 22.2002 58.465 22.15 58.4601 22.1001C58.445 21.9994 58.4147 21.9016 58.3701 21.8101C58.3701 21.8101 58.3701 21.7501 58.3701 21.7201L53.0001 10.6701C52.879 10.4177 52.6889 10.2048 52.4517 10.0561C52.2145 9.90741 51.94 9.82904 51.6601 9.83009H12.3801C12.1002 9.82904 11.8257 9.90741 11.5885 10.0561C11.3513 10.2048 11.1611 10.4177 11.0401 10.6701L5.65009 21.6701C5.65009 21.6701 5.65009 21.7301 5.65009 21.7601C5.6055 21.8516 5.57515 21.9494 5.56009 22.0501C5.55514 22.1 5.55514 22.1502 5.56009 22.2001C5.54963 22.2831 5.54963 22.3671 5.56009 22.4501V22.6101C5.57412 22.6849 5.59418 22.7585 5.62009 22.8301C5.62009 22.8901 5.67009 22.9401 5.69009 22.9901C5.70602 23.032 5.72612 23.0722 5.75009 23.1101L5.82009 23.1901C5.81652 23.2166 5.81652 23.2435 5.82009 23.2701L30.8201 53.5801L30.8801 53.6501C30.9187 53.692 30.9624 53.7289 31.0101 53.7601C31.0265 53.7643 31.0437 53.7643 31.0601 53.7601V53.7601L31.1601 53.8201H31.2101L31.3901 53.8801H31.4901H31.5401C31.6066 53.8857 31.6735 53.8857 31.7401 53.8801H32.0001C32.0666 53.8857 32.1335 53.8857 32.2001 53.8801H32.2501H32.3501L32.5301 53.8201L32.6301 53.7601C32.6465 53.7643 32.6637 53.7643 32.6801 53.7601C32.7278 53.7289 32.7715 53.692 32.8101 53.6501L32.8701 53.5801L57.8701 23.2701V23.1901L57.9401 23.1101C57.9641 23.0722 57.9842 23.032 58.0001 22.9901C58.0001 22.9401 58.0501 22.8901 58.0701 22.8301C58.2079 22.7935 58.3394 22.7362 58.4601 22.6601V22.6601ZM54.6001 20.8601H48.4801L45.1201 12.8601H50.6801L54.6001 20.8601ZM18.7801 20.8601L22.1301 12.8601H41.8701L45.2201 20.8601H18.7801ZM44.8501 23.8601L32.0001 49.3401L19.1401 23.8601H44.8501ZM13.3201 12.8601H18.8801L15.5201 20.8601H9.40009L13.3201 12.8601ZM15.8001 23.8601L24.6301 41.3801L10.1801 23.8601H15.8001ZM39.3801 41.3601L48.2101 23.8601H53.8201L39.3801 41.3601Z" />
                            </svg>
                        </div>
                    </div>
                    <div data-aos="fade-up" className='card'>
                        <div className='description'>
                            <h3>Customer Satisfaction</h3>
                            <p>
                                Customer satisfaction is at the heart of everything we do. We give utmost priority to our customers' needs and strive to exceed their
                                expectations in every possible way. We believe that building strong relationships with our customers is essential to our success, and we
                                are committed to maintaining a high level of customer satisfaction.
                            </p>
                        </div>
                        <div className='icon-holder'>
                            <svg viewBox="0 0 64 64" fill='currentcolor'>
                                <g id="Customer_satisfied"><path d="M33.4018,25.9448a15.5009,15.5009,0,0,0-6.5986-5.115,1.564,1.564,0,0,1-.9455-1.4365v0a1.5951,1.5951,0,0,1,.4951-1.1693c.0967-.0921.1892-.1828.2585-.2558A9.777,9.777,0,0,0,27.9,16.2758,9.7238,9.7238,0,0,0,17.7283,1.727a9.5019,9.5019,0,0,0-7.67,7.45A9.7241,9.7241,0,0,0,12.74,18.2034a1.6484,1.6484,0,0,1,.5144,1.1711v.0081a1.5651,1.5651,0,0,1-.9455,1.4516A16.0039,16.0039,0,0,0,3.7048,29.36,20.3622,20.3622,0,0,0,2.008,37.7449v2.0785A3.392,3.392,0,0,0,5.4,43.2155H23.4734a20.06,20.06,0,0,1,9.9284-17.2707Z" /><path d="M56.0564,30.9531a17.514,17.514,0,1,0,0,24.7685A17.5138,17.5138,0,0,0,56.0564,30.9531Zm-19.81,6.6245a1.5,1.5,0,0,1,3,0v1.0859a1.5,1.5,0,0,1-3,0ZM43.8142,53.49a7.5755,7.5755,0,0,1-7.5674-7.5664,1.5,1.5,0,0,1,3,0,4.5669,4.5669,0,0,0,9.1338,0,1.5,1.5,0,0,1,3,0A7.5753,7.5753,0,0,1,43.8142,53.49Zm7.5664-14.8262a1.5,1.5,0,0,1-3,0V37.5776a1.5,1.5,0,0,1,3,0Z" /></g>
                            </svg>
                        </div>
                    </div>
                    <div data-aos="fade-up" className='card'>
                        <div className='description'>
                            <h3>Transparency</h3>
                            <p>
                                At EcSharks, we are committed to upholding these core values in everything we do. We believe that by adhering to
                                these principles, we can create a positive impact on society and contribute to building a healthier world.
                            </p>
                        </div>
                        <div className='icon-holder'>
                            <svg version="1.1" x="0px" y="0px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" fill='currentcolor'>
                                <g id="search">
                                    <g>
                                        <g>
                                            <path d="M457.52,435.02L348.74,326.23c26.149-30.73,40.47-69.511,40.47-109.98c0-93.74-76.26-170-170-170
                                                c-93.74,0-170,76.26-170,170s76.26,170,170,170c37.39,0,73.85-12.45,103.44-35.19l109.42,109.41
                                                c3.399,3.41,7.92,5.28,12.729,5.28c4.8,0,9.32-1.87,12.72-5.28C464.54,453.45,464.54,442.03,457.52,435.02z M219.21,80.25
                                                c74.99,0,136,61.01,136,136s-61.01,136-136,136c-74.99,0-136-61.01-136-136S144.22,80.25,219.21,80.25z" id="id_101" ></path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoreValues;