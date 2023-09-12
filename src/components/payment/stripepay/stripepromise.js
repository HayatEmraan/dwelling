import React from "react";
import { StripeIntent, StripePay } from "@/utils/async/guest/payment/stripe";
import StripeElement from "./stripeelement";

const StripePromise = async ({ rm, checkIn, checkOut, guest }) => {
  const stripePromise = await StripePay();
  const clientSecret = await StripeIntent(rm, checkIn, checkOut, guest);
  return (
    <>
      <StripeElement
        stripePromise={stripePromise}
        rm={rm}
        clientSecret={clientSecret}
      />
    </>
  );
};

export default StripePromise;
