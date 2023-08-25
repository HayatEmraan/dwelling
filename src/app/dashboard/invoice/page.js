import InvoiceLatestPage from '@/components/dashboard/invoicePage/InvoiceLatestPage';
import InvoiceListPage from '@/components/dashboard/invoicePage/InvoiceListPage';

import SearchInvoice from '@/components/dashboard/invoicePage/SearchInvoice';
// import Table from '@/components/dashboard/invoicePage/Table';
import React from 'react';

const InvoicePage = ({children}) => {
    return (
        <div className='m-5'>
            <h3 className='text-3xl font-bold p-4 '>Invoice</h3>
            <div>
              <InvoiceListPage/>
              {/* <SearchInvoice></SearchInvoice> */}
              {/* <Table></Table> */}
          
              <InvoiceLatestPage></InvoiceLatestPage>
                {children}
            </div>
       
        </div>
    );
};

export default InvoicePage;