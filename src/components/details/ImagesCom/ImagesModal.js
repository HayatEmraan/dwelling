"use client";
import dynamic from "next/dynamic";

const Pannellum = dynamic(() => import("@/components/image360/image360"), {
  ssr: false,
});
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
      className=" z-40 fixed inset-0 border  bg-black bg-opacity-30 backdrop-blur-sm flex justify-center "
    >
      <div className="w-full md:w-3/4  border rounded-lg bg-white  overflow-scroll overflow-x-hidden mt-40 lg:mt-24 mb-20">
        <div className="flex justify-end">
          <button
            onClick={() => setShowModal(false)}
            className="p-2 rounded-full z-20 fixed"
          >
            <AiFillCloseCircle className="text-gray-950 text-3xl" />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-2 p-5">
          {data.images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg">
              <Pannellum singleImg={image} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImagesModal;
