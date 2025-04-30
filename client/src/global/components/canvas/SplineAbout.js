import React from "react";
import SectionHeading from "../../customComponents/SectionHeading";
const Spline = React.lazy(() => import("@splinetool/react-spline"));


const SplineAbout = () => {

  return (
    <div className="spline-canvas about">
      <SectionHeading noAnimation={true} heading={'About EcSharks'} />
      <Spline scene="https://prod.spline.design/Ff18b8dHNVDfy8iX/scene.splinecode" />
    </div>
  );
};

export default SplineAbout;
