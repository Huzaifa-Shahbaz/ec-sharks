import React from 'react';

const DashboardContentHeading = ({ heading, subHeading }) => {
    return (
        <div className="block block-rounded">
            <div className="block-content block-content-full overflow-x-auto">
                <div className="py-3 text-center">
                    <h2 className="h3 fw-extrabold mb-1">{heading}</h2>
                    <h3 className="fs-sm fw-medium text-muted mb-0">{subHeading}</h3>
                </div>
            </div>
        </div>
    );
};

export default DashboardContentHeading;