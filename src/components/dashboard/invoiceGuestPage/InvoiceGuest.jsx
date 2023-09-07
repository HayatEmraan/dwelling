import React from 'react';
import InvoiceLatestPage from '../invoicePage/InvoiceLatestPage';
// import Barchart from './Barchart';
import Chart from './Chart';





const InvoiceGuest = () => {
    return (
        <div>
         <Chart></Chart>
            <InvoiceLatestPage></InvoiceLatestPage>
        </div>
    );
};

export default InvoiceGuest;