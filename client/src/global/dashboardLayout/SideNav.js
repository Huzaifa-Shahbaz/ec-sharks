import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/images/site-logo.png';


const SideNav = () => {

    const [linkActive, setLinkActive] = useState(false)

    return (
        <nav id="sidebar">
            <div className="sidebar-content">
                <div className="js-sidebar-scroll">
                    <div className="content-side content-side-user px-0 py-0">
                        <div className="smini-hidden text-center mx-auto">
                            <figure className='site-logo'>
                                <a href='https://ecsharks.com/'>
                                    <img src={Logo} alt='' />
                                </a>
                            </figure>
                        </div>
                    </div>
                    <div className="content-side content-side-full">
                        <ul className="nav-main">
                            <li className="nav-main-item">
                                <NavLink to="/dashboard" end className={({ isActive }) => isActive ? "nav-main-link active" : "nav-main-link"}>
                                    <i className="nav-main-link-icon fa fa-house-user"></i>
                                    <span className='nav-main-link-name'>Dashboard</span>
                                </NavLink>
                            </li>
                            <li className="nav-main-item">
                                <NavLink to="/dashboard/blogs" end className={({ isActive }) => isActive ? "nav-main-link active" : "nav-main-link"}>
                                    <i className="nav-main-link-icon fa fa-list-alt"></i>
                                    <span className="nav-main-link-name">Blogs</span>
                                </NavLink>
                            </li>
                            <li className="nav-main-item">
                                <a class="d-flex align-items-center space-x-3 nav-main-link">
                                    <i class="fa fa-fw fa-wrench opacity-25"></i>
                                    <span className="nav-main-link-name">Settings</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default SideNav;