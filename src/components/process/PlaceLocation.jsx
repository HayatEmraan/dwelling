import React from "react";
import { Map } from "react-map-gl";
import GeocoderControl from "./GeocoderControl";

const PlaceLocation = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-5">
      <h2 className="font-semibold text-4xl">
        Which of these best describes your place?
      </h2>
      <p>
        Your address is only shared with the guests after they have make a
        reservation
      </p>
      <div className="h-[400px] w-[700px]">
        <Map
          initialViewState={{
            longitude: -79.4512,
            latitude: 43.6568,
            zoom: 13,
          }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
        >
          <GeocoderControl
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
            position="top-left"
            marker={true}
            onLoading={() => {}}
            onResults={() => {}}
            onResult={() => {}}
            onError={() => {}}
          />
        </Map>
      </div>
    </div>
  );
};

export default PlaceLocation;
