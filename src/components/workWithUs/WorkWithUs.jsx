import React from 'react';
import HeaderComponent from '../shared/header/header';
import Footer from '../shared/footer/page';
import Image from 'next/image';
import PartnerRegisterModal from './PartnerRegisterModal';

const WorkWithUs = () => {
    return (
        <>
            < HeaderComponent />
            <div className='max-w-[150rem]'>
                <div className=' flex justify-between items-center my-8 mx-20'>
                    <div>
                        <h1 className='uppercase text-gray-400 text-4xl font-semibold'>Work with <br /> <span className='text-red-500 font-bold text-5xl'> world #1</span> <br /> rental company</h1>
                        <div className='tracking-[2rem]'>
                        </div>
                    </div>

                    <div>
                        <Image
                            src="/photo.jpg"
                            width={1000}
                            height={100}
                            className='rounded-lg'
                        />
                    </div>
                </div>
                <hr className='my-8 ' />

                <div className='bg-red-500 py-40 text-center my-10 '>
                    <h1 className='uppercase font-bold text-white text-5xl '>Welcome to <br /> Dwelling Team</h1>
                </div>
                <div className='flex gap-20 items-center justify-center mx-20'>
                    <div className='w-1/3'>
                        <h1 className='uppercase text-gray-400 text-2xl font-semibold'><span className='text-red-500 font-bold text-3xl'> Hello Partner !!! </span> <br /></h1>
                        <p className='text-gray-400 my-2 block'>Your Gateway to Seamless Bookings! Partner with us for unrivaled exposure, seamless transactions, and a community that values your space as much as you do. Join today and unlock a world of hassle-free bookings!</p>
                        
                        {/* <button
                         className=" btn border-none hover:bg-black btn-primary my-2 bg-red-500"
                         data-hs-overlay="#hs-vertically-centered-modal"
                         
                         >
                            Lets Talk With Us
                            <PartnerRegisterModal />
                        </button> */}

                        <button
                            type="button"
                            data-hs-overlay="#hs-vertically-centered-modal"
                        >
                            <PartnerRegisterModal />
                        </button>
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
            <Footer />
        </>
    );
};

export default WorkWithUs;