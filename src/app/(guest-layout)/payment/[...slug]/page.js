import dynamic from "next/dynamic";
import React from "react";
const SuccessComp = dynamic(
  () => import("@/components/payment/success/success"),
  { ssr: false }
);
const FailedComp = dynamic(() => import("@/components/payment/failed/failed"), {
  ssr: false,
});
const PaymentSlug = ({ searchParams }) => {
  const { pay } = searchParams;
  return <>{pay === "true" ? <SuccessComp /> : <FailedComp />}</>;
};

export default PaymentSlug;
