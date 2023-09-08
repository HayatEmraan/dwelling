// import required modules

import React from "react";
import Cards from "../home/cards/cards";

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

  const carddata = await res.json();

  return <Cards data={carddata.data} />;
};

export default SearchPage;
