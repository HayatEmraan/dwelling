"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
const SliderComponent = ({ images }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {images.map((image, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="relative overflow-hidden h-[400px] md:h-[350px] lg:h-[300px] xl:h-[250px] w-full group-hover:scale-110 transition">
              <Image src={image} alt="room" layout="fill" style={{ objectFit: "cover" }} />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SliderComponent;
