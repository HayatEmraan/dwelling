"use client";
import { RxCross2 } from "react-icons/rx";

const ReviewModal = ({ visible, setShowModal, children }) => {
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
        <button
          onClick={() => setShowModal(false)}
          className="p-2 rounded-full  fixed"
        >
          <RxCross2 />
        </button>
        {children}
      </div>
    </div>
  );
};

export default ReviewModal;
