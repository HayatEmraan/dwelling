import React from 'react';
import InvoiceLatestPage from '../invoicePage/InvoiceLatestPage';
// import Barchart from './Barchart';
// import Chart from './Chart';
import ChartGuest from './ChartGuest';





const InvoiceGuest = () => {
    return (
        <div>
            <ChartGuest></ChartGuest>
         {/* <Chart></Chart> */}
            <InvoiceLatestPage></InvoiceLatestPage>
        </div>
    );
};

export default InvoiceGuest;