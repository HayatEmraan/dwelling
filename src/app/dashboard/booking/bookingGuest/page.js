import BookingGuestChart from '@/components/dashboard/bookingGuest/BookingGuestChart';
import BookingGuestInfo from '@/components/dashboard/bookingGuest/BookingGuestInfo';
// import BarChart01 from '@/components/dashboard/invoiceGuestPage/Barchart';
import Chart from '@/components/dashboard/invoiceGuestPage/Chart';
import React from 'react';

const BookingGuestPage = () => {
    return (
        <div>
                <h4 className='text-3xl pb-4 font-bold sm:px-6 mt-5'>Booking GuestPage</h4>
                <BookingGuestChart></BookingGuestChart>
                <Chart></Chart>
                {/* <BarChart01></BarChart01> */}
                <BookingGuestInfo></BookingGuestInfo>

        </div>
    );
};

export default BookingGuestPage;