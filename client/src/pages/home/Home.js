import React, { Suspense } from 'react';
import LoadingScreen from '../../components/LoadingScreen';
import { Banner} from "./banner"
import { CoreValues } from "./coreValues"
import { Faqs } from "./faqs"
import { ContactUs } from './contactUs';
const SplineHome = React.lazy(()=> import('../../components/canvas/SplineHome'))

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