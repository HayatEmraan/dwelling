import React from "react";
import ReviewCard from "../ReviewCard/ReviewCard";

const ReviewsModal = async () => {
  const res = await fetch(
    "https://raw.githubusercontent.com/habibur-pro/firxing/main/public/review/review.json"
  );
  const data = await res.json();
  return (
    <div className="md:grid grid-cols-3  p-10">
      <div className="">
        <div className="w-full md:w-auto bg-white fixed ">
          <h1 className="text-xl font-bold ">4.9 ({data.length} reviews)</h1>
        </div>
      </div>
      <div className="col-span-2">
        {data.map((review, index) => (
          <ReviewCard key={index} review={review}></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default ReviewsModal;
