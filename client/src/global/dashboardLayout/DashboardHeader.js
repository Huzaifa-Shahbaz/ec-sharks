import React from 'react';


const DashboardHeader = ({ userName, logoutUser}) => {
    return (
        <header id="page-header">
            <div className="content-header">
                <div className="space-x-1">
                    <a className="link-fx fw-bold tracking-wide mx-auto" href="#">
                        <span className="smini-hidden">
                            <div className="list-inline mt-3 mb-0">
                                <h3 className="link-fx text-dual fs-sm fw-semibold text-uppercase">Welcome  <span className='highlighted-text'>{userName} !</span></h3>
                            </div>
                        </span>
                    </a>
                </div>
                <div className="space-x-1 d_flex">
                    <button onClick={logoutUser} type="button" className="btn btn-sm btn-alt-secondary">
                        <span className="nav-main-link-name">Logout</span>
                        <i className="nav-main-link-icon fa fa-sign-out-alt"></i>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default DashboardHeader;