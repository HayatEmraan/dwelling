import React from "react";
import InvoiceLatestPage from "../invoicePage/InvoiceLatestPage";
// import Barchart from './Barchart';
// import Chart from './Chart';
// import ChartGuest from './ChartGuest';

import dynamic from "next/dynamic";
import Victory from "./Victory";
import { VictoryChart } from "victory";


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
      {/* <Victory></Victory> */}
      {/* <VictoryChart></VictoryChart> */}
      <InvoiceLatestPage></InvoiceLatestPage>
    </div>
  );
};

export default InvoiceGuest;
