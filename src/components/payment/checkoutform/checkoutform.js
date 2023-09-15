"use client";
import { PaymentElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";

export default function CheckoutForm({ rm }) {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setIsProcessing(true);
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `https://dwelling-bright-server.vercel.app/api/v2/payment/success/stripe?rm=${rm}`,
      },
    });
    console.log(paymentIntent);
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }
    setIsProcessing(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 flex flex-col w-full md:w-1/2 lg:w-1/3">
        <form id="payment-form" onSubmit={handleSubmit}>
          <PaymentElement id="payment-element" />
          <button
            disabled={isProcessing || !stripe || !elements}
            id="submit"
            className="bg-[#635BFF] rounded-[3px] text-[white] font-semibold cursor-pointer transition-all duration-[0.2s] ease-[ease] block mt-4 px-4 py-3 border-0 hover:contrast-[115%] active:translate-y-0 active:brightness-90 active:scale-[0.98] disabled:opacity-50"
          >
            <span id="button-text">
              {isProcessing ? "Processing ... " : "Pay now"}
            </span>
          </button>
          {message && <div id="payment-message">{message}</div>}
        </form>
      </div>
    </div>
  );
}
