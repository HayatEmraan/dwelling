import React from 'react';
import InvoiceGuest from '@/components/dashboard/invoiceGuestPage/InvoiceGuest';

const GuestPage = () => {
    return (
        <div>
            <h4 className='text-3xl pb-4 font-bold sm:px-6 mt-5'>Invoice Guest Page</h4>
            <InvoiceGuest></InvoiceGuest>
        </div>
    );
};

export default GuestPage;
