"use client";
import React from "react";
import { Controls, Player } from "@lottiefiles/react-lottie-player";
export default function Loading() {
  return (
    <div className="flex justify-center items-center w-full min-h-screen">
      <Player
        autoplay
        loop
        src="loader/loading.json"
        style={{ height: "300px", width: "300px" }}
      >
        <Controls
          visible={false}
          buttons={["play", "repeat", "frame", "debug"]}
        />
      </Player>
    </div>
  );
}
