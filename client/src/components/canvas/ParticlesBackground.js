import React from "react";
import { loadFull } from "tsparticles";
import ParticlesConfig from "../../particlesjs-config"
import Particles from "react-tsparticles"


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