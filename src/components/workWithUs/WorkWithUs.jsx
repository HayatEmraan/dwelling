import React from 'react';
import HeaderComponent from '../shared/header/header';
import Footer from '../shared/footer/page';
import Image from 'next/image';
import PartnerRegisterModal from './PartnerRegisterModal';
import WorkCard from './WorkCard/WorkCard';
import Accordian from './accordian/Accordian';

const WorkWithUs = () => {
    return (
        <>
            < HeaderComponent />
            <div className='max-w-[150rem] my-8'>
                <div className=' flex flex-col lg:flex-row gap-4 lg:justify-between lg:h-screen items-center mx-2 lg:mx-20'>
                    <div>
                        <h1 className='uppercase lg:border-s-4 border-[#ef4444] ps-5 text-center lg:text-left text-gray-400 text-xl lg:text-3xl font-semibold'>Work with <br /> <span className='text-red-500 font-bold text-3xl lg:text-8xl'> world #1</span> <br /> </h1>
                        <div className='lg:tracking-[1rem] text-sm lg:text-xl font-bold uppercase text-center lg:text-right'>
                            rental company
                        </div>
                    </div>

                    <div>
                        <Image
                            src="/photo.jpg"
                            width={1000}
                            height={100}
                            className='rounded-xl'
                        />
                    </div>
                </div>
                <hr className='my-8 lg:my-16' />

                {/* <div className='bg-red-500 relative text-center my-2 lg:my-20 '>
                    <img className='opacity-50' src="https://images.pexels.com/photos/5673488/pexels-photo-5673488.jpeg" alt="" />
                    <h1 className='uppercase absolute top-[45%] lg:top-1/2  text-center  left-[35%] font-bold text-white text-xl lg:text-5xl tracking-tight '><span className=' tracking-tight text-4xl lg:text-8xl'>Welcome</span><br /> to Dwelling Team</h1>
                </div> */}
                <div className='flex flex-col-reverse lg:flex-row gap-6 lg:gap-40 items-center justify-center mx-4 my-8 lg:mx-20'>
                    <div className='lg:w-1/3'>
                        <h1 className='uppercase text-gray-400 text-center lg:text-left text-2xl font-semibold'><span className='text-red-500 font-bold text-xl lg:text-3xl'> Hello Partner !!! </span> <br /></h1>
                        <p className='text-gray-400 my-2 text-xs lg:text-xl'>Your Gateway to Seamless Bookings! Partner with us for unrivaled exposure, seamless transactions, and a community that values your space as much as you do. Join today and unlock a world of hassle-free bookings!</p>

                        <div
                            type="button"
                            data-hs-overlay="#hs-vertically-centered-modal"
                        >
                            <PartnerRegisterModal />
                        </div>
                    </div>
                    <div>
                        <Image
                            src={"/home-promo.webp"}
                            width={600}
                            height={100}
                        />
                    </div>
                </div>

            </div>
            <WorkCard />
            <Accordian />
            <Footer />
        </>
    );
};

export default WorkWithUs;