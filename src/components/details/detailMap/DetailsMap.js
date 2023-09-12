"use client";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./DetailsMap.css";
import { useEffect, useState } from "react";
import { userAppStore } from "@/store/store";

const DetailsMap = ({ location }) => {
  const position = [location?.lat, location?.lng];
  const { addressInfo, setAddressInfo } = userAppStore();
  const [refreshInfo, setRefreshInfo] = useState(location);
  const customIcon = L.icon({
    iconUrl: "/icons/location_icon.png",
    iconSize: [32, 32],
  });
  useEffect(() => {
    fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${location?.lat}&lon=${location?.lng}&format=json`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.display_name) {
          const address = data?.display_name;
          const addLocation = data?.address;
          setAddressInfo({
            lat: location?.lat,
            lng: location?.lng,
            displayName: address,
            location: {
              city: addLocation?.town,
              state: addLocation?.state_district,
              division: addLocation?.state,
              country: addLocation?.country,
            },
          });
        } else {
          console.log("Unable to retrieve address information.");
        }
      })
      .catch((error) => {
        console.error("Error fetching address:", error);
      });
  }, [refreshInfo]);
  return (
    <>
      <div className="border-t mt-10">
        <h1 className="text-2xl my-5">Where you will be</h1>
        <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={customIcon}>
            <Popup>{addressInfo?.displayName}</Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  );
};

export default DetailsMap;
