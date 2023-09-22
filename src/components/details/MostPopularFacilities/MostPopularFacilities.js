import Image from "next/image";
import React from "react";

const MostPopularFacilities = ({ data }) => {
  return (
    <div className="my-3">
      <h2 className="font-bold">Most Popular Facilities</h2>
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-3 mt-5">
        {data.popular_facilities.map((facilities, index) => (
          <div key={index} className="flex items-center">
            <Image
              className="mr-2"
              src={facilities.image}
              width={20}
              height={20}
            ></Image>
            <p className="flex">{facilities.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostPopularFacilities;
