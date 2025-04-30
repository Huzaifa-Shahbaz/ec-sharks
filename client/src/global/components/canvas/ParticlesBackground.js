import React from "react";
import { loadFull } from "tsparticles";
import ParticlesConfig from '../../../particlesjs-config'

const Particles = React.lazy(() => import("react-tsparticles"))


const ParticlesBackground = () => {

    const particlesInit = async (engine) => await loadFull(engine)

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={ParticlesConfig}
        />
    );
}

export default ParticlesBackground;