"use client";
import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";

const ImagesModal = ({ data, visible, setShowModal }) => {
  if (!visible) return null;
  const modalHandler = (e) => {
    e.preventDefault();
    if (e.target.id === "modalId") {
      setShowModal(false);
    }
  };
  return (
    <div
      id="modalId"
      onClick={modalHandler}
      className=" z-10 fixed inset-0 border  bg-black bg-opacity-30 backdrop-blur-sm flex justify-center "
    >
      <div className="w-full md:w-3/4  border rounded-lg bg-white  overflow-scroll overflow-x-hidden mt-40 lg:mt-24 mb-20">
        <div className="flex justify-end">
          <button
            onClick={() => setShowModal(false)}
            className="p-2 rounded-full  fixed"
          >
            <AiFillCloseCircle className="text-red-500 text-5xl" />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {data.images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg">
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImagesModal;
