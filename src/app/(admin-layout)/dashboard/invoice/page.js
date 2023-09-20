import InvoiceLatestPage from "@/components/dashboard/invoicePage/InvoiceLatestPage";
import InvoiceListPage from "@/components/dashboard/invoicePage/InvoiceListPage";
import { getinvoices } from "@/utils/async/admin/invoices/getinvoices";
import React from "react";

const InvoicePage = async () => {
  const data = await getinvoices();
  return (
    <div className="m-5">
      <h3 className="text-3xl pb-4 font-bold sm:px-6">Invoice</h3>
      <InvoiceListPage />
      <InvoiceLatestPage data={data} />
    </div>
  );
};

export default InvoicePage;
