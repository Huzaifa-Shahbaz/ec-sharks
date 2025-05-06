import React, { useState } from 'react';
import Logo from '../assets/images/site-logo.png';
import MenuIcon from '../assets/images/icons/menu-icon.png';
import CrossIcon from '../assets/images/icons/cross-icon.png';
import { NavLink } from 'react-router-dom';


const SiteHeader = ({ isScrolled }) => {

    const [menuToggle, setMenuToggle] = useState(false)

    return (
        <header className={`site-header ${menuToggle && 'vertical-nav'} ${isScrolled && 'fixed'}`}>
            <figure className='site-logo'>
                <a href='/'>
                    <img src={Logo} alt='' />
                </a>
            </figure>
            <div className='header-left'>
                <nav>
                    <NavLink to='/' onClick={()=> setMenuToggle(false)}>HOME</NavLink>
                    <NavLink to='/services' onClick={()=> setMenuToggle(false)}>SERVICES</NavLink>
                    <NavLink to='/projects' onClick={()=> setMenuToggle(false)}>PROJECTS</NavLink>
                    <NavLink to='/about' onClick={()=> setMenuToggle(false)}>ABOUT</NavLink>
                    <NavLink to='/blogs' onClick={()=> setMenuToggle(false)}>BLOGS</NavLink>
                    <NavLink to='/contact-us' onClick={()=> setMenuToggle(false)}>CONTACT US</NavLink>
                    <NavLink to='/sign-in' onClick={()=> setMenuToggle(false)} className='btn btn-secondary btn-secondary-rounded'>SignIn</NavLink>
                </nav>
                <div className='buttons-group'>
                    <button onClick={() => setMenuToggle(true)} className={`btn menu-icon ${menuToggle && 'd-none'}`}>
                        <img src={MenuIcon} alt='' style={{height: '20px', width: '25px'}} />
                    </button>
                    <button onClick={() => setMenuToggle(false)} className={`btn cross-icon ${!menuToggle && 'd-none'}`}>
                        <img src={CrossIcon} alt='' style={{ height: '20px', width: '20px', marginTop: '12px'}} />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default SiteHeader;