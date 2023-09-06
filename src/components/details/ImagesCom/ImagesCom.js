"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import ImagesModal from "./ImagesModal";
import { BsGrid3X3Gap } from "react-icons/bs";

const ImagesCom = ({ data}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [showModal, setShowModal] = useState(false);

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
        <div className="relative">
          <div className="grid grid-cols-2 gap-2">
            <div className="overflow-hidden rounded-lg">
              <img
                src={data?.images}
                alt="Image 0"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              {data.images?.slice(1, 5).map((image, index) => (
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
          {data?.images?.length > 5 && (
            <div className="flex justify-center absolute bottom-2 right-5">
              <button
                className="flex items-center bg-white border border-gray-950 rounded px-5 py-1 show-all-button"
                onClick={() => setShowModal(true)}
              >
                <BsGrid3X3Gap  className="mr-2"/>
                Show all photos
              </button>
            </div>
          )}
        </div>
      )}
      <ImagesModal
        data={data}
        visible={showModal}
        setShowModal={setShowModal}
      ></ImagesModal>
    </div>
  );
};

export default ImagesCom;
