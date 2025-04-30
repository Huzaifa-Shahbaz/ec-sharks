import React, { Suspense } from 'react';
import LoadingScreen from '../../global/components/LoadingScreen';
import Banner from "./Banner"
import CoreValues from "./CoreValues"
import Faqs from "./Faqs"
import ContactUs from "./ContactUs"
const SplineHome = React.lazy(()=> import('../../global/components/canvas/SplineHome'))


const Home = () => {

    return (
        <>
            <Suspense fallback={<LoadingScreen />}>
                <SplineHome />
            </Suspense>
            <Banner />
            <CoreValues />
            <Faqs />
            <ContactUs />
        </>
    );
};

export default Home;