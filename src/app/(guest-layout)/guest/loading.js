"use client";
import { Controls, Player } from "@lottiefiles/react-lottie-player";
import React from "react";

const Loading = () => {
  return (
    <>
      <div className="flex justify-center items-center w-full h-screen">
        <Player
          autoplay
          loop
          src="https://raw.githubusercontent.com/HayatEmraan/dwelling/dev/public/loader/loading.json"
          style={{ height: "300px", width: "300px" }}
        >
          <Controls
            visible={false}
            buttons={["play", "repeat", "frame", "debug"]}
          />
        </Player>
      </div>
    </>
  );
};

export default Loading;
