import React from "react";
import { FaStar } from "react-icons/fa";
import ReviewCard from "../ReviewCard/ReviewCard";

const ReviewsComp = async () => {
  const res = await fetch(
    "https://raw.githubusercontent.com/habibur-pro/firxing/main/public/review/review.json"
  );
  const data = await res.json();
  return (
    <>
      <div>
        <h3 className="mb-5 text-xl flex items-center">
          <span className="mr-1">
            <FaStar />
          </span>
          <span>4.9 ~ {data.length} Reviews</span>
        </h3>
      </div>
      <div className=" md:grid grid-cols-2  gap-x-20 gap-y-10 ">
        {data?.slice(0, 4).map((review, index) => (
          <ReviewCard key={index} review={review}></ReviewCard>
        ))}
      </div>
    </>
  );
};

export default ReviewsComp;
