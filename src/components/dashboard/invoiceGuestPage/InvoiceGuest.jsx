import React from "react";
import InvoiceLatestPage from "../invoicePage/InvoiceLatestPage";
// import Barchart from './Barchart';
// import Chart from './Chart';
// import ChartGuest from './ChartGuest';

import dynamic from "next/dynamic";

const Scroll = dynamic(
  () => {
    return import("./ChartGuest");
  },
  { ssr: false }
);

const InvoiceGuest = () => {
  return (
    <div>
      <Scroll></Scroll>
      {/* <Chart></Chart> */}
      <InvoiceLatestPage></InvoiceLatestPage>
    </div>
  );
};

export default InvoiceGuest;
