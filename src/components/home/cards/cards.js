import { AiFillStar } from "react-icons/ai";

// import required modules
import React from "react";
import HeartButton from "../heartbutton/heartbutton";
import SliderComponent from "./slider";
import moment from "moment";
import PriceCard from "./priceCard";

const Cards = async ({
  filter,
  location,
  start,
  end,
  adults,
  childrens,
  infants,
  pets,
}) => {
  const search =
    location || start || end || adults || childrens || infants || pets;

  const res = await fetch(
    `${
      (filter &&
        `https://dwelling-bright-server.vercel.app/api/v1/category/rooms?category=${filter}`) ||
      (search &&
        `https://dwelling-bright-server.vercel.app/api/v1/getsearch?start=${start}&end=${end}${
          adults ? `&adults=${adults}` : ""
        }${childrens ? `&children=${childrens}` : ""}${
          infants ? `&infants=${infants}` : ""
        }${location ? `&location=${location}` : ""}${
          pets ? `&pets=${pets}` : ""
        }`) ||
      "https://dwelling-bright-server.vercel.app/api/v1/getrooms"
    }`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();

  return (
    <div className="container mx-auto space-y-4">
      <div className="px-5 md:px-4 lg:px-3 xl:px-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 mb-4">
          {/* this is main one */}
          {data?.data?.map((room, index) => {
            return (
              <a
                key={index}
                href={`/details/${room?._id}`}
                className="block rounded-lg p-4 shadow-sm shadow-indigo-100 group"
              >
                <div className="flex flex-col gap-2 w-full">
                  <div className="w-full relative overflow-hidden rounded-xl">
                    <SliderComponent images={room.images} />
                    <div className="absolute top-3 z-10 right-3">
                      <HeartButton />
                    </div>
                  </div>
                  <div className="mt-2">
                    <dl>
                      <div className="flex flex-row items-center gap-1 justify-between">
                        <PriceCard room={room} />
                        <p className="text-sm bg-gradient-to-r from-sky-400 via-rose-400 to-lime-400 bg-clip-text text-transparent">
                          {room?.category?.type}
                        </p>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="font-semibold text-lg">
                          {room?.name}
                        </div>
                        <div className="text-md flex items-center">
                          {room?.rating && <AiFillStar />}
                          {room?.rating}
                        </div>
                      </div>
                      <div className="font-light text-neutral-500 -my-2">
                        {moment(room?.dateRange?.startDate).format("MMM DD")} -{" "}
                        {moment(room?.dateRange?.endDate).format("MMM DD")}
                      </div>
                    </dl>
                    <div className="mt-6 flex items-center justify-between text-xs overflow-x-auto no-scrollbar">
                      <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                        <svg
                          className="h-4 w-4 text-indigo-700"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                          />
                        </svg>
                        <div className="mt-1.5 sm:mt-0">
                          <p className="text-gray-500">Guests</p>
                          <p className="font-medium">
                            {room?.availability?.guests} spaces
                          </p>
                        </div>
                      </div>
                      <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                        <svg
                          className="h-4 w-4 text-indigo-700"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                          />
                        </svg>
                        <div className="mt-1.5 sm:mt-0">
                          <p className="text-gray-500">Bathroom</p>
                          <p className="font-medium">
                            {room?.availability?.baths} rooms
                          </p>
                        </div>
                      </div>
                      <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                        <svg
                          className="h-4 w-4 text-indigo-700"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                          />
                        </svg>
                        <div className="mt-1.5 sm:mt-0">
                          <p className="text-gray-500">Bedroom</p>
                          <p className="font-medium">
                            {room?.availability?.bedrooms} rooms
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cards;
