// import required modules

import React, { Suspense } from "react";
import Cards from "../home/cards/cards";
import CardSkeleton from "../home/cards/cardskeleton";

const SearchPage = async ({
  location,
  start,
  end,
  adults,
  childrens,
  infants,
  pets,
}) => {
  const res = await fetch(
    `https://dwelling-bright-server.vercel.app/api/v1/getsearch?start=${start}&end=${end}${
      adults ? `&adults=${adults}` : ""
    }${childrens ? `&children=${childrens}` : ""}${
      infants ? `&infants=${infants}` : ""
    }${location ? `&location=${location}` : ""}${pets ? `&pets=${pets}` : ""}`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();

  return (
    <div className="bg-white dark:bg-gray-900">
      <Suspense  fallback={<CardSkeleton data={data} />}>
      <Cards
        location={location}
        start={start}
        end={end}
        adults={adults}
        childrens={childrens}
        infants={infants}
        pets={pets}
        
      />
    </Suspense>
    </div>
  );
};

export default SearchPage;
