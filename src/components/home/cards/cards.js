import { AiFillStar } from "react-icons/ai";

// import required modules

import Link from "next/link";
import React from "react";
import HeartButton from "../heartbutton/heartbutton";
import SliderComponent from "./slider";
import moment from "moment";

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
    <div className="max-w-[1560px] mx-auto space-y-4">
      <div className="px-5 md:px-4 lg:px-3 xl:px-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 mb-4">
          {/* this is main one */}
          {data?.data?.map((room, index) => {
            return (
              <Link
                key={index}
                href={`/details/${room?._id}`}
                className="col-span-1 cursor-pointer group"
              >
                <div className="flex flex-col gap-2 w-full">
                  <div className="w-full relative overflow-hidden rounded-xl">
                    <SliderComponent images={room?.images} />
                    <div className="absolute top-3 z-10 right-3">
                      <HeartButton />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="font-semibold text-lg">{room?.name}</div>
                    <div className="text-md flex items-center">
                      {room?.rating && <AiFillStar />}
                      {room?.rating}
                    </div>
                  </div>
                  <div className="font-light text-neutral-500 -my-2 flex justify-between items-center">
                    {moment(room?.dateRange?.startDate).format("MMM DD")} -{" "}
                    {moment(room?.dateRange?.endDate).format("MMM DD")}
                    <p className="text-sm bg-gradient-to-r from-sky-400 via-rose-400 to-lime-400 bg-clip-text text-transparent">
                      {room?.category?.type}
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-1">
                    <div className="font-semibold">
                      $ {room?.price + room?.taxes}
                    </div>
                    <div className="font-light">night</div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cards;
