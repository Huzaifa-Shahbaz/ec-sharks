import React, { memo } from "react";
const Spline = React.lazy(() => import("@splinetool/react-spline"));


const SplineHome = memo(() => {
  return (
    <div className="spline-canvas">
      <Spline scene="https://prod.spline.design/UrUF9JAIGrHhoHIm/scene.splinecode" />
    </div>
  );
})

export default SplineHome;