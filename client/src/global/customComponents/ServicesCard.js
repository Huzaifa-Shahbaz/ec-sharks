import React from 'react';
import ArrowIcon from '../../assets/images/icons/arrow-icon.svg';
import { Link } from 'react-router-dom';


const ServicesCard = ({item}) => {
    return (
        <div data-aos="fade-up" className='card'>
            <div className='card-overlay'>
                <Link to={`/services/${item.url}`} className='btn round-icon'>
                    <img src={ArrowIcon} alt='' />
                </Link>
            </div>
            <figure>
                <img src={item.bgImg} alt='' loading="lazy" />
            </figure>
            <Link to={`/services/${item.url}`}>
                <h3>{item.title}</h3>
            </Link>
        </div>
    );
};

export default ServicesCard;