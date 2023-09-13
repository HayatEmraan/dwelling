import StripePromise from "@/components/payment/stripepay/stripepromise";
import React from "react";

const StripePage = ({ searchParams }) => {
  const { rm, checkIn, checkOut, guest } = searchParams;

  return (
    <>
      <StripePromise rm={rm} checkIn={checkIn} checkOut={checkOut} guest={guest} />
    </>
  );
};

export default StripePage;
