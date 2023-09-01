import InvoiceLatestPage from "@/components/dashboard/invoicePage/InvoiceLatestPage";
import InvoiceListPage from "@/components/dashboard/invoicePage/InvoiceListPage";
import React from "react";

const InvoicePage = () => {
  return (
    <div className="m-5">
      <h3 className="text-3xl pb-4 font-bold sm:px-6">Invoice</h3>
      <InvoiceListPage />
      <InvoiceLatestPage />
    </div>
  );
};

export default InvoicePage;
