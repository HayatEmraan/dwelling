"use client"

import { useState } from "react";
import ReviewCard from "../ReviewCard/ReviewCard";
import { RxCross2 } from "react-icons/rx";


const ReviewModal = ({ visible, setShowModal, allReviews }) => {
    if (!visible) return null
    const modalHandler = e => {
        e.preventDefault()
        if (e.target.id === 'modalId') {
            setShowModal(false)
        }
    }
    return (
        <div id="modalId" onClick={modalHandler} className=" z-10 fixed inset-0 border  bg-black bg-opacity-30 backdrop-blur-sm flex justify-center ">
            <div className="w-full md:w-3/4  border rounded-lg bg-white  overflow-scroll overflow-x-hidden mt-40 lg:mt-24 mb-20">
                <button onClick={() => setShowModal(false)} className="p-2 rounded-full  fixed"><RxCross2 /></button>

                <div className="md:grid grid-cols-3  p-10">
                    <div className="">
                        <div className="w-full md:w-auto bg-white fixed ">
                            <h1 className="text-xl font-bold ">4.9 ({allReviews.length} reviews)</h1>
                        </div>
                    </div>
                    <div className="col-span-2">
                        {
                            allReviews.map((review, index) => <ReviewCard
                                key={index}
                                review={review}
                            ></ReviewCard>)
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ReviewModal;