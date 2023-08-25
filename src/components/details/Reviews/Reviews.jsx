"use client"
import { useEffect, useState } from "react";
import moment from "moment/moment";
import { FaStar } from "react-icons/fa";
import ReviewCard from "../ReviewCard/ReviewCard";
import ReviewModal from "../ReviewModal/ReviewModal";





const Reviews = () => {
    const [allReviews, setAllReviews] = useState([])
    const [showModal, setShowModal] = useState(true)


    useEffect(() => {
        fetch('https://raw.githubusercontent.com/habibur-pro/firxing/main/public/review/review.json')
            .then(res => res.json())
            .then(data => setAllReviews(data))
    }, [])
    return (
        <>
            <div className="my-10 border-t pt-10">
                <div>
                    <h3 className="mb-5 text-xl flex items-center">
                        <span className="mr-1"><FaStar /></span>
                        <span>
                            4.9 ~ {allReviews.length} Reviews
                        </span>
                    </h3>
                </div>
                <div className=" md:grid grid-cols-2  gap-x-20 gap-y-10 ">
                    {
                        allReviews?.slice(0, 4).map((review, index) => <ReviewCard key={index} review={review} ></ReviewCard>)
                    }

                </div>
                <div className="cursor-pointer">

                    {
                        allReviews?.length > 4 && <button onClick={() => setShowModal(true)} className="btn  bg-transparent border cursor-pointer border-black p-3 ">Show All {allReviews?.length} Reviews</button>
                    }

                </div>
            </div>

            <ReviewModal allReviews={allReviews} visible={showModal} setShowModal={setShowModal} />

        </>
    );
};

export default Reviews;