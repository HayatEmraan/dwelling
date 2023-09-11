import useDateStore from "@/store/datestore";
import { SSLCommerz } from "@/utils/async/guest/payment/ssl";
import React from "react";
import { useRouter } from "next/navigation";
const SwitchComp = ({ roomID }) => {
  const { date } = useDateStore();
  const router = useRouter();
  const dateFormatStart = new Date(date?.startDate);
  const dateFormatEnd = new Date(date?.endDate);
  const checkIn = dateFormatStart?.toISOString()?.split("T")[0];
  const checkOut = dateFormatEnd?.toISOString()?.split("T")[0];
  const handleSSL = async () => {
    console.log(roomID, checkIn, checkOut);
    const result = await SSLCommerz(roomID, checkIn, checkOut);
    if (result.url) router.replace(result.url);
  };
  return (
    <div className="flex items-center w-full absolute justify-center min-h-screen z-[100] -top-1/4 -bottom-1/2">
      <div className="shadow-lg p-16 md:p-20 bg-white rounded-lg w-full mx-12 md:w-fit">
        <h1 className="text-3xl font-semibold text-center my-6 bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent whitespace-nowrap">
          <span className="hidden md:inline-flex">select</span> payment method{" "}
        </h1>
        <div className="space-x-4 flex flex-col-reverse md:flex-row-reverse md:gap-4 items-center">
          <button
            onClick={handleSSL}
            type="button"
            className="text-gray-900  bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-800 dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200 mr-2 mb-2"
          >
            <img src="/img/payment/ssl.png" alt="ssl" className="w-24 mr-2" />
            <span className="hidden md:block">Pay with SSL </span>Commerz
          </button>
          <button
            type="button"
            className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2"
          >
            <img
              src="/img/payment/stripe.png"
              alt="stripe"
              className="w-24 mr-2 h-5"
            />
            <span className="hidden md:inline-flex mr-1">Pay with</span>Stripe
          </button>
        </div>
      </div>
    </div>
  );
};

export default SwitchComp;
