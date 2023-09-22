import Image from "next/image";
import React from "react";

const HouseRules = ({ data }) => {
  return (
    <div className="my-5">
      {/* House Rules part */}
      <div className="flex justify-between items-center my-5">
        <div>
          <h2 className="font-bold text-xl">House Rules</h2>
          <p>Modern Resort takes special request-add in the next step!</p>
        </div>
        <div></div>
      </div>
      {/* House Rules Bottom part */}
      <div className="border p-5">
        {data.house_rules.map((rules, index) => (
          <div className="grid grid-cols-3 border-b py-5" key={index}>
            <div className="flex col-span-1 items-center">
              <Image
                src={rules.image}
                width={20}
                height={20}
                className="mr-2"
              ></Image>
              <p className="w-1/3">{rules.name}</p>
            </div>
            <div className="col-span-2 gap-2 whitespace-nowrap overflow-x-auto no-scrollbar">
              {rules?.time && <p>{rules?.time}</p>}
              {rules?.des && <p>{rules?.des}</p>}
            </div>
          </div>
        ))}
        <div className="grid grid-cols-3 border-b py-5">
          <div className="col-span-1">
            <p>Payment <span className="hidden lg:inline">methods</span></p>
          </div>
          <div className="flex col-span-2">
            {data?.payment_methods?.map((pay, index) => (
              <div key={index} className="lg:flex lg:pr-3 items-center">
                <Image
                  src={pay?.image}
                  width={30}
                  height={30}
                  alt={pay?.providerName}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseRules;
