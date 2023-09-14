import React from "react";
import SearchPage from "@/components/searchPage/SearchPage";
import CategoriesComponent from "@/components/home/categories/categories";
import Toggle from "@/components/home/toggle/Toggle";
const SearchResult = async ({ searchParams }) => {
  const { location, start, end, adults, childrens, infants } = searchParams;

  return (
    <div>
      <CategoriesComponent />
      <Toggle />
      <SearchPage
        location={location}
        start={start}
        end={end}
        adults={adults}
        childrens={childrens}
        infants={infants}
      />
    </div>
  );
};

export default SearchResult;
