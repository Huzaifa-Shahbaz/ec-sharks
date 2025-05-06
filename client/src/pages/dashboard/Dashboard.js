import React from 'react';
import DashboardLayout from '../../dashboardLayout';
import DashboardContentHeading from '../../components/DashboardContentHeading';

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