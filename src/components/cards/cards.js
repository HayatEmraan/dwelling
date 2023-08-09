import Link from "next/link";
import React from "react";
import HeartButton from "../heartButton/heartButton";

const Cards = async () => {
  const res = await fetch(
    "https://raw.githubusercontent.com/HayatEmraan/AirCNC/main/public/rooms.json"
  );
  const jsonData = await res.json();
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 mb-4">
        {jsonData.map((room, index) => {
          return (
            <Link
              key={index}
              href={`/room/details/${1}`}
              className="col-span-1 cursor-pointer group"
            >
              <div className="flex flex-col gap-2 w-full">
                <div
                  className="
            aspect-square 
            w-full 
            relative 
            overflow-hidden 
            rounded-xl
          "
                >
                  <img
                    className="
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition
            "
                    src={room.image}
                    alt="Room"
                  />
                  <div
                    className="
            absolute
            top-3
            right-3
          "
                  >
                    <HeartButton />
                  </div>
                </div>
                <div className="font-semibold text-lg">{room.location}</div>
                <div className="font-light text-neutral-500">
                  5 nights . {room.dateRange}
                </div>
                <div className="flex flex-row items-center gap-1">
                  <div className="font-semibold">$ {room.price}</div>
                  <div className="font-light">night</div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
