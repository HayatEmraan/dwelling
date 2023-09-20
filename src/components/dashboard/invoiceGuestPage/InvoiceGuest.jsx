import React from "react";
import dynamic from "next/dynamic";
import { ginvoices } from "@/utils/async/guest/ginvoices/ginvoices";
import GuestInvoices from "./guestinvoices";

const Scroll = dynamic(
  () => {
    return import("./ChartGuest");
  },
  { ssr: false }
);

const InvoiceGuest = async () => {
  const data = await ginvoices();
  return (
    <div>
      <Scroll></Scroll>
      <GuestInvoices data={data}></GuestInvoices>
    </div>
  );
};

export default InvoiceGuest;
