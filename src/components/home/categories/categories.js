"use client";
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
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { listingTypes } from "@/new-listing-data/ListingTypes";
import Toggle from "../toggle/Toggle";

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
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const searchParams = useSearchParams();
  const category = searchParams.get("filter");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible]);

  return (
    <div
      id="navBar"
      className={`bg-white  dark:bg-gray-900  sticky top-24 md:top-14 z-20 transition-transform ${
        visible
          ? "translate-y-0 opacity-100 shadow-sm md:shadow-none"
          : "-translate-y-full md:-translate-y-0 shadow-sm opacity-0 md:opacity-100"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between pb-1">
          <div
            className="
          flex
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
          no-scrollbar
          flex-grow
          gap-4
          dark:invert
        "
          >
            {listingTypes.map((navCategory) => (
              <CategoryBox
                key={navCategory?.name}
                label={navCategory?.name}
                icon={navCategory?.svgPath}
                selected={category === navCategory?.name}
              />
            ))}
          </div>
          <Toggle />
        </div>
      </div>
    </div>
  );
};

export default CategoriesComponent;
