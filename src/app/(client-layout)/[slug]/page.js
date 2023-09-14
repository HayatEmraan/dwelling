import Cards from "@/components/home/cards/cards";
import CardSkeleton from "@/components/home/cards/cardskeleton";
import CategoriesComponent from "@/components/home/categories/categories";
import Toggle from "@/components/home/toggle/Toggle";
import React, { Suspense } from "react";

const FilterPage = async ({ searchParams }) => {
  const { filter } = searchParams;
  const res = await fetch(
    `https://dwelling-bright-server.vercel.app/api/v1/category/rooms?category=${filter}`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  return (
    <div>
      <CategoriesComponent />
      <Toggle />
      <Suspense fallback={<CardSkeleton data={data} />}>
        <Cards filter={filter} />
      </Suspense>
    </div>
  );
};

export default FilterPage;
