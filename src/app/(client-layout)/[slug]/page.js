import Cards from "@/components/home/cards/cards";
import CategoriesComponent from "@/components/home/categories/categories";
import Toggle from "@/components/home/toggle/Toggle";
import React from "react";

const FilterPage = async ({ searchParams }) => {
  const { filter } = searchParams;
  const res = await fetch(
    `http://localhost:5000/api/v1/category/rooms?category=${filter}`,
    {
      cache: "no-store",
    }
  );
  const cardData = await res.json();
  return (
    <div>
      <CategoriesComponent />
      <Toggle />
      <Cards data={cardData.data} />
    </div>
  );
};

export default FilterPage;
