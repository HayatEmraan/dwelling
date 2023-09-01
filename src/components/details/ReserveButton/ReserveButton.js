"use client"


import stripeCheckout from '@/utils/async/stripeCheckout';
import React from 'react';

const ReserveButton = ({ room }) => {



    const handleStripeCheckout = () => {
        stripeCheckout(room)

    }

    return (
        <button
            onClick={handleStripeCheckout}
            className="btn bg-pink-500 text-white w-full my-5">
            Reserve
        </button>
    );
};

export default ReserveButton;