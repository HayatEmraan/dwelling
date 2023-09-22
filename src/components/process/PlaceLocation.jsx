import { userAppStore } from "@/store/store";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
const DetailsMapIndex = dynamic(
  () => import("../details/detailMap/DetailsMap"),
  {
    ssr: false,
  }
);

const PlaceLocation = () => {
  const [hasLocationPermission, setHasLocationPermission] = useState(true);
  const { setMapData } = userAppStore();
  const [location, setLocation] = useState({
    lat: 23.807834697453142,
    lng: 90.41453565758886,
  });
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        setMapData({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        setHasLocationPermission(true);
      },
      (error) => {
        setHasLocationPermission(false);
      }
    );
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h2 className="font-semibold text-4xl">
        Which of these best describes your place?
      </h2>
      {hasLocationPermission ? (
        <>
          <p>
            Your address is only shared with the guests after they have made a
            reservation
          </p>
          <DetailsMapIndex location={location} />
        </>
      ) : (
        <>
          <p className="text-red-400">
            Please allow location permission to enter the application.
          </p>
          <img src="/img/location/location.jpg" />
        </>
      )}
    </div>
  );
};

export default PlaceLocation;
