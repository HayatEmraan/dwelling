"use client";
import { useState } from "react";
import ReviewModal from "../ReviewModal/ReviewModal";

const Reviews = ({ reviews, reviewsModal, reviewsLength }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="my-10 border-t pt-10">
        {reviews}
        <div className="cursor-pointer">
          {reviewsLength > 4 && (
            <button
              onClick={() => setShowModal(true)}
              className="btn  bg-transparent border cursor-pointer border-black p-3 "
            >
              Show All {reviewsLength} Reviews
            </button>
          )}
        </div>
      </div>
      <ReviewModal visible={showModal} setShowModal={setShowModal}>
        {reviewsModal}
      </ReviewModal>
    </>
  );
};

export default Reviews;
