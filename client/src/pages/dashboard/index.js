import React from 'react';
import DashboardLayout from '../../global/dashboardLayout';
import DashboardContentHeading from '../../global/customComponents/DashboardContentHeading';

const Dashboard = () => {
    return (
        <DashboardLayout>
            <DashboardContentHeading
                heading={'Dashboard'}
                subHeading={''}
            />
        </DashboardLayout>
    );
};

export default Dashboard;