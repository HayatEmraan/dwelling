import React from "react";
import Cards from "./cards";

const FetchCards = async () => {
  const res = await fetch(
    "https://dwelling-bright-server.vercel.app/api/v1/getrooms",
    {
      cache: "no-store",
    }
  );
  const cardData = await res.json();
  return (
    <>
      <Cards data={cardData.data} />
    </>
  );
};

export default FetchCards;
