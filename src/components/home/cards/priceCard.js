"use client";
import { toggleStore } from "@/store/slices/togglestore";
import React from "react";

const PriceCard = ({ room }) => {
  const { isToggled } = toggleStore();
  return (
    <div className="flex flex-row items-center gap-1">
      <div className="font-semibold">
        ${" "}
        {isToggled ? (
          <>
            {room.price}{" "}
            <span className="line-through text-[#9e9e9e]">
              {room.taxes > 0 && room?.taxes}
            </span>
          </>
        ) : (
          <>{room?.price + room?.taxes}</>
        )}
      </div>
      <div className="font-light">/ night</div>
    </div>
  );
};

export default PriceCard;
