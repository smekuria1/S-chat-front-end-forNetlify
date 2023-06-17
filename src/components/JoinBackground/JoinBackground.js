import Particles, { ISourceOptions } from "react-tsparticles";
import { loadFull } from "tsparticles";
import { loadSeaAnemonePreset } from "tsparticles-preset-sea-anemone";

import React from "react";

const JoinBackground = () => {
  const particlesInit = async (main) => {
    console.log(main);

    await loadSeaAnemonePreset(main);
  };
  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = {
    preset: "seaAnemone",
  };

  return (
    <Particles
      id="joinBackground"
      options={options}
      init={particlesInit}
      loaded={particlesLoaded}
    />
  );
};

export default JoinBackground;
