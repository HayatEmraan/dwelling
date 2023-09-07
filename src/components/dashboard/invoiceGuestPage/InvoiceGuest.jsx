import React from "react";
import InvoiceLatestPage from "../invoicePage/InvoiceLatestPage";
// import Barchart from "./Barchart";
import BarChart01 from "./Barchart";

const InvoiceGuest = () => {
  return (
    <div>
      <BarChart01></BarChart01>
      {/* <Barchart></Barchart> */}
      <InvoiceLatestPage></InvoiceLatestPage>
    </div>
  );
};

export default InvoiceGuest;
