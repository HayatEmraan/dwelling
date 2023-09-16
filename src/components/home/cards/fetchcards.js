import React, { Suspense } from "react";
import Cards from "./cards";
import CardSkeleton from "./cardskeleton";

const FetchCards = async () => {
  const res = await fetch(
    "https://dwelling-bright-server.vercel.app/api/v1/getrooms",
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  return (
    <>
      <Suspense fallback={<CardSkeleton data={data} />}>
        <Cards />
      </Suspense>
    </>
  );
};

export default FetchCards;
