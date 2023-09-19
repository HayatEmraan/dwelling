"use client";
import { Pannellum } from "pannellum-react";
import React from "react";

const Image3D = ({ singleImg }) => {
  return (
    <>
      <Pannellum
        width="100%"
        height="450px"
        image={singleImg}
        pitch={10}
        yaw={180}
        hfov={110}
        autoLoad
        autoRotate={2}
        showZoomCtrl={true}
        onMouseup={(event) => {}}
      >
        <Pannellum.Hotspot
          type="custom"
          pitch={12.41}
          yaw={117.76}
          handleClick={(evt, name) => console.log(name)}
          name="Hotspot 1"
        />
      </Pannellum>
    </>
  );
};

export default Image3D;
