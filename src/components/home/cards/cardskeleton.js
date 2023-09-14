import React from "react";

const CardSkeleton = ({ data }) => {
  return (
    <div className="max-w-[1560px] mx-auto space-y-4">
      <div className="px-5 md:px-4 lg:px-3 xl:px-2">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 mb-4">
          {data?.data?.map((card, index) => (
            <li key={index} className="relative animate-pulse">
              <div className="aspect-square h-[270px] w-full overflow-hidden rounded-lg bg-gray-300"></div>
              <p className="mt-2 h-4 w-1/2 rounded-lg bg-gray-600"></p>
              <p className="mt-2 block h-4 rounded-lg bg-gray-600 text-sm font-medium"></p>
              <p className="mt-2 block h-4 rounded-lg bg-gray-600 text-sm font-medium"></p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CardSkeleton;
