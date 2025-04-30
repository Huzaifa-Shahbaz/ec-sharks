import React, { useEffect } from 'react';
import '../../styles/codebase.css';
import DashboardFooter from './DashboardFooter'
import DashboardHeader from './DashboardHeader';
import SideNav from './SideNav';
import { useNavigate } from 'react-router-dom';
import useApi from '../hooks/useApi';
import { jwtDecode } from "jwt-decode";


const DashboardLayout = ({ children }) => {

    const navigate = useNavigate()
    const { data: logoutResponse, errorMsg: loggingOutErr, postData: logoutUser } = useApi();

    useEffect(() => {
        if (logoutResponse?.status === 200) {
            localStorage.removeItem("token");
            navigate('/')
            window.location.reload();
        }
    }, [logoutResponse])

    const getUserFromToken = () => {
        const token = localStorage.getItem("token");
        if (!token) return null;

        try {
            const decoded = jwtDecode(token);
            return decoded;
        } catch (error) {
            console.error("Invalid token", error);
            return null;
        }
    };
    const userInfo = getUserFromToken();


    const handleLogout = () => {
        logoutUser('/users/logout');
    }

    return (
        <div id="page-container" className="sidebar-o enable-page-overlay side-scroll page-header-modern main-content-boxed dashboard-layout">
            <SideNav />
            <DashboardHeader
                userName={userInfo?.firstName || ''}
                logoutUser={handleLogout}
            />
            <main id="main-container">
                <div className="content">{children}</div>
            </main>
            <DashboardFooter />
        </div>
    );
};

export default DashboardLayout;