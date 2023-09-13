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
import { insertroom } from "@/utils/async/host/insertroom";
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
    addressInfo,
    placeSpace,
    searchPlaceSpace,
    placeAmeneites,
    title,
    description,
    price,
    taxes,
    photos,
  } = userAppStore();

  const Popular = placeAmeneites?.filter(
    (amenetiy) => amenetiy?.popular === true
  );

  const NonPopular = placeAmeneites?.filter(
    (amenetiy) => amenetiy?.popular !== true
  );

  const startDate = new Date();
  const endDate = new Date();

  if (startDate.toDateString() === endDate.toDateString()) {
    endDate.setDate(endDate.getDate() + 15);
  }

  function getRandomTime() {
    const hours = Math.floor(Math.random() * 12) + 1;
    const minutes = Math.floor(Math.random() * 60);
    const ampm = Math.random() < 0.5 ? "AM" : "PM";
    const formattedHours = hours.toString().padStart(2, "0");
    const formattedMinutes = minutes.toString().padStart(2, "0");
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  }

  getRandomTime();

  const houseRules = [
    {
      image:
        "https://res.cloudinary.com/dkozp31ij/image/upload/v1692692851/zeiqcd82orjubexz6wgg.svg",
      name: "Check in",
      time: getRandomTime(),
    },
    {
      image:
        "https://res.cloudinary.com/dkozp31ij/image/upload/v1692692851/wfbjzyil59ubwec0nias.svg",
      name: "Check out",
      time: getRandomTime(),
    },
    {
      image:
        "https://res.cloudinary.com/dkozp31ij/image/upload/v1692692851/n8c3nwnxeyiwdjop8gt4.svg",
      name: "Cancellation",
      des: "Free cancellation up to 7 days before arrival.",
    },
    {
      image:
        "https://res.cloudinary.com/dkozp31ij/image/upload/v1692692851/ywdokjfsev4rkhik9d1s.svg",
      name: "Children",
      des: "Children are welcome. Extra beds available.",
    },
    {
      image:
        "https://res.cloudinary.com/dkozp31ij/image/upload/v1692692851/pbapmple7pyfok2jbklg.svg",
      name: "Age",
      des: "No age restrictions.",
    },
  ];

  const paymentMethods = [
    {
      providerName: "Master Card",
      accepted: true,
      image:
        "https://res.cloudinary.com/dkozp31ij/image/upload/v1693244098/gdvhlkdaefjdliwrl8vy.svg",
    },
    {
      providerName: "VISA Card",
      accepted: true,
      image:
        "https://res.cloudinary.com/dkozp31ij/image/upload/v1693244098/bcmtypdecdugr6bipzgx.svg",
    },
    {
      providerName: "Discover Card",
      accepted: false,
      image:
        "https://res.cloudinary.com/dkozp31ij/image/upload/v1693244098/hz989hhvwy2dj8hlpcsc.png",
    },
    {
      providerName: "American Express",
      accepted: true,
      image:
        "https://res.cloudinary.com/dkozp31ij/image/upload/v1693244098/s4qzhx00abdlxf30rfem.svg",
    },
    {
      providerName: "Diners Club",
      accepted: false,
      image:
        "https://res.cloudinary.com/dkozp31ij/image/upload/v1693244098/tbnaqxc337ghnagqcwgz.svg",
    },
    {
      providerName: "UnionPay",
      accepted: true,
      image:
        "https://res.cloudinary.com/dkozp31ij/image/upload/v1693244280/ehqq4ylkzwjpdtqdtw2j.png",
    },
    {
      providerName: "Cash on Arrival",
      accepted: false,
      image:
        "https://res.cloudinary.com/dkozp31ij/image/upload/v1693244099/s1jytaczagoti5ql5ftj.svg",
    },
  ];

  const finalListing = {
    name: title,
    location: addressInfo?.location,
    category: {
      name: locationType?.name,
      type: placeType?.title,
    },
    lat: addressInfo?.lat,
    lng: addressInfo?.lng,
    capacity: {
      adults: searchPlaceSpace?.adults,
      children: searchPlaceSpace?.childrens,
      infants: searchPlaceSpace?.infants,
    },
    availability: {
      bedrooms: placeSpace?.beds,
      baths: placeSpace?.bathrooms,
      guests: placeSpace?.guests,
    },
    images: photos,
    description: description,
    price: price,
    taxes: taxes,
    dateRange: {
      startDate: startDate?.toISOString(),
      endDate: endDate?.toISOString(),
    },
    popular_facilities: Popular,
    facilities: NonPopular,
    house_rules: houseRules,
    payment_methods: paymentMethods,
    reviews: [],
  };

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
  const handleListing = async () => {
    const result = await insertroom(finalListing);
    if (result?.data?.insertedId) {
      setStep(step + 1);
    }
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
      </header>

      {getComponent()}

      <footer
        className={`flex items-center ${
          step === 13 ? "hidden" : ""
        } px-20 pb-4 border-t-4 border-t-gray-300 ${
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
            onClick={step === 12 ? handleListing : handleNext}
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
                ? true
                : false || (step === 7 && searchPlaceSpace?.adults === 0)
                ? true
                : false || (step === 8 && placeAmeneites.length === 0)
                ? true
                : false || (step === 9 && title.length <= 10)
                ? true
                : false || (step === 10 && description.length <= 50)
                ? true
                : false || (step === 11 && price <= 0)
                ? true
                : false || (step === 12 && photos.length <= 4)
                ? true
                : false
            }
            className="bg-[#222222] py-3 mt-5 px-5 text-base font-medium text-white rounded-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {step === 12 ? "Submit" : "Next"}
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
