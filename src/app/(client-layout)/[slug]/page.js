import CategoriesComponent from "@/components/home/categories/categories";
import Toggle from "@/components/home/toggle/Toggle";
import React from "react";

const FilterPage = async ({ searchParams }) => {
  return (
    <div>
      <CategoriesComponent />
      <Toggle />
    </div>
  );
};

export default FilterPage;
