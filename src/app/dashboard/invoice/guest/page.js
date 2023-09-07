import InvoiceGuest from '@/components/dashboard/invoiceGuestPage/InvoiceGuest';
import React from 'react';

const GuestPage = () => {
    return (
        <div>
            <h4 className='text-3xl pb-4 font-bold sm:px-6 mt-5'>Invoice GuestPage</h4>
            <InvoiceGuest></InvoiceGuest>
        </div>
    );
};

export default GuestPage;
