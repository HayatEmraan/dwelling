// import React from "react";
// const CategoriesComponent = async () => {
//   const res = await fetch(
//     "https://raw.githubusercontent.com/HayatEmraan/dwelling/main/public/header/categories.json"
//   );
//   const categories = await res.json();
//   return (
//     <div className="sticky top-16 z-30 shadow-md bg-white">
//       <div className="max-w-[1560px] mx-auto space-y-">
//         <div className="flex justify-between mt-4 overflow-x-auto px-5 md:px-4 lg:px-3 xl:px-2 no-scrollbar">
//           {categories.map((category, index) => (
//             <div
//               key={index}
//               className={`flex flex-col items-center justify-center gap-2 p-3 hover:text-neutral-800 transition cursor-pointer`}
//             >
//               <img
//                 className="w-8"
//                 src="https://i.ibb.co/hLmtc8m/icons8-cabin-64.pnghttps://i.ibb.co/XzHRM3H/icons8-cabin-32.png"
//                 alt=""
//               />
//               <div className="text-sm font-medium">{category.label}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CategoriesComponent;

"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import { FaSkiing } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";
import { MdOutlineVilla } from "react-icons/md";
import CategoryBox from "./category";

export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "This property is close to the beach!",
  },
  {
    label: "Windmills",
    icon: GiWindmill,
    description: "This property is has windmills!",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "This property is modern!",
  },
  {
    label: "Countryside",
    icon: TbMountain,
    description: "This property is in the countryside!",
  },
  {
    label: "Pools",
    icon: TbPool,
    description: "This is property has a beautiful pool!",
  },
  {
    label: "Islands",
    icon: GiIsland,
    description: "This property is on an island!",
  },
  {
    label: "Lake",
    icon: GiBoatFishing,
    description: "This property is near a lake!",
  },
  {
    label: "Skiing",
    icon: FaSkiing,
    description: "This property has skiing activies!",
  },
  {
    label: "Castles",
    icon: GiCastle,
    description: "This property is an ancient castle!",
  },
  {
    label: "Caves",
    icon: GiCaveEntrance,
    description: "This property is in a spooky cave!",
  },
  {
    label: "Camping",
    icon: GiForestCamp,
    description: "This property offers camping activities!",
  },
  {
    label: "Arctic",
    icon: BsSnow,
    description: "This property is in arctic environment!",
  },
  {
    label: "Desert",
    icon: GiCactus,
    description: "This property is in the desert!",
  },
  {
    label: "Barns",
    icon: GiBarn,
    description: "This property is in a barn!",
  },
  {
    label: "Lux",
    icon: IoDiamond,
    description: "This property is brand new and luxurious!",
  },
];

const CategoriesComponent = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();
  const isMainPage = pathname === "/";

  if (!isMainPage) {
    return null;
  }

  return (
    <div className="shadow-md bg-white sticky top-16 z-30">
      <div className="max-w-[1560px] mx-auto">
        <div
          className="
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
        >
          {categories.map((item) => (
            <CategoryBox
              key={item.label}
              label={item.label}
              icon={item.icon}
              selected={category === item.label}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesComponent;
