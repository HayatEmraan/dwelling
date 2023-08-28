"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import Modal from "react-modal";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};  

const ImagesCom = ({ data }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="my-5">
      {isMobile ? (
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {data.images.map((singleImg, index) => (
            <SwiperSlide key={index}>
              <Image src={singleImg} width={500} height={300}></Image>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="lg:grid gap-2 lg:grid-cols-2">
          {data.images.map((singleImg, index) => (
            <div key={index}>
              <Image src={singleImg} width={500} height={300}></Image>
            </div>
          ))}
          {data.images.length > 5 && (
            <button
              className="show-all-button"
              onClick={() => setModalIsOpen(true)}
            >
              Show All
            </button>
          )}
        </div>
      )}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
      >
        <div className="modal-image-grid">
          {data.images.map((image, index) => (
            <div key={index} className="modal-image-grid-item">
              <img src={image} alt={`Image ${index}`} />
            </div>
          ))}
        </div>
      </Modal>
    </div>
  );
};

export default ImagesCom;
