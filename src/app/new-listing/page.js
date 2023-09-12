"use client";
import FloorPlan from "@/components/process/FloorPlane";
import ListingPlaceType from "@/components/process/ListingPlaceType";
import ListingTypeSelector from "@/components/process/ListingTypeSelector";
import Overview from "@/components/process/Overview";
import Photos from "@/components/process/Photos";
import PlaceDetails from "@/components/process/PlaceDetails";
import PlaceLocation from "@/components/process/PlaceLocation";
import ProcessAmeneties from "@/components/process/ProcessAmeneties";
import StepOneStarter from "@/components/process/StepOneStarter";
import Availability from "@/components/process/availability";
import Description from "@/components/process/description";
import ListingCreated from "@/components/process/listingCreated";
import Price from "@/components/process/price";
import Title from "@/components/process/title";
import { userAppStore } from "@/store/store";
import { Libre_Bodoni } from "next/font/google";
import Link from "next/link";
import React, { useState } from "react";

// google fonts
const bodoni = Libre_Bodoni({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const NewListingPage = () => {
  const [step, setStep] = useState(0);
  const {
    locationType,
    placeType,
    mapData,
    locationData,
    placeSpace,
    searchPlaceSpace,
    selectionType,
    placeAmeneites,
    title,
    description,
    price,
    taxes,
    photos,
  } = userAppStore();

  console.log(searchPlaceSpace);
  const getComponent = () => {
    switch (step) {
      case 0:
        return <Overview />;
      case 1:
        return <StepOneStarter />;
      case 2:
        return <ListingTypeSelector />;
      case 3:
        return <ListingPlaceType />;
      case 4:
        return <PlaceLocation />;
      case 5:
        return <PlaceDetails />;
      case 6:
        return <FloorPlan />;
      case 7:
        return <Availability />;
      case 8:
        return <ProcessAmeneties />;
      case 9:
        return <Title />;
      case 10:
        return <Description />;
      case 11:
        return <Price />;
      case 12:
        return <Photos />;
      case 13:
        return <ListingCreated />;
    }
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  return (
    <div className="grid grid-rows-new-listing h-[100vh]">
      <header className="flex items-center px-20 justify-between">
        <div className="cursor-pointer">
          <Link
            href="/"
            className={`flex-none text-2xl font-bold dark:text-white ${bodoni.className} bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent`}
            aria-label="Brand"
          >
            Dwelling
          </Link>
        </div>
        {step <= 13 && (
          <button className="border border-gray-300 px-3 py-2 rounded-full font-semibold hover:border-gray-700 cursor-pointer">
            Save & Exit
          </button>
        )}
      </header>

      {getComponent()}

      <footer
        className={`flex items-center px-20 pb-4 border-t-4 border-t-gray-300 ${
          step > 0 ? "justify-between" : "justify-end"
        }`}
      >
        {step >= 1 && (
          <button
            onClick={handlePrevious}
            className="text-dwelling-light-gray py-3 mt-5 px-10 text-base font-medium hover:bg-gray-200 underline rounded-md cursor-pointer"
          >
            Back
          </button>
        )}
        {step !== 0 ? (
          <button
            onClick={handleNext}
            disabled={
              step === 2 && locationType === undefined
                ? true
                : false || (step === 3 && placeType === undefined)
                ? true
                : false || (step === 4 && mapData === undefined)
                ? true
                : false || (step === 5 && locationData === undefined)
                ? true
                : false || (step === 6 && placeSpace === undefined)
                ? true // problem start from this line
                : false || (step === 7 && searchPlaceSpace?.adults != 0)
                ? false
                : true || (step === 8 && placeAmeneites.length > 0)
                ? false
                : true || (step === 9 && title.length > 10)
                ? false
                : true || (step === 10 && description.length > 50)
                ? true
                : false || (step === 11 && price > 0)
                ? false
                : true || (step === 12 && photos.length > 4)
                ? false
                : true
            }
            className="bg-[#222222] py-3 mt-5 px-5 text-base font-medium text-white rounded-md cursor-pointer disabled:bg-red-500"
          >
            Next
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="bg-blue-600 py-3 mt-5 px-5 text-base font-medium text-white rounded-md cursor-pointer"
          >
            Get Started
          </button>
        )}
      </footer>
    </div>
  );
};

export default NewListingPage;
