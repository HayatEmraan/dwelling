"use client";
import React from "react";
import Confetti from "react-confetti";
import { useRouter } from "next/navigation";

const FailedComp = () => {
  const router = useRouter();
  return (
    <div>
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>Oops!</h1>
          </div>
          <h2>Your payment has failed!</h2>
          <p>
            We are unable to process your payment at this time. Please try with another payment method! 
          </p>
          <div className="flex gap-5">
            <button
              className="bg-[#222222] py-3 mt-5  px-10 text-white text-base font-medium rounded-md cursor-pointer"
              onClick={() => router.push("/")}
            >
              Visit Home Page
            </button>
            <button
              className="bg-gradient-to-r from-pink-500 via-purple-500 to-sky-300 py-3 mt-5  px-5 text-black text-base font-medium rounded-md cursor-pointer"
              onClick={() => router.push("/dashboard")}
            >
              Contact Support
            </button>
          </div>
        </div>
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      </div>
    </div>
  );
};

export default FailedComp;
