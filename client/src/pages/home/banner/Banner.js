import React, { useEffect, useState } from 'react';
import ArrowIcon from '../../../assets/images/icons/arrow-icon.svg'
import { Link } from 'react-router-dom';

const Banner = () => {

    const buttonData = [
        { text: "Get to Know us", href: "/about" },
        { text: "Our Services", href: "/services" },
        { text: "View Our Work", href: "/projects" },
        { text: "Our Blogs", href: "/blogs" },
    ];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % buttonData.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);


    return (
        <div className='banner'>
            <div className='banner-content'>
                <div className='text'>
                    <h1>Revolutionizing</h1>
                    <h1>Digital</h1>
                    <h1>Experiences.</h1>
                </div>
                <div className='button-wrapper'>
                    <Link to={buttonData[index].href} className='btn btn-primary'>
                        <span>{buttonData[index].text}</span>
                        <figure className='arrow-icon'>
                            <img src={ArrowIcon} alt='' />
                        </figure>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;