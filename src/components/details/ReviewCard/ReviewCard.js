import moment from "moment";
import React from "react";

const ReviewCard = async ({ review }) => {
  return (
    <div className="mb-10   rounded-lg">
      <div className=" flex gap-x-3">
        <img
          className="w-14 h-14 border  rounded-full"
          src={review?.photo}
          alt=""
        />
        <div className="flex flex-col">
          <h2 className="">{review?.reviewer_name}</h2>
          <p className="text-sm">
            {moment(review?.date, "YYYY-MM-DD").format("YYYY-MM-DD")}
          </p>
        </div>
      </div>
      <div className="mt-5 text-md">
        <p>
          {review?.comment?.length > 200
            ? review?.comment?.slice(0, 200) + "..."
            : review?.comment}
        </p>
        {review?.comment.length > 200 && (
          <button className="underline mt-2 cursor-pointer">Show More</button>
        )}
      </div>
    </div>
  );
};

export default ReviewCard;
