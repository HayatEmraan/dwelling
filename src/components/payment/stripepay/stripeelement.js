"use client";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../checkoutform/checkoutform";
const StripeElement = ({ stripePromise, clientSecret, rm }) => {
  const stripeSecret = loadStripe(stripePromise);
  return (
    <Elements stripe={stripeSecret} options={{ clientSecret }}>
      <CheckoutForm rm={rm} />
    </Elements>
  );
};

export default StripeElement;
