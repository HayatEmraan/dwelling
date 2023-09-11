import React from "react";
import { StripeIntent, StripePay } from "@/utils/async/guest/payment/stripe";
import StripeElement from "./stripeelement";

const StripePromise = async () => {
  const stripePromise = await StripePay();
  const clientSecret = await StripeIntent();
  return (
    <>
      <StripeElement
        stripePromise={stripePromise}
        clientSecret={clientSecret}
      />
    </>
  );
};

export default StripePromise;
