"use client"
import Image from 'next/image';
import React, { useRef, useEffect, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';
import { Navigation } from 'swiper/modules';

const CategoriesComponent = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('./header/categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div>
            <Swiper
                breakpoints={{
                    0: {
                        slidesPerView: 4
                    },
                    640: {
                        slidesPerView: 8
                    },
                    768: {
                        slidesPerView: 12
                    }
                }}
                loop={true}
                spaceBetween={30}
                centeredSlides={false}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"

            >
                {
                    categories.map(category => <SwiperSlide
                        key={category._id}
                        className='flex justify-center items-center flex-col'
                    >
                        <img className='w-8' src={category.icon} alt="" />
                        <p>{category.label}</p>
                    </SwiperSlide>)
                }
            </Swiper>

        </div>
    );
};

export default CategoriesComponent;